const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const containerImgs = document.querySelector('.imgs_prev')

let currentOffset = 0;

prev.addEventListener('click', () => {
  currentOffset += 1150;
  containerImgs.style.marginTop = `${currentOffset}px`;
  next.style.display = 'block';
  prev.style.display = currentOffset === 0 ? 'none' : 'block';
  console.log('nazad');
});

next.addEventListener('click', () => {
  currentOffset -= 1150;
  containerImgs.style.marginTop = `${currentOffset}px`;
  prev.style.display = 'block';
  next.style.display = currentOffset === -1150 ? 'none' : 'block';

  // next.style.display = 'none';
  console.log('vperred');
});

