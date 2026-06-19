/* ==========================================================================
   ZEXA CONSTRUCTIONS - INTERACTIVE HOMEBUYER LOGIC
   Vanilla JavaScript for High-Performance State Management & Transitions
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // ------------------------------------------------------------------------
  // 1. BHK TAB ENGINE DATA & STATE MANAGEMENT
  // ------------------------------------------------------------------------
  const bhkData = {
    '2bhk': {
      image: 'assets/blueprint_2bhk.png',
      alt: '2 BHK Elite Apartment architectural floor plan blueprint',
      badge: 'AFFORDABLE LUXURY',
      price: '₹42.5 Lakhs*',
      builtup: '1,120 Sq. Ft.',
      carpet: '845 Sq. Ft.',
      beds: '2 BHK (2 Toilets)',
      balconies: '2 Wide-out Vent Balconies',
      vaastu: 'East Facing Entry (100% Vaastu)',
      shield: 'Seismic Zone III Compliant',
      whatsappUrl: "https://wa.me/919542036932?text=Hi!%20Zexa%20Dharmayya%20Residency%20lo%202%20BHK%20Elite%20Apartment%20layout%20gurinchi%20enquiry.%20Brochure%20%26%20pricing%20details%20share%20cheyagalara%3F"
    },
    '3bhk': {
      image: 'assets/blueprint_3bhk.png',
      alt: '3 BHK Duplex Villa architectural floor plan blueprint',
      badge: 'EXCLUSIVE LIVING',
      price: '₹68.0 Lakhs*',
      builtup: '1,850 Sq. Ft.',
      carpet: '1,380 Sq. Ft.',
      beds: '3 BHK (3 Toilets + Utility)',
      balconies: '3 Premium Deck Balconies',
      vaastu: 'North-East Facing Entry (100% Vaastu)',
      shield: 'Seismic Zone III Compliant + Shear Wall Structure',
      whatsappUrl: "https://wa.me/919542036932?text=Hi!%20Zexa%20Dharmayya%20Residency%20lo%203%20BHK%20Duplex%20Villa%20layout%20gurinchi%20enquiry.%20Brochure%20%26%20pricing%20details%20share%20cheyagalara%3F"
    }
  };

  const tabButtons = document.querySelectorAll('#bhk-tabs .tab-btn');
  const blueprintImg = document.getElementById('blueprint-image');
  
  // Element references for detail updates
  const bhkBadge = document.getElementById('bhk-badge');
  const bhkPrice = document.getElementById('bhk-price');
  const featBuiltup = document.getElementById('feat-builtup');
  const featCarpet = document.getElementById('feat-carpet');
  const featBeds = document.getElementById('feat-beds');
  const featBalcony = document.getElementById('feat-balcony');
  const featVaastu = document.getElementById('feat-vaastu');
  const featShield = document.getElementById('feat-shield');
  const bhkWhatsappBtn = document.getElementById('bhk-whatsapp-btn');

  // Core Switch Handler
  const switchBHKLayout = (bhkKey) => {
    const data = bhkData[bhkKey];
    if (!data) return;

    // Apply smooth visual fade-out
    blueprintImg.style.opacity = '0';
    
    setTimeout(() => {
      // Update floor plan images & specs
      blueprintImg.src = data.image;
      blueprintImg.alt = data.alt;
      
      // Update DOM values
      bhkBadge.textContent = data.badge;
      bhkPrice.textContent = data.price;
      featBuiltup.textContent = data.builtup;
      featCarpet.textContent = data.carpet;
      featBeds.textContent = data.beds;
      featBalcony.textContent = data.balconies;
      featVaastu.textContent = data.vaastu;
      featShield.textContent = data.shield;
      
      // Dynamic WhatsApp lead generation map
      bhkWhatsappBtn.href = data.whatsappUrl;

      // Bring opacity back up
      blueprintImg.style.opacity = '1';
    }, 200);
  };

  // Attach tab triggers
  tabButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Deactivate other tabs
      tabButtons.forEach(b => b.classList.remove('active'));
      
      // Activate clicked tab
      btn.classList.add('active');
      
      // Trigger update
      const bhkKey = btn.getAttribute('data-bhk');
      switchBHKLayout(bhkKey);
    });
  });

  // ------------------------------------------------------------------------
  // 2. PERFORMANCE-SAFE NATIVE SCROLL-REVEALS (Intersection Observer)
  // ------------------------------------------------------------------------
  const revealOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Element enters viewport - inject structural visual animation classes
        entry.target.classList.add('reveal-active');
        // Unobserve to optimize scroll runtime loops
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);

  // Targets to animate
  const animateTargets = [
    ...document.querySelectorAll('.material-card'),
    ...document.querySelectorAll('.progress-card-item'),
    document.getElementById('bhk-details'),
    document.querySelector('.bhk-visual-panel'),
    document.querySelector('.hero-content'),
    document.querySelector('.hero-visual-frame')
  ];

  // Configure target elements with animation state triggers
  animateTargets.forEach(target => {
    if (target) {
      target.classList.add('reveal-prep');
      revealObserver.observe(target);
    }
  });

  // ------------------------------------------------------------------------
  // 3. WATERPROOF/WEATHER RESILIENT DYNAMIC WIDGETS
  // ------------------------------------------------------------------------
  const whatsappWidget = document.getElementById('whatsapp-widget');
  
  // Show dynamic tooltip on a delayed cycle to grab user attention nicely
  setTimeout(() => {
    const tooltip = whatsappWidget.querySelector('.whatsapp-tooltip');
    if (tooltip) {
      tooltip.style.opacity = '1';
      tooltip.style.transform = 'translateX(0)';
      
      // Auto-hide tooltip after 6 seconds to prevent screen cluttering
      setTimeout(() => {
        tooltip.style.opacity = '';
        tooltip.style.transform = '';
      }, 6000);
    }
  }, 3500);

  // Add scroll-to-top header blur behavior
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.backgroundColor = 'rgba(250, 249, 246, 0.95)';
      header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.05)';
    } else {
      header.style.backgroundColor = 'rgba(250, 249, 246, 0.8)';
      header.style.boxShadow = 'none';
    }
  });

});
