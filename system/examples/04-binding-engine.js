// ═══════════════════════════════════════════
  // 2. TEMPLATE ENGINE (Do not edit)
  // ═══════════════════════════════════════════
  
  // 1. Pour simple text into the skeleton
  document.querySelectorAll('[data-content]').forEach(el => {
    const key = el.getAttribute('data-content');
    if (projectContent[key]) {
      el.innerHTML = projectContent[key]; // Using innerHTML allows for <br> tags
    }
  });

  // 2. Build repeatable components (like the Gut Check cards)
  const moodContainer = document.getElementById('mood-grid-container');
  if (moodContainer && projectContent.moodOptions) {
    projectContent.moodOptions.forEach(opt => {
      // Create the HTML structure for each card dynamically
      const cardHTML = `
        <button class="mood-card" type="button" data-id="${opt.id}">
          <span class="mood-emoji">${opt.emoji}</span>
          <span class="mood-label">${opt.label}</span>
        </button>
      `;
      moodContainer.innerHTML += cardHTML;
    });
  }
</script>