// SM-2 Multi-Pass Retention Engine (ABST BRAIN Optimized v2)
const SM2_ENGINE = {
    DEFAULT_EASE: 2.5,

    // FIX: Initialize card if due is missing
    initCard: (card) => {
        return {
           ...card,
            reps: card.reps || 0,
            ease: card.ease || SM2_ENGINE.DEFAULT_EASE,
            interval: card.interval || 0,
            passCount: card.passCount || 0,
            due: card.due || 0, // 0 ante immediate due
            customState: card.customState || 'pending'
        };
    },

    // Dynamic Grade calculation
    calculateNewState: (card, score) => {
        // First initialize
        card = SM2_ENGINE.initCard(card);
        
        let { reps, ease, interval, passCount } = card;
        
        if (score < 3) {
            // Again or Hard: Reset cycle, force immediate short-term loop
            interval = 1;
            reps = 0;
        } else {
            // Good or Easy: Progress cycle
            if (reps === 0) interval = 1;
            else if (reps === 1) interval = 6;
            else interval = Math.round(interval * ease);
            
            reps += 1;
            passCount += 1;
        }

        // Update Ease factor with sensitivity
        ease = ease + (0.1 - (5 - score) * (0.08 + (5 - score) * 0.02));
        if (ease < 1.3) ease = 1.3;

        return {
           ...card,
            reps,
            ease,
            interval,
            passCount,
            customState: (passCount >= 5)? 'pass' : 'pending',
            due: Date.now() + (interval * 24 * 60 * 60 * 1000)
        };
    },

    // FIX: Check if card is due - handles missing due field
    isDue: (card) => {
        if (!card.due || card.due === 0) return true; // No due = immediate due
        return card.due <= Date.now();
    },

    // Handle "Again" / "Hard" logic (Immediate Re-queue within +2 blocks)
    getDynamicRequeueIndex: (currentIndex, totalLength) => {
        return Math.min(currentIndex + 2, totalLength);
    }
};

// Export to window so main file can access
window.SM2_ENGINE = SM2_ENGINE;
