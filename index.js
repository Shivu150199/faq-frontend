const question=document.querySelectorAll('.btn')

question.forEach((item)=>{
    item.addEventListener('click',(e)=>{

    //  console.log('hello')   
     const element = e.currentTarget.parentElement.nextSibling.nextSibling
     
     element.classList.toggle('hide')

let img1=e.currentTarget.children[0]
let img2=e.currentTarget.children[1]
img1.classList.toggle('hide')
img2.classList.toggle('hide')

    })
})








