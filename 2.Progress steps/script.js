const progress = document.getElementById('progress')
const btn = document.querySelectorAll('.btn')
const circles = document.querySelectorAll('.circle')
const prev = btn[0]
const next = btn[1]
let count = 1

next.addEventListener('click', () => {
  count++
  if (count > circles.length) {
    count = circles.length
  }
  update()
})

prev.addEventListener('click', () => {
  count--
  if (count < 1) {
    count = 1
  }
  update()
})

function update() {
  circles.forEach((circle, index) => {
    if (index < count) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })
  const activeCircles = document.querySelectorAll('.active')
  progress.style.width =
    ((activeCircles.length - 1) / (circles.length - 1)) * 100 + '%'

  if (count === 1) {
    prev.disabled = true
  } else if (count === circles.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}

// next.addEventListener('click',()=>{
//     if(count<=circles.length){
//         circles[count].classList.add('active');
//         prev.disabled=false;
//     }
//     if(count==circles.length-1){
//         next.disabled=true;
//     }
//     incrementProgressbar();
//     count++;
// })

// prev.addEventListener('click',()=>{
//     if(count>1){
//         circles[count-1].classList.remove('active');
//         next.disabled=false;
//     }
//     if(count==2){
//         prev.disabled=true;
//     }
//     incrementProgressbar();
//     count--;
// })

// function incrementProgressbar(){
//     progress.style.width=(((count)/(circles.length-1))*100+'%')
// }
