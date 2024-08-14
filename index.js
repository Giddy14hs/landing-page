document.addEventListener("DOMContentLoaded", () => {
  // Add event listeners for buttons if needed
  const btnConsult = document.querySelector('.btn-consult');
  btnConsult.addEventListener('click', () => {
      alert('Request a Consult clicked!');
  });

  const btnBuyNow = document.querySelector('.btn-buy-now');
  btnBuyNow.addEventListener('click', () => {
      alert('Buy Now clicked!');
  });

  const btnReadMore = document.querySelector('.btn-read-more');
  btnReadMore.addEventListener('click', () => {
      alert('Read More clicked!');
  });
});
