// Custom Glove Designer - Main Application Logic

// State management
const formState = {
  leather: null,
  throwHand: null,
  webStyle: null,
  size: null,
  shellColor: null,
  pocketColor: null,
  webColor: null,
  laceColor: null,
  weltingColor: null,
  stitchColor: null,
  bindingColor: null,
  twinWeltColor: null,
  thumbPinkyColor: null,
  logoColor: null,
  embroidery: 'no',
  embroideryText: '',
  akademaLabel: null,
  fingerEmbroidery: null,
  flag: 'none',
  agreement: false,
  customerName: '',
  address: '',
  city: '',
  state: '',
  zipCode: '',
  phone: '',
  email: '',
  cardCarrier: '',
  cardNumber: '',
  expirationDate: '',
  cvv: '',
  signature: ''
};

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  initializeForm();
  attachEventListeners();
  updateProgress();
  updatePrice();
});

// Function to update glove preview
function updateGlovePreview() {
  // The glove preview updates automatically via event listeners in glove-preview.js
  // This function exists for compatibility with other parts of the code
}

// Initialize form with dynamic options
function initializeForm() {
  populateLeatherOptions();
  populateThrowHandOptions();
  populateWebStyleOptions();
  populateColorOptions();
  populateLabelOptions();
  populateFingerEmbroideryOptions();
  populateFlagOptions();
}

// Populate leather selection cards
function populateLeatherOptions() {
  const container = document.getElementById('leatherOptions');
  container.innerHTML = gloveData.leathers.map(leather => `
    <label class="card">
      <input type="radio" name="leather" value="${leather.id}" required>
      <div class="card__content">
        <h3 class="card__title">${leather.name}</h3>
        <div class="card__price">$${leather.price}</div>
        <p class="card__description">${leather.description}</p>
      </div>
    </label>
  `).join('');

  // Add event listeners
  container.querySelectorAll('input[type="radio"]').forEach(input => {
    input.addEventListener('change', handleLeatherChange);
  });
}

// Populate throw hand options
function populateThrowHandOptions() {
  const container = document.getElementById('throwHandOptions');
  container.innerHTML = gloveData.throwHands.map(hand => `
    <label class="radio-option">
      <input type="radio" name="throwHand" value="${hand.id}" required>
      <div>
        <div class="radio-label">${hand.name}</div>
        <div class="radio-description">${hand.description}</div>
      </div>
    </label>
  `).join('');

  // Add event listeners
  container.querySelectorAll('input[type="radio"]').forEach(input => {
    input.addEventListener('change', (e) => {
      formState.throwHand = e.target.value;
      updateProgress();
      // Update UI
      container.querySelectorAll('.radio-option').forEach(opt => opt.classList.remove('selected'));
      e.target.closest('.radio-option').classList.add('selected');
    });
  });
}

// Populate web style dropdown
function populateWebStyleOptions() {
  const select = document.getElementById('webStyle');
  select.innerHTML = '<option value="">Choose a style...</option>' + 
    gloveData.webStyles.map(style => 
      `<option value="${style.id}">${style.name} (${style.backType} Back)</option>`
    ).join('');
  
  select.addEventListener('change', handleWebStyleChange);
}

// Populate color options for various selects
function populateColorOptions() {
  const colorSelects = [
    'pocketColor', 'webColor', 'laceColor', 
    'weltingColor', 'stitchColor', 'bindingColor',
    'twinWeltColor', 'thumbPinkyColor', 'logoColor'
  ];

  colorSelects.forEach(selectId => {
    const select = document.getElementById(selectId);
    if (select) {
      select.innerHTML = '<option value="">Choose a color...</option>' + 
        gloveData.colors.standard.map(color => 
          `<option value="${color.id}" data-hex="${color.hex}">${color.name}</option>`
        ).join('');
      
      // Add change listener
      select.addEventListener('change', (e) => {
        const field = selectId.replace('Color', '');
        formState[selectId] = e.target.value;
        updateProgress();
        updateGlovePreview();
      });
    }
  });
}

// Populate Akadema label options
function populateLabelOptions() {
  const container = document.getElementById('labelOptions');
  container.innerHTML = gloveData.labels.map((label, index) => `
    <label class="radio-option">
      <input type="radio" name="akademaLabel" value="${label.id}" ${index === 0 ? 'checked' : ''} required>
      <div class="radio-label">${label.name}</div>
    </label>
  `).join('');

  // Set default
  formState.akademaLabel = gloveData.labels[0].id;

  // Add event listeners
  container.querySelectorAll('input[type="radio"]').forEach(input => {
    input.addEventListener('change', (e) => {
      formState.akademaLabel = e.target.value;
      updateProgress();
      container.querySelectorAll('.radio-option').forEach(opt => opt.classList.remove('selected'));
      e.target.closest('.radio-option').classList.add('selected');
    });
  });

  // Select first option visually
  container.querySelector('.radio-option').classList.add('selected');
}

// Populate finger embroidery options
function populateFingerEmbroideryOptions() {
  const container = document.getElementById('fingerEmbroideryOptions');
  container.innerHTML = gloveData.fingerEmbroidery.map((option, index) => `
    <label class="radio-option">
      <input type="radio" name="fingerEmbroidery" value="${option.id}" ${index === 0 ? 'checked' : ''} required>
      <div class="radio-label">${option.name}</div>
    </label>
  `).join('');

  // Set default
  formState.fingerEmbroidery = gloveData.fingerEmbroidery[0].id;

  // Add event listeners
  container.querySelectorAll('input[type="radio"]').forEach(input => {
    input.addEventListener('change', (e) => {
      formState.fingerEmbroidery = e.target.value;
      updateProgress();
      container.querySelectorAll('.radio-option').forEach(opt => opt.classList.remove('selected'));
      e.target.closest('.radio-option').classList.add('selected');
    });
  });

  // Select first option visually
  container.querySelector('.radio-option').classList.add('selected');
}

// Populate flag options
function populateFlagOptions() {
  const container = document.getElementById('flagOptions');
  container.innerHTML = gloveData.flags.map((flag, index) => `
    <label class="radio-option">
      <input type="radio" name="flag" value="${flag.id}" ${index === 0 ? 'checked' : ''} required>
      <div class="radio-label">${flag.name}</div>
    </label>
  `).join('');

  // Set default
  formState.flag = gloveData.flags[0].id;

  // Add event listeners
  container.querySelectorAll('input[type="radio"]').forEach(input => {
    input.addEventListener('change', (e) => {
      formState.flag = e.target.value;
      updateProgress();
      container.querySelectorAll('.radio-option').forEach(opt => opt.classList.remove('selected'));
      e.target.closest('.radio-option').classList.add('selected');
    });
  });

  // Select first option visually
  container.querySelector('.radio-option').classList.add('selected');
}

// Handle leather selection change
function handleLeatherChange(e) {
  formState.leather = e.target.value;
  updateProgress();
  updatePrice();
  
  // Update shell color options based on leather
  const shellColorSelect = document.getElementById('shellColor');
  shellColorSelect.disabled = false;
  
  const availableColors = gloveData.colors.shellRestricted[formState.leather];
  shellColorSelect.innerHTML = '<option value="">Choose a color...</option>' + 
    availableColors.map(color => 
      `<option value="${color.id}" data-hex="${color.hex}">${color.name}</option>`
    ).join('');

  // Update note
  const note = document.getElementById('shellColorNote');
  note.textContent = `Available colors for ${gloveData.leathers.find(l => l.id === formState.leather).name} leather`;
  
  // Reset shell color selection
  formState.shellColor = null;
  
  shellColorSelect.addEventListener('change', (e) => {
    formState.shellColor = e.target.value;
    updateProgress();
  });
}

// Handle web style change
function handleWebStyleChange(e) {
  const styleId = e.target.value;
  formState.webStyle = styleId;
  
  if (!styleId) return;
  
  const selectedStyle = gloveData.webStyles.find(s => s.id === styleId);
  
  // Update back type info
  document.getElementById('backTypeInfo').textContent = 
    `This style features an ${selectedStyle.backType} back`;
  
  // Update size options
  const sizeSelect = document.getElementById('gloveSize');
  sizeSelect.disabled = false;
  sizeSelect.innerHTML = '<option value="">Choose a size...</option>' + 
    selectedStyle.sizes.map(size => 
      `<option value="${size}">${size}"</option>`
    ).join('');
  
  // Reset size selection
  formState.size = null;
  
  sizeSelect.addEventListener('change', (e) => {
    formState.size = e.target.value;
    updateProgress();
  });
  
  updateProgress();
}

// Attach event listeners
function attachEventListeners() {
  // Embroidery toggle
  const embroideryRadios = document.querySelectorAll('input[name="embroidery"]');
  embroideryRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      formState.embroidery = e.target.value;
      const textGroup = document.getElementById('embroideryTextGroup');
      const textInput = document.getElementById('embroideryText');
      
      if (e.target.value === 'yes') {
        textGroup.style.display = 'block';
        textInput.required = true;
      } else {
        textGroup.style.display = 'none';
        textInput.required = false;
        textInput.value = '';
        formState.embroideryText = '';
      }
      updateProgress();
    });
  });

  // Embroidery text character count
  const embroideryText = document.getElementById('embroideryText');
  embroideryText.addEventListener('input', (e) => {
    formState.embroideryText = e.target.value;
    document.getElementById('charCount').textContent = e.target.value.length;
    updateProgress();
  });

  // Agreement checkbox
  const agreement = document.getElementById('agreement');
  agreement.addEventListener('change', (e) => {
    formState.agreement = e.target.checked;
    updateProgress();
  });

  // Customer information fields
  const customerFields = [
    'customerName', 'address', 'city', 'state', 'zipCode',
    'phone', 'email', 'cardCarrier', 'cardNumber', 'expirationDate', 'cvv', 'signature'
  ];
  
  customerFields.forEach(field => {
    const input = document.getElementById(field);
    input.addEventListener('input', (e) => {
      formState[field] = e.target.value;
      updateProgress();
    });
  });

  // Add price update listeners to all form changes
  document.addEventListener('change', updatePrice);
  document.addEventListener('input', updatePrice);

  // Form submission
  const form = document.getElementById('gloveForm');
  form.addEventListener('submit', handleFormSubmit);

  // Modal controls
  document.getElementById('closeModal').addEventListener('click', closeModal);
  document.getElementById('editOrder').addEventListener('click', closeModal);
  document.getElementById('confirmOrder').addEventListener('click', confirmOrder);
  document.getElementById('closeSuccess').addEventListener('click', () => {
    document.getElementById('successModal').classList.remove('active');
    // Optionally reset form
    // form.reset();
    // resetFormState();
  });
}

// Update progress bar
function updateProgress() {
  const totalSteps = 13;
  let completedSteps = 0;

  // Step 1: Leather
  if (formState.leather) completedSteps++;
  
  // Step 2: Throw hand
  if (formState.throwHand) completedSteps++;
  
  // Step 3: Web style
  if (formState.webStyle) completedSteps++;
  
  // Step 4: Size
  if (formState.size) completedSteps++;
  
  // Step 5a: Shell color
  if (formState.shellColor) completedSteps++;
  
  // Step 5b: Pocket color
  if (formState.pocketColor) completedSteps++;
  
  // Step 5c: Web color
  if (formState.webColor) completedSteps++;
  
  // Step 6: Lace color
  if (formState.laceColor) completedSteps++;
  
  // Step 7: Welting color
  if (formState.weltingColor) completedSteps++;
  
  // Step 8: Stitch color
  if (formState.stitchColor) completedSteps++;
  
  // Step 9: Binding color
  if (formState.bindingColor) completedSteps++;
  
  // Step 10: Embroidery
  if (formState.embroidery === 'no' || (formState.embroidery === 'yes' && formState.embroideryText)) {
    completedSteps++;
  }
  
  // Step 11: Label & Finger embroidery (always has defaults)
  if (formState.akademaLabel && formState.fingerEmbroidery) completedSteps++;
  
  // Step 12: Flag (always has default)
  if (formState.flag) completedSteps++;

  // Calculate current step (next step to complete)
  const currentStep = Math.min(completedSteps + 1, totalSteps);

  const progressPercentage = (completedSteps / totalSteps) * 100;
  document.getElementById('progressBar').style.width = `${progressPercentage}%`;
  document.getElementById('progressText').textContent = `Step ${currentStep} of ${totalSteps}`;
}

// Handle form submission
function handleFormSubmit(e) {
  e.preventDefault();
  
  // Validate form
  if (!e.target.checkValidity()) {
    e.target.reportValidity();
    return;
  }

  // Show summary modal
  displaySummary();
  document.getElementById('summaryModal').classList.add('active');
}

// Display order summary
function displaySummary() {
  const summaryContent = document.getElementById('summaryContent');
  
  const getColorName = (colorId, type = 'standard') => {
    if (type === 'shell') {
      const colors = gloveData.colors.shellRestricted[formState.leather];
      const color = colors.find(c => c.id === colorId);
      return color ? { name: color.name, hex: color.hex } : { name: 'N/A', hex: '#000' };
    }
    const color = gloveData.colors.standard.find(c => c.id === colorId);
    return color ? { name: color.name, hex: color.hex } : { name: 'N/A', hex: '#000' };
  };

  const createColorSwatch = (hex) => `<span class="color-swatch" style="background-color: ${hex};"></span>`;

  const leatherName = gloveData.leathers.find(l => l.id === formState.leather)?.name || 'N/A';
  const throwHandName = gloveData.throwHands.find(h => h.id === formState.throwHand)?.name || 'N/A';
  const webStyleName = gloveData.webStyles.find(s => s.id === formState.webStyle)?.name || 'N/A';
  const labelName = gloveData.labels.find(l => l.id === formState.akademaLabel)?.name || 'N/A';
  const fingerEmbroideryName = gloveData.fingerEmbroidery.find(f => f.id === formState.fingerEmbroidery)?.name || 'N/A';
  const flagName = gloveData.flags.find(f => f.id === formState.flag)?.name || 'N/A';

  const shellColor = getColorName(formState.shellColor, 'shell');
  const pocketColor = getColorName(formState.pocketColor);
  const webColor = getColorName(formState.webColor);
  const laceColor = getColorName(formState.laceColor);
  const weltingColor = getColorName(formState.weltingColor);
  const stitchColor = getColorName(formState.stitchColor);
  const bindingColor = getColorName(formState.bindingColor);

  summaryContent.innerHTML = `
    <div class="summary-grid">
      <h3 style="margin-bottom: 1rem; color: var(--color-primary);">Glove Specifications</h3>
      
      <div class="summary-item">
        <span class="summary-label">Leather Type:</span>
        <span class="summary-value">${leatherName}</span>
      </div>
      
      <div class="summary-item">
        <span class="summary-label">Throwing Hand:</span>
        <span class="summary-value">${throwHandName}</span>
      </div>
      
      <div class="summary-item">
        <span class="summary-label">Web/Shell Style:</span>
        <span class="summary-value">${webStyleName}</span>
      </div>
      
      <div class="summary-item">
        <span class="summary-label">Size:</span>
        <span class="summary-value">${formState.size}"</span>
      </div>

      <h3 style="margin: 1.5rem 0 1rem; color: var(--color-primary);">Colors</h3>
      
      <div class="summary-item">
        <span class="summary-label">Shell & Upper Thumb:</span>
        <span class="summary-value">${shellColor.name} ${createColorSwatch(shellColor.hex)}</span>
      </div>
      
      <div class="summary-item">
        <span class="summary-label">Pocket:</span>
        <span class="summary-value">${pocketColor.name} ${createColorSwatch(pocketColor.hex)}</span>
      </div>
      
      <div class="summary-item">
        <span class="summary-label">Web:</span>
        <span class="summary-value">${webColor.name} ${createColorSwatch(webColor.hex)}</span>
      </div>
      
      <div class="summary-item">
        <span class="summary-label">Lace:</span>
        <span class="summary-value">${laceColor.name} ${createColorSwatch(laceColor.hex)}</span>
      </div>
      
      <div class="summary-item">
        <span class="summary-label">Welting:</span>
        <span class="summary-value">${weltingColor.name} ${createColorSwatch(weltingColor.hex)}</span>
      </div>
      
      <div class="summary-item">
        <span class="summary-label">Stitch:</span>
        <span class="summary-value">${stitchColor.name} ${createColorSwatch(stitchColor.hex)}</span>
      </div>
      
      <div class="summary-item">
        <span class="summary-label">Binding/Lower Thumb/Pinkie:</span>
        <span class="summary-value">${bindingColor.name} ${createColorSwatch(bindingColor.hex)}</span>
      </div>

      <h3 style="margin: 1.5rem 0 1rem; color: var(--color-primary);">Customization</h3>
      
      <div class="summary-item">
        <span class="summary-label">Embroidery:</span>
        <span class="summary-value">${formState.embroidery === 'yes' ? `Yes - "${formState.embroideryText}"` : 'No'}</span>
      </div>
      
      <div class="summary-item">
        <span class="summary-label">Akadema Label:</span>
        <span class="summary-value">${labelName}</span>
      </div>
      
      <div class="summary-item">
        <span class="summary-label">Finger Embroidery:</span>
        <span class="summary-value">${fingerEmbroideryName}</span>
      </div>
      
      <div class="summary-item">
        <span class="summary-label">Flag:</span>
        <span class="summary-value">${flagName}</span>
      </div>

      <h3 style="margin: 1.5rem 0 1rem; color: var(--color-primary);">Customer Information</h3>
      
      <div class="summary-item">
        <span class="summary-label">Name:</span>
        <span class="summary-value">${formState.customerName}</span>
      </div>
      
      <div class="summary-item">
        <span class="summary-label">Address:</span>
        <span class="summary-value">${formState.address}, ${formState.city}, ${formState.state} ${formState.zipCode}</span>
      </div>
      
      <div class="summary-item">
        <span class="summary-label">Contact:</span>
        <span class="summary-value">${formState.email} | ${formState.phone}</span>
      </div>
      
      <div class="summary-item">
        <span class="summary-label">Payment:</span>
        <span class="summary-value">${formState.cardCarrier.toUpperCase()} ending in ${formState.cardNumber.slice(-4)}</span>
      </div>
    </div>
  `;
}

// Close modal
function closeModal() {
  document.getElementById('summaryModal').classList.remove('active');
}

// Confirm order
function confirmOrder() {
  // Add loading state
  const confirmBtn = document.getElementById('confirmOrder');
  confirmBtn.classList.add('loading');
  confirmBtn.disabled = true;

  // Simulate submission (replace with actual API call)
  setTimeout(() => {
    // Close summary modal
    closeModal();
    
    // Show success modal
    document.getElementById('successModal').classList.add('active');
    
    // Reset button state
    confirmBtn.classList.remove('loading');
    confirmBtn.disabled = false;

    // In a real application, you would send the data to a server here
    console.log('Order submitted:', formState);
    
    // For Netlify Forms integration, you could do:
    // submitToNetlify(formState);
  }, 1500);
}

// Optional: Netlify Forms submission function
function submitToNetlify(data) {
  const formData = new FormData();
  
  // Flatten the data object for Netlify Forms
  Object.keys(data).forEach(key => {
    formData.append(key, data[key]);
  });

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData).toString()
  })
  .then(() => {
    console.log('Form successfully submitted to Netlify');
  })
  .catch((error) => {
    console.error('Error submitting form:', error);
  });
}

// Update price display
function updatePrice() {
  let totalPrice = 0;
  
  // Add leather price
  if (formState.leather) {
    const leather = gloveData.leathers.find(l => l.id === formState.leather);
    if (leather) {
      totalPrice += leather.price;
    }
  }
  
  // Add any additional pricing logic here
  // (e.g., premium colors, custom embroidery, etc.)
  
  document.getElementById('totalPrice').textContent = `$${totalPrice}`;
}

// Reset form state (optional)
function resetFormState() {
  Object.keys(formState).forEach(key => {
    if (typeof formState[key] === 'boolean') {
      formState[key] = false;
    } else {
      formState[key] = null;
    }
  });
  formState.embroidery = 'no';
  formState.flag = 'none';
  updateProgress();
  updatePrice();
}

