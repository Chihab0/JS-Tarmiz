usersFilling = ()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
        res.data.forEach((ele) => {
            document.getElementById("users").innerHTML+=
                `<button class="user" onclick="clicked(this); postsLoading(${ele.id})"><span>${ele.name}</span><br>${ele.email}</button>`
        });
    })
    .catch(()=>{
        document.getElementById("container").innerHTML=`<h1 style="display: flex; justify-content: center;">Users can't be loaded the server is BROKEN!</h1>`
    })
}
clicked= (self) => {
    const users = document.getElementsByClassName("user");

    for (let user of users){
        user.classList.remove("clicked");
    }
    self.classList.add('clicked');
}
postsLoading= (id)=>{
    axios.get("https://jsonplaceholder.typicode.com/posts?userId="+id)
    .then(res=>{
        document.getElementById("container").innerHTML="";
        res.data.forEach((ele)=>{
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
    .catch(()=>{
        document.getElementById("container").innerHTML=`<h1 style="display: flex; justify-content: center;">Posts can't be loaded the server is BROKEN</h1>`
    })
}
usersFilling();