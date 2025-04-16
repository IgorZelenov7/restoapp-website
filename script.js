document.addEventListener('DOMContentLoaded', () => {
  const promoBlock = document.querySelector('.promo');
  const closeButton = document.querySelector('.promo__button');
  
  if (promoBlock && closeButton) {
    closeButton.addEventListener('click', () => {
      promoBlock.classList.add('promo--hidden');
    });
  }
});