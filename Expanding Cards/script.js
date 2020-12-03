const panels=document.querySelectorAll('.panel')

panels.forEach((panel)=>{
    panel.addEventListener('click',()=>{
        removeActiveClasses();
        panel.classList.add('active');
        console.log(123)
    })
})


function removeActiveClasses(){
    panels.forEach((panel)=>{
        panel.classList.remove('active');
    })
}