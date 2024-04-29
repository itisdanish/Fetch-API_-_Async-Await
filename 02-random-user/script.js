const gen = document.querySelector('.generator')
const name = document.querySelector('.name')
const body = document.querySelector('body')
const carBody = document.querySelector('.card-body')
const img = document.querySelector('.card-img-top')

gen.addEventListener('click', fetchUser)

function fetchUser(){
    fetch('https://randomuser.me/api')
        .then((res)=>res.json())
        .then((data)=>{
            displayUser(data.results[0])
        })
}

function displayUser(user){
    console.log('user')
    if (user.gender === 'female'){
        body.setAttribute('class','bg-warning')
    } else{
        body.setAttribute('class','bg-dark')
    }

    img.setAttribute('src',`${user.picture.large}`)
    carBody.innerHTML=`
    <h5 class="card-title name">${user.name.first} ${user.name.last}</h5>
            <p class="card-text">
            <hr>
            <strong>Address : </strong> ${user.location.city}, ${user.location.country}, ${user.location.postcode},${user.location.state}, ${user.location.street.number}</p>
            <hr>
            <strong>Contact : </strong> ${user.phone}`
}


// fetchUser()