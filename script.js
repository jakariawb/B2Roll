document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('[data-purpose="faq-accordion-group"] .faq-item');

  items.forEach(item => {
    const toggle = item.querySelector('.faq-toggle');
    const content = item.querySelector('.faq-content');
    const icon = item.querySelector('.faq-icon');

    toggle.addEventListener('click', () => {
      const isHidden = content.classList.contains('hidden');

      // Collapse all in group
      items.forEach(otherItem => {
        otherItem.querySelector('.faq-content').classList.add('hidden');
        otherItem.querySelector('.faq-icon').textContent = '+';
      });

      // If was hidden, expand it
      if (isHidden) {
        content.classList.remove('hidden');
        icon.textContent = '−';
      }
    });
  });
});
