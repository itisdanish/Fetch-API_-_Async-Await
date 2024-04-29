function createPost({title, body}){
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body: JSON.stringify({
            title,
            body
        }),
        headers:{
            'Content-Type':'application/json',
            token:'abcd123'
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
}

createPost({title:'My Post', body:'This is Body'})