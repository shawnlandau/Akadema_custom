// Data structure for Custom Glove Designer

const gloveData = {
  leathers: [
    { id: 'torino', name: 'Torino', description: 'Premium quality leather', price: 475 },
    { id: 'prosoft-elite', name: 'Prosoft Elite', description: 'Elite performance material', price: 425 },
    { id: 'pro-soft', name: 'Pro Soft', description: 'Soft, game-ready feel', price: 375 },
    { id: 'prodigy', name: 'Prodigy', description: 'Professional grade', price: 325 }
  ],

  throwHands: [
    { id: 'right', name: 'Right Hand Throw', description: 'Glove goes on left hand' },
    { id: 'left', name: 'Left Hand Throw', description: 'Glove goes on right hand' }
  ],

  webStyles: [
    { 
      id: 'h-web-csd111', 
      name: 'H Web CSD111', 
      backType: 'Open',
      sizes: ['11', '11.25', '11.5', '11.75', '12', '12.5']
    },
    { 
      id: 'bhive-cbo25', 
      name: 'Bhive Web CBO25', 
      backType: 'Open',
      sizes: ['11.5', '11.75', '12', '12.5', '12.75']
    },
    { 
      id: 'pro-h-apv7', 
      name: 'Pro H APV7', 
      backType: 'Closed',
      sizes: ['11.5', '11.75', '12']
    },
    { 
      id: 'i-web-apr233', 
      name: 'I Web APR233', 
      backType: 'Open',
      sizes: ['11.5', '12', '12.75', '13']
    },
    { 
      id: 'trapeze-ata255', 
      name: 'Trapeze ATA255', 
      backType: 'Closed',
      sizes: ['11.75', '12', '12.5']
    },
    { 
      id: 'modified-pro-h-ahj244', 
      name: 'Modified Pro H AHJ244', 
      backType: 'Open',
      sizes: ['11.5', '11.75', '12', '12.5']
    },
    { 
      id: 'basket-atm92', 
      name: 'Basket ATM92', 
      backType: 'Closed',
      sizes: ['11.5', '12', '12.5', '12.75']
    },
    { 
      id: 'modified-trap-adp233', 
      name: 'Modified Trap ADP233', 
      backType: 'Open',
      sizes: ['11.75', '12', '12.5', '13']
    },
    { 
      id: 'two-piece-closed-atc82', 
      name: 'Two Piece Closed ATC82', 
      backType: 'Closed',
      sizes: ['11.5', '11.75', '12']
    },
    { 
      id: 'pro-i-apr257', 
      name: 'Pro I APR257', 
      backType: 'Open',
      sizes: ['11.5', '12', '12.5', '12.75', '13']
    }
  ],

  // Color definitions with hex values for swatches
  colors: {
    standard: [
      { id: 'black', name: 'Black', hex: '#1a1a1a' },
      { id: 'brown', name: 'Brown', hex: '#5d4037' },
      { id: 'tan', name: 'Tan', hex: '#d2b48c' },
      { id: 'red', name: 'Red', hex: '#c62828' },
      { id: 'navy', name: 'Navy', hex: '#1565c0' },
      { id: 'royal-blue', name: 'Royal Blue', hex: '#2962ff' },
      { id: 'white', name: 'White', hex: '#f5f5f5' }
    ],
    shellRestricted: {
      torino: [
        { id: 'sandstone', name: 'Sandstone', hex: '#c2a788' }
      ],
      'pro-leather': [
        { id: 'tan', name: 'Tan', hex: '#d2b48c' }
      ],
      precision: [
        { id: 'red', name: 'Red', hex: '#c62828' },
        { id: 'silver', name: 'Silver', hex: '#bdbdbd' }
      ],
      'pro-soft': [
        { id: 'black', name: 'Black', hex: '#1a1a1a' },
        { id: 'brown', name: 'Brown', hex: '#5d4037' },
        { id: 'tan', name: 'Tan', hex: '#d2b48c' },
        { id: 'red', name: 'Red', hex: '#c62828' },
        { id: 'navy', name: 'Navy', hex: '#1565c0' },
        { id: 'royal-blue', name: 'Royal Blue', hex: '#2962ff' },
        { id: 'white', name: 'White', hex: '#f5f5f5' }
      ]
    }
  },

  labels: [
    { id: 'yellow-logo', name: 'Yellow Logo' },
    { id: 'silver-logo', name: 'Silver Logo' },
    { id: 'black-logo', name: 'Black Logo' },
    { id: 'black-white-logo', name: 'Black/White Logo' }
  ],

  fingerEmbroidery: [
    { id: 'yellow', name: 'Yellow' },
    { id: 'silver', name: 'Silver' },
    { id: 'silver-alt', name: 'Silver (Alt)' },
    { id: 'white', name: 'White' }
  ],

  flags: [
    { id: 'none', name: 'No Flag' },
    { id: 'usa', name: 'USA 🇺🇸' },
    { id: 'texas', name: 'Texas' },
    { id: 'dominican', name: 'Dominican Republic 🇩🇴' },
    { id: 'canada', name: 'Canada 🇨🇦' },
    { id: 'mexico', name: 'Mexico 🇲🇽' },
    { id: 'puerto-rico', name: 'Puerto Rico 🇵🇷' },
    { id: 'japan', name: 'Japan 🇯🇵' },
    { id: 'korea', name: 'Korea 🇰🇷' }
  ]
};

