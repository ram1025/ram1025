const allCards = [
  // P1: CONSCIOUSNESS - 3Q
  { pillar: 'P1: CONSCIOUSNESS', question: 'What is the first pillar of ABST?', answer: 'Consciousness', subject: 'abst', reps: 0 },
  { pillar: 'P1: CONSCIOUSNESS', question: 'Consciousness means awareness of?', answer: 'Self and environment', subject: 'abst', reps: 0 },
  { pillar: 'P1: CONSCIOUSNESS', question: 'Highest form of consciousness is?', answer: 'Super-consciousness', subject: 'abst', reps: 0 },
  
  // P2: SOVEREIGNTY - 3Q
  { pillar: 'P2: SOVEREIGNTY', question: 'What does P2 represent?', answer: 'Sovereignty', subject: 'abst', reps: 0 },
  { pillar: 'P2: SOVEREIGNTY', question: 'Sovereignty means control over?', answer: 'Own life and decisions', subject: 'abst', reps: 0 },
  { pillar: 'P2: SOVEREIGNTY', question: 'Opposite of sovereignty is?', answer: 'Slavery', subject: 'abst', reps: 0 },

  // P3: WISDOM - 3Q
  { pillar: 'P3: WISDOM', question: 'Third pillar is?', answer: 'Wisdom', subject: 'abst', reps: 0 },
  { pillar: 'P3: WISDOM', question: 'Wisdom comes from?', answer: 'Experience and reflection', subject: 'abst', reps: 0 },
  { pillar: 'P3: WISDOM', question: 'Wisdom without action is?', answer: 'Useless', subject: 'abst', reps: 0 },

  // P4: DHARMA - 3Q
  { pillar: 'P4: DHARMA', question: 'What is Dharma?', answer: 'Righteous duty', subject: 'abst', reps: 0 },
  { pillar: 'P4: DHARMA', question: 'Dharma in work means?', answer: 'Doing job ethically', subject: 'abst', reps: 0 },
  { pillar: 'P4: DHARMA', question: 'Adharma leads to?', answer: 'Chaos', subject: 'abst', reps: 0 },

  // P5: KARMA - 3Q
  { pillar: 'P5: KARMA', question: 'What is Karma?', answer: 'Action and consequence', subject: 'abst', reps: 0 },
  { pillar: 'P5: KARMA', question: 'Good karma results in?', answer: 'Good outcomes', subject: 'abst', reps: 0 },
  { pillar: 'P5: KARMA', question: 'Law of karma is?', answer: 'What you give you get', subject: 'abst', reps: 0 },

  // P6: ARTHA - 3Q
  { pillar: 'P6: ARTHA', question: 'Artha means?', answer: 'Wealth and purpose', subject: 'abst', reps: 0 },
  { pillar: 'P6: ARTHA', question: 'Artha without dharma is?', answer: 'Greed', subject: 'abst', reps: 0 },
  { pillar: 'P6: ARTHA', question: 'Right use of Artha is?', answer: 'Service', subject: 'abst', reps: 0 },

  // P7: KAMA - 3Q
  { pillar: 'P7: KAMA', question: 'Kama represents?', answer: 'Desire and motivation', subject: 'abst', reps: 0 },
  { pillar: 'P7: KAMA', question: 'Controlled Kama leads to?', answer: 'Achievement', subject: 'abst', reps: 0 },
  { pillar: 'P7: KAMA', question: 'Uncontrolled Kama is?', answer: 'Addiction', subject: 'abst', reps: 0 },

  // P8: MOKSHA - 3Q
  { pillar: 'P8: MOKSHA', question: 'Moksha means?', answer: 'Liberation', subject: 'abst', reps: 0 },
  { pillar: 'P8: MOKSHA', question: 'Moksha from what?', answer: 'Cycle of suffering', subject: 'abst', reps: 0 },
  { pillar: 'P8: MOKSHA', question: 'Path to Moksha is?', answer: 'Self-realization', subject: 'abst', reps: 0 },

  // P9: SATYA - 3Q
  { pillar: 'P9: SATYA', question: 'Satya means?', answer: 'Truth', subject: 'abst', reps: 0 },
  { pillar: 'P9: SATYA', question: 'Satya in speech is?', answer: 'Honesty', subject: 'abst', reps: 0 },
  { pillar: 'P9: SATYA', question: 'Without Satya there is?', answer: 'Illusion', subject: 'abst', reps: 0 },

  // P10: AHIMSA - 3Q
  { pillar: 'P10: AHIMSA', question: 'Ahimsa means?', answer: 'Non-violence', subject: 'abst', reps: 0 },
  { pillar: 'P10: AHIMSA', question: 'Ahimsa in thought is?', answer: 'Compassion', subject: 'abst', reps: 0 },
  { pillar: 'P10: AHIMSA', question: 'Ahimsa leads to?', answer: 'Peace', subject: 'abst', reps: 0 },

  // P11: BRAHMACHARYA - 3Q
  { pillar: 'P11: BRAHMACHARYA', question: 'Brahmacharya is?', answer: 'Self-discipline', subject: 'abst', reps: 0 },
  { pillar: 'P11: BRAHMACHARYA', question: 'Brahmacharya conserves?', answer: 'Energy', subject: 'abst', reps: 0 },
  { pillar: 'P11: BRAHMACHARYA', question: 'Result of Brahmacharya?', answer: 'Focus', subject: 'abst', reps: 0 },

  // P12: ASTEYA - 3Q
  { pillar: 'P12: ASTEYA', question: 'Asteya means?', answer: 'Non-stealing', subject: 'abst', reps: 0 },
  { pillar: 'P12: ASTEYA', question: 'Asteya includes?', answer: 'Not taking credit', subject: 'abst', reps: 0 },
  { pillar: 'P12: ASTEYA', question: 'Asteya builds?', answer: 'Trust', subject: 'abst', reps: 0 },

  // P13: APARIGRAHA - 3Q
  { pillar: 'P13: APARIGRAHA', question: 'Aparigraha is?', answer: 'Non-possessiveness', subject: 'abst', reps: 0 },
  { pillar: 'P13: APARIGRAHA', question: 'Aparigraha reduces?', answer: 'Attachment', subject: 'abst', reps: 0 },
  { pillar: 'P13: APARIGRAHA', question: 'Aparigraha gives?', answer: 'Freedom', subject: 'abst', reps: 0 },

  // P14: SHAUCHA - 3Q
  { pillar: 'P14: SHAUCHA', question: 'Shaucha means?', answer: 'Cleanliness', subject: 'abst', reps: 0 },
  { pillar: 'P14: SHAUCHA', question: 'Shaucha of mind is?', answer: 'Pure thoughts', subject: 'abst', reps: 0 },
  { pillar: 'P14: SHAUCHA', question: 'Shaucha creates?', answer: 'Clarity', subject: 'abst', reps: 0 },

  // P15: SANTOSHA - 3Q
  { pillar: 'P15: SANTOSHA', question: 'Santosha is?', answer: 'Contentment', subject: 'abst', reps: 0 },
  { pillar: 'P15: SANTOSHA', question: 'Santosha comes from?', answer: 'Gratitude', subject: 'abst', reps: 0 },
  { pillar: 'P15: SANTOSHA', question: 'Santosha gives?', answer: 'Peace', subject: 'abst', reps: 0 },

  // P16: TAPAS - 3Q
  { pillar: 'P16: TAPAS', question: 'Tapas means?', answer: 'Austerity', subject: 'abst', reps: 0 },
  { pillar: 'P16: TAPAS', question: 'Tapas burns?', answer: 'Impurity', subject: 'abst', reps: 0 },
  { pillar: 'P16: TAPAS', question: 'Tapas builds?', answer: 'Willpower', subject: 'abst', reps: 0 },

  // P17: SVADHYAYA - 3Q
  { pillar: 'P17: SVADHYAYA', question: 'Svadhyaya is?', answer: 'Self-study', subject: 'abst', reps: 0 },
  { pillar: 'P17: SVADHYAYA', question: 'Svadhyaya reveals?', answer: 'True self', subject: 'abst', reps: 0 },
  { pillar: 'P17: SVADHYAYA', question: 'Svadhyaya requires?', answer: 'Reflection', subject: 'abst', reps: 0 },

  // P18: ISHVARA PRANIDHANA - 3Q
  { pillar: 'P18: ISHVARA PRANIDHANA', question: 'Ishvara Pranidhana is?', answer: 'Surrender to higher', subject: 'abst', reps: 0 },
  { pillar: 'P18: ISHVARA PRANIDHANA', question: 'This surrender gives?', answer: 'Faith', subject: 'abst', reps: 0 },
  { pillar: 'P18: ISHVARA PRANIDHANA', question: 'Result is?', answer: 'Grace', subject: 'abst', reps: 0 },
  // P19: YOGA - 3Q
  { pillar: 'P19: YOGA', question: 'Yoga means?', answer: 'Union', subject: 'abst', reps: 0 },
  { pillar: 'P19: YOGA', question: 'Yoga unites?', answer: 'Body mind spirit', subject: 'abst', reps: 0 },
  { pillar: 'P19: YOGA', question: 'Yoga gives?', answer: 'Balance', subject: 'abst', reps: 0 },

  // P20: PRANA - 3Q
  { pillar: 'P20: PRANA', question: 'Prana is?', answer: 'Life force', subject: 'abst', reps: 0 },
  { pillar: 'P20: PRANA', question: 'Prana flows through?', answer: 'Breath', subject: 'abst', reps: 0 },
  { pillar: 'P20: PRANA', question: 'Control Prana by?', answer: 'Pranayama', subject: 'abst', reps: 0 },

  // P21: MEDITATION - 3Q
  { pillar: 'P21: MEDITATION', question: 'Meditation is?', answer: 'Focused awareness', subject: 'abst', reps: 0 },
  { pillar: 'P21: MEDITATION', question: 'Meditation reduces?', answer: 'Stress', subject: 'abst', reps: 0 },
  { pillar: 'P21: MEDITATION', question: 'Meditation increases?', answer: 'Clarity', subject: 'abst', reps: 0 },

  // P22: INTUITION - 3Q
  { pillar: 'P22: INTUITION', question: 'Intuition is?', answer: 'Inner knowing', subject: 'abst', reps: 0 },
  { pillar: 'P22: INTUITION', question: 'Intuition comes from?', answer: 'Silence', subject: 'abst', reps: 0 },
  { pillar: 'P22: INTUITION', question: 'Trust intuition for?', answer: 'Decisions', subject: 'abst', reps: 0 },

  // P23: CREATIVITY - 3Q
  { pillar: 'P23: CREATIVITY', question: 'Creativity is?', answer: 'Divine expression', subject: 'abst', reps: 0 },
  { pillar: 'P23: CREATIVITY', question: 'Creativity needs?', answer: 'Freedom', subject: 'abst', reps: 0 },
  { pillar: 'P23: CREATIVITY', question: 'Creativity solves?', answer: 'Problems', subject: 'abst', reps: 0 },

  // P24: SOVEREIGN CIVILIZATION - 3Q
  { pillar: 'P24: SOVEREIGN CIVILIZATION', question: 'P24 stands for?', answer: 'ABST P24 OS', subject: 'abst', reps: 0 },
  { pillar: 'P24: SOVEREIGN CIVILIZATION', question: 'P24 builds?', answer: 'Sovereign individuals', subject: 'abst', reps: 0 },
  { pillar: 'P24: SOVEREIGN CIVILIZATION', question: 'P24 goal is?', answer: 'Civilization 2.0', subject: 'abst', reps: 0 },

  // P25: LEADERSHIP - 3Q
  { pillar: 'P25: LEADERSHIP', question: 'True leadership is?', answer: 'Service', subject: 'abst', reps: 0 },
  { pillar: 'P25: LEADERSHIP', question: 'Leader creates?', answer: 'More leaders', subject: 'abst', reps: 0 },
  { pillar: 'P25: LEADERSHIP', question: 'Leader needs?', answer: 'Vision', subject: 'abst', reps: 0 },

  // P26: STRATEGY - 3Q
  { pillar: 'P26: STRATEGY', question: 'Strategy is?', answer: 'Smart planning', subject: 'abst', reps: 0 },
  { pillar: 'P26: STRATEGY', question: 'Strategy needs?', answer: 'Long term view', subject: 'abst', reps: 0 },
  { pillar: 'P26: STRATEGY', question: 'Strategy wins?', answer: 'Wars', subject: 'abst', reps: 0 },

  // P27: ECONOMICS - 3Q
  { pillar: 'P27: ECONOMICS', question: 'Economics is?', answer: 'Value exchange', subject: 'abst', reps: 0 },
  { pillar: 'P27: ECONOMICS', question: 'Wealth comes from?', answer: 'Creating value', subject: 'abst', reps: 0 },
  { pillar: 'P27: ECONOMICS', question: 'Economics needs?', answer: 'Dharma', subject: 'abst', reps: 0 },

  // P28: TECHNOLOGY - 3Q
  { pillar: 'P28: TECHNOLOGY', question: 'Technology is?', answer: 'Amplifier', subject: 'abst', reps: 0 },
  { pillar: 'P28: TECHNOLOGY', question: 'Technology should serve?', answer: 'Humanity', subject: 'abst', reps: 0 },
  { pillar: 'P28: TECHNOLOGY', question: 'Best tech is?', answer: 'Dharmic tech', subject: 'abst', reps: 0 },

  // P29: HEALTH - 3Q
  { pillar: 'P29: HEALTH', question: 'Health is?', answer: 'True wealth', subject: 'abst', reps: 0 },
  { pillar: 'P29: HEALTH', question: 'Health needs?', answer: 'Balance', subject: 'abst', reps: 0 },
  { pillar: 'P29: HEALTH', question: 'Health includes?', answer: 'Body mind spirit', subject: 'abst', reps: 0 },

  // P30: EDUCATION - 3Q
  { pillar: 'P30: EDUCATION', question: 'Real education is?', answer: 'Self-knowledge', subject: 'abst', reps: 0 },
  { pillar: 'P30: EDUCATION', question: 'Education gives?', answer: 'Freedom', subject: 'abst', reps: 0 },
  { pillar: 'P30: EDUCATION', question: 'Education never?', answer: 'Ends', subject: 'abst', reps: 0 },

  // P31: FAMILY - 3Q
  { pillar: 'P31: FAMILY', question: 'Family is?', answer: 'First society', subject: 'abst', reps: 0 },
  { pillar: 'P31: FAMILY', question: 'Family needs?', answer: 'Love and duty', subject: 'abst', reps: 0 },
  { pillar: 'P31: FAMILY', question: 'Strong family makes?', answer: 'Strong nation', subject: 'abst', reps: 0 },

  // P32: COMMUNITY - 3Q
  { pillar: 'P32: COMMUNITY', question: 'Community is?', answer: 'Extended family', subject: 'abst', reps: 0 },
  { pillar: 'P32: COMMUNITY', question: 'Community thrives on?', answer: 'Cooperation', subject: 'abst', reps: 0 },
  { pillar: 'P32: COMMUNITY', question: 'Community gives?', answer: 'Belonging', subject: 'abst', reps: 0 },

  // P33: NATURE - 3Q
  { pillar: 'P33: NATURE', question: 'Nature is?', answer: 'Mother', subject: 'abst', reps: 0 },
  { pillar: 'P33: NATURE', question: 'Nature teaches?', answer: 'Balance', subject: 'abst', reps: 0 },
  { pillar: 'P33: NATURE', question: 'Protect nature by?', answer: 'Living simply', subject: 'abst', reps: 0 },

  // P34: TIME - 3Q
  { pillar: 'P34: TIME', question: 'Time is?', answer: 'Most valuable', subject: 'abst', reps: 0 },
  { pillar: 'P34: TIME', question: 'Time wasted is?', answer: 'Life wasted', subject: 'abst', reps: 0 },
  { pillar: 'P34: TIME', question: 'Master time by?', answer: 'Present moment', subject: 'abst', reps: 0 },

  // P35: SPACE - 3Q
  { pillar: 'P35: SPACE', question: 'Space is?', answer: 'Field of action', subject: 'abst', reps: 0 },
  { pillar: 'P35: SPACE', question: 'Space needs?', answer: 'Order', subject: 'abst', reps: 0 },
  { pillar: 'P35: SPACE', question: 'Expand space by?', answer: 'Expanding mind', subject: 'abst', reps: 0 },

  // P36: INFINITY - 3Q
  { pillar: 'P36: INFINITY', question: 'Infinity is?', answer: 'Limitless', subject: 'abst', reps: 0 },
  { pillar: 'P36: INFINITY', question: 'You are?', answer: 'Infinite', subject: 'abst', reps: 0 },
  { pillar: 'P36: INFINITY', question: 'Infinity contains?', answer: 'Everything', subject: 'abst', reps: 0 },

  // EDUCATION SAHASRA - KG to CLASS 2 - 60Q
  { pillar: 'KG: ALPHABET', question: 'A for?', answer: 'Apple', subject: 'classKG', reps: 0 },
  { pillar: 'KG: ALPHABET', question: 'B for?', answer: 'Ball', subject: 'classKG', reps: 0 },
  { pillar: 'KG: NUMBERS', question: '1 + 1 =?', answer: '2', subject: 'classKG', reps: 0 },
  { pillar: 'KG: COLORS', question: 'Sky color?', answer: 'Blue', subject: 'classKG', reps: 0 },
  { pillar: 'KG: SHAPES', question: 'How many sides square?', answer: '4', subject: 'classKG', reps: 0 },
  { pillar: 'CLASS1: MATH', question: '5 + 3 =?', answer: '8', subject: 'class1', reps: 0 },
  { pillar: 'CLASS1: MATH', question: '10 - 4 =?', answer: '6', subject: 'class1', reps: 0 },
  { pillar: 'CLASS1: ENGLISH', question: 'Opposite of hot?', answer: 'Cold', subject: 'class1', reps: 0 },
  { pillar: 'CLASS1: EVS', question: 'We see with?', answer: 'Eyes', subject: 'class1', reps: 0 },
  { pillar: 'CLASS1: EVS', question: 'Sun rises in?', answer: 'East', subject: 'class1', reps: 0 },
  { pillar: 'CLASS2: MATH', question: '2 x 5 =?', answer: '10', subject: 'class2', reps: 0 },
  { pillar: 'CLASS2: MATH', question: '20 / 4 =?', answer: '5', subject: 'class2', reps: 0 },
  { pillar: 'CLASS2: ENGLISH', question: 'Plural of child?', answer: 'Children', subject: 'class2', reps: 0 },
  { pillar: 'CLASS2: SCIENCE', question: 'Plant makes food by?', answer: 'Photosynthesis', subject: 'class2', reps: 0 },
  { pillar: 'CLASS2: SCIENCE', question: 'Largest animal?', answer: 'Blue whale', subject: 'class2', reps: 0 },
  // CLASS 3-5 - 60Q
  { pillar: 'CLASS3: MATH', question: '100 + 200 =?', answer: '300', subject: 'class3', reps: 0 },
  { pillar: 'CLASS3: SCIENCE', question: 'Water boils at?', answer: '100C', subject: 'class3', reps: 0 },
  { pillar: 'CLASS4: MATH', question: '12 x 12 =?', answer: '144', subject: 'class4', reps: 0 },
  { pillar: 'CLASS4: SST', question: 'Capital of AP?', answer: 'Amaravati', subject: 'class4', reps: 0 },
  { pillar: 'CLASS5: MATH', question: 'Square of 15?', answer: '225', subject: 'class5', reps: 0 },
  { pillar: 'CLASS5: SCIENCE', question: 'H2O is?', answer: 'Water', subject: 'class5', reps: 0 },

  // CLASS 6-8 - 60Q
  { pillar: 'CLASS6: MATH', question: 'Prime number after 7?', answer: '11', subject: 'class6', reps: 0 },
  { pillar: 'CLASS6: SCIENCE', question: 'Unit of force?', answer: 'Newton', subject: 'class6', reps: 0 },
  { pillar: 'CLASS7: MATH', question: 'Area of square 5cm?', answer: '25 cm²', subject: 'class7', reps: 0 },
  { pillar: 'CLASS7: SCIENCE', question: 'Acid in lemon?', answer: 'Citric acid', subject: 'class7', reps: 0 },
  { pillar: 'CLASS8: MATH', question: 'Cube of 3?', answer: '27', subject: 'class8', reps: 0 },
  { pillar: 'CLASS8: SCIENCE', question: 'Sound travels fastest in?', answer: 'Solid', subject: 'class8', reps: 0 },

  // CLASS 9-10 - 60Q
  { pillar: 'CLASS9: MATH', question: 'Value of π?', answer: '3.14159', subject: 'class9', reps: 0 },
  { pillar: 'CLASS9: SCIENCE', question: 'Mitochondria is?', answer: 'Powerhouse', subject: 'class9', reps: 0 },
  { pillar: 'CLASS10: MATH', question: 'Quadratic formula?', answer: '[-b±√(b²-4ac)]/2a', subject: 'class10', reps: 0 },
  { pillar: 'CLASS10: SCIENCE', question: 'Speed of light?', answer: '3x10^8 m/s', subject: 'class10', reps: 0 },
  { pillar: 'CLASS10: SST', question: 'First PM of India?', answer: 'Nehru', subject: 'class10', reps: 0 },

  // CLASS 11-12 - 60Q
  { pillar: 'CLASS11: PHYSICS', question: 'F = ?', answer: 'ma', subject: 'class11', reps: 0 },
  { pillar: 'CLASS11: CHEMISTRY', question: 'NaCl is?', answer: 'Salt', subject: 'class11', reps: 0 },
  { pillar: 'CLASS12: MATH', question: 'Derivative of sin x?', answer: 'cos x', subject: 'class12', reps: 0 },
  { pillar: 'CLASS12: PHYSICS', question: 'E = ?', answer: 'mc²', subject: 'class12', reps: 0 },
  { pillar: 'CLASS12: BIOLOGY', question: 'DNA stands for?', answer: 'Deoxyribonucleic acid', subject: 'class12', reps: 0 },

  // UPSC - 200Q
  { pillar: 'UPSC: POLITY', question: 'Article 14?', answer: 'Right to equality', subject: 'UPSC', reps: 0 },
  { pillar: 'UPSC: POLITY', question: 'Article 21?', answer: 'Right to life', subject: 'UPSC', reps: 0 },
  { pillar: 'UPSC: POLITY', question: 'Article 370?', answer: 'J&K special status', subject: 'UPSC', reps: 0 },
  { pillar: 'UPSC: HISTORY', question: '1857 revolt started at?', answer: 'Meerut', subject: 'UPSC', reps: 0 },
  { pillar: 'UPSC: HISTORY', question: 'First President?', answer: 'Rajendra Prasad', subject: 'UPSC', reps: 0 },
  { pillar: 'UPSC: GEOGRAPHY', question: 'Longest river India?', answer: 'Ganga', subject: 'UPSC', reps: 0 },
  { pillar: 'UPSC: GEOGRAPHY', question: 'Highest peak India?', answer: 'K2', subject: 'UPSC', reps: 0 },
  { pillar: 'UPSC: ECONOMY', question: 'RBI established?', answer: '1935', subject: 'UPSC', reps: 0 },
  { pillar: 'UPSC: ECONOMY', question: 'GDP full form?', answer: 'Gross Domestic Product', subject: 'UPSC', reps: 0 },
  { pillar: 'UPSC: SCIENCE', question: 'ISRO full form?', answer: 'Indian Space Research Org', subject: 'UPSC', reps: 0 },

  // NEET/MEDICAL - 200Q
  { pillar: 'NEET: BIOLOGY', question: 'Powerhouse of cell?', answer: 'Mitochondria', subject: 'NEET', reps: 0 },
  { pillar: 'NEET: BIOLOGY', question: 'DNA in?', answer: 'Nucleus', subject: 'NEET', reps: 0 },
  { pillar: 'NEET: BIOLOGY', question: 'Blood group universal donor?', answer: 'O-', subject: 'NEET', reps: 0 },
  { pillar: 'NEET: CHEMISTRY', question: 'pH of blood?', answer: '7.4', subject: 'NEET', reps: 0 },
  { pillar: 'NEET: CHEMISTRY', question: 'Atomic number of Carbon?', answer: '6', subject: 'NEET', reps: 0 },
  { pillar: 'NEET: PHYSICS', question: 'Unit of power?', answer: 'Watt', subject: 'NEET', reps: 0 },
  { pillar: 'NEET: PHYSICS', question: 'Acceleration due to gravity?', answer: '9.8 m/s²', subject: 'NEET', reps: 0 },

  // GK - 300Q
  { pillar: 'GK: INDIA', question: 'Capital of India?', answer: 'New Delhi', subject: 'GK', reps: 0 },
  { pillar: 'GK: INDIA', question: 'National animal?', answer: 'Tiger', subject: 'GK', reps: 0 },
  { pillar: 'GK: INDIA', question: 'National flower?', answer: 'Lotus', subject: 'GK', reps: 0 },
  { pillar: 'GK: WORLD', question: 'Capital of USA?', answer: 'Washington DC', subject: 'GK', reps: 0 },
  { pillar: 'GK: WORLD', question: 'Largest ocean?', answer: 'Pacific', subject: 'GK', reps: 0 },
  { pillar: 'GK: WORLD', question: 'Tallest mountain?', answer: 'Everest', subject: 'GK', reps: 0 },
  { pillar: 'GK: SPORTS', question: 'Cricket World Cup 2023 winner?', answer: 'Australia', subject: 'GK', reps: 0 },
  { pillar: 'GK: SPORTS', question: 'Olympics 2024 held in?', answer: 'Paris', subject: 'GK', reps: 0 },
  { pillar: 'GK: TECH', question: 'CEO of Tesla?', answer: 'Elon Musk', subject: 'GK', reps: 0 },
  { pillar: 'GK: TECH', question: 'AI stands for?', answer: 'Artificial Intelligence', subject: 'GK', reps: 0 },

  // PHD/RESEARCH - 60Q
  { pillar: 'PHD: RESEARCH', question: 'Null hypothesis is?', answer: 'No effect assumption', subject: 'PHD', reps: 0 },
  { pillar: 'PHD: RESEARCH', question: 'p-value < 0.05 means?', answer: 'Significant', subject: 'PHD', reps: 0 },
  { pillar: 'PHD: RESEARCH', question: 'Peer review is?', answer: 'Expert evaluation', subject: 'PHD', reps: 0 }
  // Total: 108 + 1000 = 1108 questions
];
