let addBtn = document.getElementById("add-btn")
let popUp = document.getElementById("popup")
let closeBtn = document.getElementById("close")
let mainPage = document.getElementById("container")


closeBtn.addEventListener("click", function(){
    popUp.style.display = "none"
})

addBtn.addEventListener("click", function() {
    popUp.style.display = "block"
})

let postContents = [
    {
        name: "ahiezer",
        place: "Alabama",
        icon: "Screenshot (1).png",
        img:"https://plus.unsplash.com/premium_photo-1676422290431-f0d07a64eec5?q=80&w=482&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        likes: "https://cdn-icons-png.flaticon.com/128/1077/1077035.png",
        comm: "https://cdn-icons-png.flaticon.com/128/1947/1947247.png",
        send:"https://cdn-icons-png.flaticon.com/128/3024/3024593.png",
        comments:{
            name: "Lebron James",
            comment: "Ugh"
        }
    },
    {
        name: "ahiezer",
        place: "Alabama",
        icon: "Screenshot (1).png",
        img:"https://plus.unsplash.com/premium_photo-1676422290431-f0d07a64eec5?q=80&w=482&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        likes: "https://cdn-icons-png.flaticon.com/128/1077/1077035.png",
        comm: "https://cdn-icons-png.flaticon.com/128/1947/1947247.png",
        send:"https://cdn-icons-png.flaticon.com/128/3024/3024593.png",
        comments:{
            name: "Lebron James",
            comment: "Ugh"
        }
    },

    {
        name: "ahiezer",
        place: "Alabama",
        icon: "Screenshot (1).png",
        img:"https://plus.unsplash.com/premium_photo-1676422290431-f0d07a64eec5?q=80&w=482&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        likes: "https://cdn-icons-png.flaticon.com/128/1077/1077035.png",
        comm: "https://cdn-icons-png.flaticon.com/128/1947/1947247.png",
        send:"https://cdn-icons-png.flaticon.com/128/3024/3024593.png",
        comments:{
            name: "Lebron James",
            comment: "Ugh"
        }
    },
]

for (let i = 0; i < postContents.length; i++){
    mainPage.innerHTML += `
    <div id="post-head">
        <div>
            <img src="${postContents[i].icon}" id="profile">
        </div>
        <div>
            <p>${postContents[i].name}</p>
            <p>${postContents[i].place}</p>
        </div>
    </div>
    <div id="post-img">
        <img src="${postContents[i].img}" id="pics">
    </div>
    <div id="post-foot">
        <div id="foot-icon">
            <img src=" ${postContents[i].likes}">
            <img src=" ${postContents[i].comm}">
            <img src=" ${postContents[i].send}">
        </div>
        <div id="comment"
            <p><b>${postContents[i].comments.name}</b>${postContents[i].comments.comment}</p>
            <p></p>
        </div>
    </div>
    `
}