import './css/style.css';
import './js/app';

const tooltip = document.querySelector('.tooltip');

tooltip.addEventListener('click', function () {
  if (this.classList.contains('active')) {
    this.classList.remove('active');
  } else {
    this.classList.add('active');
  }

});

