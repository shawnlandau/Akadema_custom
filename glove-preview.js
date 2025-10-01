// Interactive Glove Preview System

class GlovePreview {
  constructor() {
    this.gloveElement = null;
    this.currentColors = {
      shell: '#d2b48c',      // Default tan
      pocket: '#1a1a1a',     // Default black
      web: '#1a1a1a',        // Default black
      lace: '#1a1a1a',       // Default black
      welting: '#1a1a1a',    // Default black
      stitch: '#1a1a1a',     // Default black
      binding: '#1a1a1a',    // Default black
      embroidery: '#1a1a1a'  // Default black
    };
    this.currentStyle = null;
    this.currentSize = null;
    this.embroideryText = '';
    this.isLeftHand = false;
    
    this.init();
  }

  init() {
    this.createGloveSVG();
    this.setupEventListeners();
  }

  createGloveSVG() {
    const previewContainer = document.getElementById('glovePreview');
    if (!previewContainer) return;

    previewContainer.innerHTML = `
      <div class="glove-preview-container">
        <div class="glove-controls">
          <button class="glove-rotate-btn" id="rotateGlove" title="Rotate Glove">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              <path d="M12 6v6l4 2-1.5 1.5L9 12V6h3z"/>
            </svg>
          </button>
          <button class="glove-zoom-btn" id="zoomGlove" title="Zoom In/Out">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>
            </svg>
          </button>
        </div>
        <div class="glove-svg-container" id="gloveSvgContainer">
          <svg id="gloveSvg" viewBox="0 0 400 500" class="glove-svg">
            <!-- Glove Base -->
            <g id="gloveBase">
              <!-- Main Shell -->
              <path id="shell" d="M200 50 C 150 50, 100 80, 80 130 C 70 180, 80 230, 100 280 C 120 330, 150 360, 200 380 C 250 360, 280 330, 300 280 C 320 230, 330 180, 320 130 C 300 80, 250 50, 200 50 Z" 
                    fill="${this.currentColors.shell}" stroke="#2c2c2c" stroke-width="2"/>
              
              <!-- Pocket Area -->
              <path id="pocket" d="M200 80 C 160 80, 130 110, 120 150 C 115 190, 120 230, 130 270 C 140 310, 160 340, 200 360 C 240 340, 260 310, 270 270 C 280 230, 285 190, 280 150 C 270 110, 240 80, 200 80 Z" 
                    fill="${this.currentColors.pocket}" stroke="#2c2c2c" stroke-width="1"/>
              
              <!-- Web Pattern (H-Web) -->
              <g id="web">
                <path d="M180 120 L 220 120 L 200 160 Z" fill="${this.currentColors.web}" stroke="#2c2c2c" stroke-width="1"/>
                <path d="M180 120 L 200 160 L 180 200 Z" fill="${this.currentColors.web}" stroke="#2c2c2c" stroke-width="1"/>
                <path d="M220 120 L 200 160 L 220 200 Z" fill="${this.currentColors.web}" stroke="#2c2c2c" stroke-width="1"/>
                <path d="M180 200 L 200 160 L 220 200 Z" fill="${this.currentColors.web}" stroke="#2c2c2c" stroke-width="1"/>
              </g>
              
              <!-- Fingers -->
              <g id="fingers">
                <!-- Thumb -->
                <ellipse id="thumb" cx="120" cy="200" rx="25" ry="40" fill="${this.currentColors.shell}" stroke="#2c2c2c" stroke-width="1" transform="rotate(-20 120 200)"/>
                
                <!-- Index Finger -->
                <ellipse id="indexFinger" cx="180" cy="180" rx="15" ry="35" fill="${this.currentColors.shell}" stroke="#2c2c2c" stroke-width="1"/>
                
                <!-- Middle Finger -->
                <ellipse id="middleFinger" cx="200" cy="170" rx="15" ry="40" fill="${this.currentColors.shell}" stroke="#2c2c2c" stroke-width="1"/>
                
                <!-- Ring Finger -->
                <ellipse id="ringFinger" cx="220" cy="180" rx="15" ry="35" fill="${this.currentColors.shell}" stroke="#2c2c2c" stroke-width="1"/>
                
                <!-- Pinkie -->
                <ellipse id="pinkie" cx="240" cy="200" rx="12" ry="30" fill="${this.currentColors.shell}" stroke="#2c2c2c" stroke-width="1"/>
              </g>
              
              <!-- Lacing -->
              <g id="lacing">
                <path d="M160 100 Q 200 90 240 100" fill="none" stroke="${this.currentColors.lace}" stroke-width="3"/>
                <path d="M150 140 Q 200 130 250 140" fill="none" stroke="${this.currentColors.lace}" stroke-width="3"/>
                <path d="M140 180 Q 200 170 260 180" fill="none" stroke="${this.currentColors.lace}" stroke-width="3"/>
                <path d="M130 220 Q 200 210 270 220" fill="none" stroke="${this.currentColors.lace}" stroke-width="3"/>
              </g>
              
              <!-- Welting -->
              <path id="welting" d="M200 50 C 150 50, 100 80, 80 130 C 70 180, 80 230, 100 280 C 120 330, 150 360, 200 380 C 250 360, 280 330, 300 280 C 320 230, 330 180, 320 130 C 300 80, 250 50, 200 50 Z" 
                    fill="none" stroke="${this.currentColors.welting}" stroke-width="4"/>
              
              <!-- Stitching -->
              <g id="stitching">
                <path d="M200 80 C 160 80, 130 110, 120 150 C 115 190, 120 230, 130 270 C 140 310, 160 340, 200 360 C 240 340, 260 310, 270 270 C 280 230, 285 190, 280 150 C 270 110, 240 80, 200 80 Z" 
                      fill="none" stroke="${this.currentColors.stitch}" stroke-width="1" stroke-dasharray="2,2"/>
              </g>
              
              <!-- Binding -->
              <g id="binding">
                <path d="M200 380 C 150 360, 120 330, 100 280 C 80 230, 70 180, 80 130 C 100 80, 150 50, 200 50" 
                      fill="none" stroke="${this.currentColors.binding}" stroke-width="3"/>
                <path d="M200 380 C 250 360, 280 330, 300 280 C 320 230, 330 180, 320 130 C 300 80, 250 50, 200 50" 
                      fill="none" stroke="${this.currentColors.binding}" stroke-width="3"/>
              </g>
              
              <!-- Embroidery Text -->
              <text id="embroideryText" x="200" y="140" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="${this.currentColors.embroidery}" opacity="0">CUSTOM</text>
              
              <!-- Akadema Label -->
              <g id="akademaLabel">
                <rect x="190" y="320" width="20" height="8" rx="2" fill="#ffd700" stroke="#2c2c2c" stroke-width="1"/>
                <text x="200" y="327" text-anchor="middle" font-family="Arial, sans-serif" font-size="6" font-weight="bold" fill="#000">AKADEMA</text>
              </g>
              
              <!-- Flag -->
              <g id="flag" opacity="0">
                <rect x="250" y="100" width="30" height="20" fill="#c62828" stroke="#2c2c2c" stroke-width="1"/>
                <rect x="250" y="100" width="15" height="10" fill="#ffffff"/>
                <rect x="250" y="110" width="15" height="10" fill="#1565c0"/>
                <text x="200" y="125" text-anchor="middle" font-family="Arial, sans-serif" font-size="8" font-weight="bold" fill="#000">USA</text>
              </g>
            </g>
          </svg>
        </div>
        <div class="glove-info">
          <h3 id="gloveStyleName">Select a Web Style</h3>
          <p id="gloveSizeInfo">Size: Not selected</p>
          <p id="gloveHandInfo">Hand: Not selected</p>
        </div>
      </div>
    `;

    this.gloveElement = document.getElementById('gloveSvg');
    this.setupGloveControls();
  }

  setupGloveControls() {
    const rotateBtn = document.getElementById('rotateGlove');
    const zoomBtn = document.getElementById('zoomGlove');
    const svgContainer = document.getElementById('gloveSvgContainer');
    
    let rotation = 0;
    let zoom = 1;

    rotateBtn?.addEventListener('click', () => {
      rotation += 90;
      this.gloveElement.style.transform = `rotate(${rotation}deg) scale(${zoom})`;
    });

    zoomBtn?.addEventListener('click', () => {
      zoom = zoom === 1 ? 1.5 : 1;
      this.gloveElement.style.transform = `rotate(${rotation}deg) scale(${zoom})`;
    });
  }

  setupEventListeners() {
    // Listen for form changes
    document.addEventListener('change', (e) => {
      if (e.target.name === 'leather') {
        this.updateLeather(e.target.value);
      } else if (e.target.name === 'throwHand') {
        this.updateThrowHand(e.target.value);
      } else if (e.target.name === 'webStyle') {
        this.updateWebStyle(e.target.value);
      } else if (e.target.name === 'gloveSize') {
        this.updateSize(e.target.value);
      } else if (e.target.name === 'shellColor') {
        this.updateShellColor(e.target.value);
      } else if (e.target.name === 'pocketColor') {
        this.updatePocketColor(e.target.value);
      } else if (e.target.name === 'webColor') {
        this.updateWebColor(e.target.value);
      } else if (e.target.name === 'laceColor') {
        this.updateLaceColor(e.target.value);
      } else if (e.target.name === 'weltingColor') {
        this.updateWeltingColor(e.target.value);
      } else if (e.target.name === 'stitchColor') {
        this.updateStitchColor(e.target.value);
      } else if (e.target.name === 'bindingColor') {
        this.updateBindingColor(e.target.value);
      } else if (e.target.name === 'embroidery') {
        this.updateEmbroidery(e.target.value);
      } else if (e.target.name === 'embroideryText') {
        this.updateEmbroideryText(e.target.value);
      } else if (e.target.name === 'akademaLabel') {
        this.updateAkademaLabel(e.target.value);
      } else if (e.target.name === 'flag') {
        this.updateFlag(e.target.value);
      }
    });

    // Listen for input changes (for embroidery text)
    document.addEventListener('input', (e) => {
      if (e.target.name === 'embroideryText') {
        this.updateEmbroideryText(e.target.value);
      }
    });
  }

  updateLeather(leatherId) {
    const leather = gloveData.leathers.find(l => l.id === leatherId);
    if (leather) {
      document.getElementById('gloveStyleName').textContent = `${leather.name} Glove`;
    }
  }

  updateThrowHand(handId) {
    this.isLeftHand = handId === 'left';
    const handText = handId === 'left' ? 'Left Hand Throw' : 'Right Hand Throw';
    document.getElementById('gloveHandInfo').textContent = `Hand: ${handText}`;
    
    // Flip glove for left hand
    if (this.gloveElement) {
      this.gloveElement.style.transform = this.isLeftHand ? 'scaleX(-1)' : 'scaleX(1)';
    }
  }

  updateWebStyle(styleId) {
    const style = gloveData.webStyles.find(s => s.id === styleId);
    if (style) {
      document.getElementById('gloveStyleName').textContent = `${style.name} Glove`;
      this.currentStyle = style;
      this.updateWebPattern(styleId);
    }
  }

  updateWebPattern(styleId) {
    const webElement = document.getElementById('web');
    if (!webElement) return;

    // Clear existing web pattern
    webElement.innerHTML = '';

    // Add new web pattern based on style
    switch(styleId) {
      case 'h-web-csd111':
        this.createHWebPattern();
        break;
      case 'bhive-cbo25':
        this.createBhivePattern();
        break;
      case 'pro-h-apv7':
        this.createProHPattern();
        break;
      case 'i-web-apr233':
        this.createIWebPattern();
        break;
      case 'trapeze-ata255':
        this.createTrapezePattern();
        break;
      case 'modified-pro-h-ahj244':
        this.createModifiedProHPattern();
        break;
      case 'basket-atm92':
        this.createBasketPattern();
        break;
      case 'modified-trap-adp233':
        this.createModifiedTrapPattern();
        break;
      case 'two-piece-closed-atc82':
        this.createTwoPiecePattern();
        break;
      case 'pro-i-apr257':
        this.createProIPattern();
        break;
      default:
        this.createHWebPattern();
    }
  }

  createHWebPattern() {
    const webElement = document.getElementById('web');
    webElement.innerHTML = `
      <path d="M180 120 L 220 120 L 200 160 Z" fill="${this.currentColors.web}" stroke="#2c2c2c" stroke-width="1"/>
      <path d="M180 120 L 200 160 L 180 200 Z" fill="${this.currentColors.web}" stroke="#2c2c2c" stroke-width="1"/>
      <path d="M220 120 L 200 160 L 220 200 Z" fill="${this.currentColors.web}" stroke="#2c2c2c" stroke-width="1"/>
      <path d="M180 200 L 200 160 L 220 200 Z" fill="${this.currentColors.web}" stroke="#2c2c2c" stroke-width="1"/>
    `;
  }

  createBhivePattern() {
    const webElement = document.getElementById('web');
    webElement.innerHTML = `
      <circle cx="200" cy="160" r="25" fill="${this.currentColors.web}" stroke="#2c2c2c" stroke-width="1"/>
      <path d="M175 160 L 225 160" stroke="#2c2c2c" stroke-width="1"/>
      <path d="M200 135 L 200 185" stroke="#2c2c2c" stroke-width="1"/>
    `;
  }

  createProHPattern() {
    const webElement = document.getElementById('web');
    webElement.innerHTML = `
      <rect x="180" y="120" width="40" height="80" fill="${this.currentColors.web}" stroke="#2c2c2c" stroke-width="1"/>
      <path d="M200 120 L 200 200" stroke="#2c2c2c" stroke-width="2"/>
    `;
  }

  createIWebPattern() {
    const webElement = document.getElementById('web');
    webElement.innerHTML = `
      <rect x="195" y="120" width="10" height="80" fill="${this.currentColors.web}" stroke="#2c2c2c" stroke-width="1"/>
      <circle cx="200" cy="160" r="15" fill="none" stroke="#2c2c2c" stroke-width="2"/>
    `;
  }

  createTrapezePattern() {
    const webElement = document.getElementById('web');
    webElement.innerHTML = `
      <path d="M180 120 L 220 120 L 200 200 Z" fill="${this.currentColors.web}" stroke="#2c2c2c" stroke-width="1"/>
    `;
  }

  createModifiedProHPattern() {
    const webElement = document.getElementById('web');
    webElement.innerHTML = `
      <rect x="180" y="120" width="40" height="60" fill="${this.currentColors.web}" stroke="#2c2c2c" stroke-width="1"/>
      <path d="M200 120 L 200 180" stroke="#2c2c2c" stroke-width="2"/>
      <path d="M190 140 L 210 140" stroke="#2c2c2c" stroke-width="1"/>
    `;
  }

  createBasketPattern() {
    const webElement = document.getElementById('web');
    webElement.innerHTML = `
      <ellipse cx="200" cy="160" rx="30" ry="40" fill="${this.currentColors.web}" stroke="#2c2c2c" stroke-width="1"/>
      <path d="M170 160 L 230 160" stroke="#2c2c2c" stroke-width="1"/>
    `;
  }

  createModifiedTrapPattern() {
    const webElement = document.getElementById('web');
    webElement.innerHTML = `
      <path d="M180 120 L 220 120 L 210 200 L 190 200 Z" fill="${this.currentColors.web}" stroke="#2c2c2c" stroke-width="1"/>
    `;
  }

  createTwoPiecePattern() {
    const webElement = document.getElementById('web');
    webElement.innerHTML = `
      <rect x="180" y="120" width="20" height="80" fill="${this.currentColors.web}" stroke="#2c2c2c" stroke-width="1"/>
      <rect x="200" y="120" width="20" height="80" fill="${this.currentColors.web}" stroke="#2c2c2c" stroke-width="1"/>
    `;
  }

  createProIPattern() {
    const webElement = document.getElementById('web');
    webElement.innerHTML = `
      <rect x="195" y="120" width="10" height="80" fill="${this.currentColors.web}" stroke="#2c2c2c" stroke-width="1"/>
      <path d="M200 120 L 200 200" stroke="#2c2c2c" stroke-width="2"/>
      <circle cx="200" cy="160" r="20" fill="none" stroke="#2c2c2c" stroke-width="1"/>
    `;
  }

  updateSize(size) {
    document.getElementById('gloveSizeInfo').textContent = `Size: ${size}"`;
  }

  updateShellColor(colorId) {
    const color = this.getColorById(colorId, 'shell');
    if (color) {
      this.currentColors.shell = color.hex;
      const shellElement = document.getElementById('shell');
      const thumbElement = document.getElementById('thumb');
      if (shellElement) shellElement.setAttribute('fill', color.hex);
      if (thumbElement) thumbElement.setAttribute('fill', color.hex);
    }
  }

  updatePocketColor(colorId) {
    const color = this.getColorById(colorId);
    if (color) {
      this.currentColors.pocket = color.hex;
      const pocketElement = document.getElementById('pocket');
      if (pocketElement) pocketElement.setAttribute('fill', color.hex);
    }
  }

  updateWebColor(colorId) {
    const color = this.getColorById(colorId);
    if (color) {
      this.currentColors.web = color.hex;
      this.updateWebPattern(this.currentStyle?.id);
    }
  }

  updateLaceColor(colorId) {
    const color = this.getColorById(colorId);
    if (color) {
      this.currentColors.lace = color.hex;
      const lacingElements = document.querySelectorAll('#lacing path');
      lacingElements.forEach(el => el.setAttribute('stroke', color.hex));
    }
  }

  updateWeltingColor(colorId) {
    const color = this.getColorById(colorId);
    if (color) {
      this.currentColors.welting = color.hex;
      const weltingElement = document.getElementById('welting');
      if (weltingElement) weltingElement.setAttribute('stroke', color.hex);
    }
  }

  updateStitchColor(colorId) {
    const color = this.getColorById(colorId);
    if (color) {
      this.currentColors.stitch = color.hex;
      const stitchElements = document.querySelectorAll('#stitching path');
      stitchElements.forEach(el => el.setAttribute('stroke', color.hex));
    }
  }

  updateBindingColor(colorId) {
    const color = this.getColorById(colorId);
    if (color) {
      this.currentColors.binding = color.hex;
      const bindingElements = document.querySelectorAll('#binding path');
      bindingElements.forEach(el => el.setAttribute('stroke', color.hex));
    }
  }

  updateEmbroidery(value) {
    const textElement = document.getElementById('embroideryText');
    if (textElement) {
      textElement.style.opacity = value === 'yes' ? '1' : '0';
    }
  }

  updateEmbroideryText(text) {
    this.embroideryText = text;
    const textElement = document.getElementById('embroideryText');
    if (textElement) {
      textElement.textContent = text || 'CUSTOM';
    }
  }

  updateAkademaLabel(labelId) {
    const labelElement = document.getElementById('akademaLabel');
    if (!labelElement) return;

    const colors = {
      'yellow-logo': { bg: '#ffd700', text: '#000' },
      'silver-logo': { bg: '#c0c0c0', text: '#000' },
      'black-logo': { bg: '#000', text: '#fff' },
      'black-white-logo': { bg: '#000', text: '#fff' }
    };

    const color = colors[labelId] || colors['yellow-logo'];
    const rect = labelElement.querySelector('rect');
    const text = labelElement.querySelector('text');
    
    if (rect) rect.setAttribute('fill', color.bg);
    if (text) text.setAttribute('fill', color.text);
  }

  updateFlag(flagId) {
    const flagElement = document.getElementById('flag');
    if (!flagElement) return;

    if (flagId === 'none') {
      flagElement.style.opacity = '0';
      return;
    }

    flagElement.style.opacity = '1';
    
    const flagColors = {
      'usa': { rect1: '#c62828', rect2: '#ffffff', rect3: '#1565c0' },
      'texas': { rect1: '#c62828', rect2: '#ffffff', rect3: '#1565c0' },
      'dominican': { rect1: '#c62828', rect2: '#ffffff', rect3: '#1565c0' },
      'canada': { rect1: '#c62828', rect2: '#ffffff', rect3: '#1565c0' },
      'mexico': { rect1: '#c62828', rect2: '#ffffff', rect3: '#1565c0' },
      'puerto-rico': { rect1: '#c62828', rect2: '#ffffff', rect3: '#1565c0' },
      'japan': { rect1: '#ffffff', rect2: '#c62828', rect3: '#ffffff' },
      'korea': { rect1: '#ffffff', rect2: '#c62828', rect3: '#ffffff' }
    };

    const colors = flagColors[flagId] || flagColors['usa'];
    const rects = flagElement.querySelectorAll('rect');
    const text = flagElement.querySelector('text');
    
    if (rects[0]) rects[0].setAttribute('fill', colors.rect1);
    if (rects[1]) rects[1].setAttribute('fill', colors.rect2);
    if (rects[2]) rects[2].setAttribute('fill', colors.rect3);
    if (text) text.textContent = flagId.toUpperCase();
  }

  getColorById(colorId, type = 'standard') {
    if (type === 'shell') {
      const leather = formState.leather;
      if (leather && gloveData.colors.shellRestricted[leather]) {
        return gloveData.colors.shellRestricted[leather].find(c => c.id === colorId);
      }
    }
    return gloveData.colors.standard.find(c => c.id === colorId);
  }
}

// Initialize glove preview when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.glovePreview = new GlovePreview();
});
