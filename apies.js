// async function api(){
//     try{
//         let data=  await axios('https://dummyjson.com/recipes')
//         console.log(data);

//     } catch{     

//         console.log('errrr');
//     }
// }
// api()
// let obj={
//     id:1,
//     name:"rahul",
//     age:30
// }
// localStorage.setItem('user',JSON.stringify(obj))

// let data= localStorage.getItem('user')
// console.log(data);
 let form=document.querySelector('form')
form.addEventListener('submit',()=>{

    let name= document.querySelector('#name').value
    let email= document.querySelector('#email').value
    let password= document.querySelector('#pass').value
    let data={
        name:name,
        email:email,
        pass:password
    }
    localStorage.setItem('user',JSON.stringify(data))


})

let loginForm= document.querySelector('#login')
loginForm.addEventListener('click',(e)=>{
    e.preventDefault()
    let data= JSON.parse(localStorage.getItem('user'))
    console.log(data,"hehe");

    



})