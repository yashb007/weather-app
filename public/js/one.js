console.log("Client side js file loaded")

fetch('http://127.0.0.1:3000/weather?address=delhi').then((response) => {
   response.json().then((data) => {
     if(data.error)   
    console.log(error)

    else{
        console.log(data.location)
            console.log(data.forecast)
    }
   })
})


const weatherForm =  document.querySelector('form')
const search = document.querySelector('input')
const msgone = document.querySelector('.one')
const msgtwo = document.querySelector('.two')
weatherForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const location = search.value
        console.log(location)
       console.log('Form Submitted')
       fetch('http://127.0.0.1:3000/weather?address=' + location).then((response) => {
   response.json().then((data) => {
     if(data.error)   {
    console.log(data.error)
       msgone.textContent = data.error;
     }
       else{
        console.log(data.location)
        msgone.textContent= data.location;
        console.log(data.forecast)
        msgtwo.textContent = data.forecast;
    }
   })
})
})