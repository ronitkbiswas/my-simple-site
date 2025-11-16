const btn = document.getElementById('btn');
const title = document.getElementById('title');

btn.addEventListener('click', () => {
  title.textContent = 'ololo — nice!';
  alert('Good job — you just ran JS on a page.');
});
