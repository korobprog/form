import './css/style.css';
import './js/app';

const btn = document.getElementById('btn');
const popover = document.getElementById('popover');

btn.addEventListener('click', () => {
  popover.classList.toggle('hidden');
});
