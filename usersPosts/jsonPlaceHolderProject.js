usersFilling= ()=>{
    let request = new XMLHttpRequest();
    request.open("GET","https://jsonplaceholder.typicode.com/users");
    request.send();
    request.onload = ()=>{
        JSON.parse(request.response).forEach((ele) => {
            document.getElementById("users").innerHTML+=
                `<button class="user" onclick="clicked(this); postsLoading(${ele.id})"><span>${ele.name}</span><br>${ele.email}</button>`
        });
    }
}
clicked= (self) => {
    const users = document.getElementsByClassName("user");

    for (let user of users){
        user.classList.remove("clicked");
    }
    self.classList.add('clicked');
}
postsLoading = (id)=>{
    let req = new XMLHttpRequest();
    req.open("GET","https://jsonplaceholder.typicode.com/posts?userId="+id);
    req.send();
    req.onload = ()=>{
        document.getElementById("container").innerHTML="";
        JSON.parse(req.response).forEach(ele =>{
            document.getElementById("container").innerHTML+=
                `
                <div class="posts">
                    <h1 class="title">${ele.title}</h1>
                    <hr>
                    <p class="discription">${ele.body}</p>
                </div>
                `
        })
    }
}
usersFilling();