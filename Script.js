 function filterMenu(category) {
      const items = document.querySelectorAll('.menu-item');
      items.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (category === 'all' || itemCategory === category) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    }