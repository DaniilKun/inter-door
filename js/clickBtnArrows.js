const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const containerImgs = document.querySelector('.imgs_prev')


prev.addEventListener('click', () =>{
  containerImgs.style.marginTop = '0px'
  next.style.display = 'block'
  prev.style.display = 'none'
  console.log('nazad');
})
next.addEventListener('click', () =>{
  containerImgs.style.marginTop = '-1210px'
  prev.style.display = 'block'
  next.style.display = 'none'
  console.log('vperred');
})

