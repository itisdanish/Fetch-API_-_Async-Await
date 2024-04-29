// const xhr = new XMLHttpRequest();

// xhr.open('GET','https://randomuser.me/api')

//     // ReadyState hase 5 Possible values
//     // - 0: request not initialized
//     // - 1: server connection established
//     // - 2: request received
//     // - 3: processing request
//     // - 4: request finished and response is ready

// xhr.onreadystatechange = function(){
//     if (this.readyState === 4 && this.status === 200){
//         const data = JSON.parse(this.responseText)
//         const user = data.results[0]

//        
//             console.log(user)
//             const li = document.createElement('li')
//             li.innerHTML=`<hr> <strong>${user.name.first} ${user.name.last}</strong> - <small>${user.email}</small>`
//             li.setAttribute('class','m-4')
//             document.querySelector('.container').appendChild(li)
//       
//     }
// };

// xhr.send();



// Fetching a JSON file
fetch('https://randomuser.me/api')
.then(response =>response.json())
.then((data)=>{
    const user = data.results[0]
    console.log(user)
    const li = document.createElement('li')
    li.innerHTML=`<hr> <strong>${user.name.first} ${user.name.last}</strong> - <small>${user.email}</small>`
    li.setAttribute('class','m-4')
    document.querySelector('.container').appendChild(li)
});

// // Fetching a text file