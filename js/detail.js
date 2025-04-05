document.addEventListener('DOMContentLoaded', function () {
    const heart = document.querySelector('.heart');
    heart.addEventListener('click', () => {
      heart.classList.toggle('liked');
    });
  
    const readMoreLink = document.querySelector('.read-more');
    const shortText = document.querySelector('.short-text');
    const moreText = document.querySelector('.more-text');
  
    readMoreLink.addEventListener('click', function (e) {
      e.preventDefault();
      if (moreText.style.display === 'none') {
        moreText.style.display = 'inline';
        readMoreLink.textContent = 'Read less';
      } else {
        moreText.style.display = 'none';
        readMoreLink.textContent = 'Read more...';
      }
    });
  });
  