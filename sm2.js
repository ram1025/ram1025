// ABST BRAIN - SM-2 Spaced Repetition Engine
// INDIAN.001 | P24: KG to PhD Memory Sovereignty
// Based on SuperMemo SM-2 Algorithm by Piotr Wozniak

/**
 * SM-2 Algorithm Core
 * @param {Object} card - Card object {reps, ease, interval, due}
 * @param {Number} ease - User rating: 1=Again, 2=Hard, 3=Good, 4=Easy
 * @returns {Object} Updated card with new interval and due date
 */
function calcSM2(card, ease) {
  // Initialize card if first time
  if (!card.reps) card.reps = 0;
  if (!card.ease) card.ease = 2.5;
  if (!card.interval) card.interval = 0;

  // SM-2 Logic
  if (ease < 3) {
    // Failed: Reset interval
    card.interval = 1;
    card.reps = 0;
  } else {
    // Passed: Calculate next interval
    if (card.reps === 0) {
      card.interval = 1;
    } else if (card.reps === 1) {
      card.interval = 6;
    } else {
      card.interval = Math.round(card.interval * card.ease);
    }
    card.reps += 1;
  }

  // Update Ease Factor
  card.ease = card.ease + (0.1 - (5 - ease) * (0.08 + (5 - ease) * 0.02));
  if (card.ease < 1.3) card.ease = 1.3;

  // Set next due date
  card.due = Date.now() + card.interval * 24 * 60 * 60 * 1000;

  // P24 Logging
  console.log(`ABST P24 SM-2: Pillar card next due in ${card.interval} days | Ease: ${card.ease.toFixed(2)}`);

  return card;
}

// ABST Specific: Pillar Weight Bonus
function applyPillarWeight(card, pillarNum) {
  // P1, P2, P10, P24, P36 = Core Pillars = Slower forgetting
  const corePillars = [1, 2, 10, 24, 36];
  if (corePillars.includes(pillarNum)) {
    card.interval = Math.round(card.interval * 1.5); // 50% bonus
  }
  return card;
}

// Export for ABST BRAIN
window.ABST_SM2 = {
  calc: calcSM2,
  pillarBoost: applyPillarWeight,
  version: "P24.1.0"
};

console.log('ABST BRAIN SM-2 Engine Loaded | INDIAN.001 | 25K Concepts Ready');
