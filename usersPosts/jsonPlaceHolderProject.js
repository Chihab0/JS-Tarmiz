usersFilling= ()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((json)=>{
        json.forEach((ele) => {
            document.getElementById("users").innerHTML+=
                `<button class="user" onclick="clicked(this); postsLoading(${ele.id})"><span>${ele.name}</span><br>${ele.email}</button>`
        });
    });
}
clicked= (self) => {
    const users = document.getElementsByClassName("user");

    for (let user of users){
        user.classList.remove("clicked");
    }
    self.classList.add('clicked');
}
postsLoading = (id)=>{
    fetch("https://jsonplaceholder.typicode.com/posts?userId="+id)
    .then((res)=>res.json())
    .then((json)=>{
        document.getElementById("container").innerHTML="";
        json.forEach(ele =>{
            document.getElementById("container").innerHTML+=
                `
                <div class="posts">
                    <h1 class="title">${ele.title}</h1>
                    <hr>
                    <p class="discription">${ele.body}</p>
                </div>
                `
        })
    })
}
usersFilling();