let addBtn = document.getElementById("add-btn")
let popUp = document.getElementById("popup")
let closeBtn = document.getElementById("close")
let mainPage = document.getElementById("container")
let popupBg = document.getElementById("popup-bg")
let nameUrl = document.getElementById("username-url")
let imgUrl = document.getElementById("img-url")
let address = document.getElementById("address")
let submitBtn = document.getElementById("submit")
let profileIcon = document.getElementById("profile-url")

closeBtn.addEventListener("click", function(){
    popUp.style.display = "none"
    popupBg.style.display = "none"
})

addBtn.addEventListener("click", function() {
    popUp.style.display = "block"
    popupBg.style.display = "block"
})

popupBg.addEventListener("click", function() {
    popUp.style.display = "none"
    popupBg.style.display = "none"
})

let postContents = [
    {
        id: "1",
        name: "icerdayl",
        place: "Biringan",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8PwVDYeWI90zcxf5a8P7wwFHfGd384tRWjQ&s",
        img:"https://plus.unsplash.com/premium_photo-1676422290431-f0d07a64eec5?q=80&w=482&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        likes: "https://cdn-icons-png.flaticon.com/128/1077/1077035.png",
        comm: "https://cdn-icons-png.flaticon.com/128/1947/1947247.png",
        send:"https://cdn-icons-png.flaticon.com/128/3024/3024593.png",
        comments:{
            name: "Gusion Montefalco",
            comment: "Lesgoooo"
        }
    },
    {
        id: "2",
        name: "ahiezer",
        place: "Alabama",
        icon: "https://thehowler.org/wp-content/uploads/2018/01/roll-safe-meme-1.jpg",
        img:"https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTkzeWloc3J6eGNvaTl2cmVoOWEzenZka2dhMTYydTBxandvc3VkbyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o7aTnQqygA3TcukFi/200.webp",
        likes: "https://cdn-icons-png.flaticon.com/128/1077/1077035.png",
        comm: "https://cdn-icons-png.flaticon.com/128/1947/1947247.png",
        send:"https://cdn-icons-png.flaticon.com/128/3024/3024593.png",
        comments:{
            name: "H2WO",
            comment: "i miss you tho"
        }
    },

    {
        id: "3",
        name: "icer",
        place: "Bambang",
        icon: "https://miro.medium.com/v2/resize:fit:1400/1*GI-td9gs8D5OKZd19mAOqA.png",
        img:"https://media3.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3M2ZyeGdsODV2dzY0ZHFqaXJ1ZzRjYmVuOHJzZnlhMnVwY2F1anEyOSZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/h3WH1rqyW2bmfOVqSi/giphy.webp",
        likes: "https://cdn-icons-png.flaticon.com/128/1077/1077035.png",
        comm: "https://cdn-icons-png.flaticon.com/128/1947/1947247.png",
        send:"https://cdn-icons-png.flaticon.com/128/3024/3024593.png",
        comments:{
            name: "Lebron James",
            comment: "Fireeee"
        }
    },
]

const mainPageLocalStorage = JSON.parse(localStorage.getItem("postContents"))
if (mainPageLocalStorage){
    postContents = mainPageLocalStorage 
}

submitBtn.addEventListener("click", function(){
    let addPost={
        id: postContents.length + 1,
        name: nameUrl.value,
        place: address.value,
        icon: profileIcon.value,
        img:imgUrl.value,
        likes: "https://cdn-icons-png.flaticon.com/128/1077/1077035.png",
        comm: "https://cdn-icons-png.flaticon.com/128/1947/1947247.png",
        send:"https://cdn-icons-png.flaticon.com/128/3024/3024593.png",
        comments:{
            name: "Lebron James",
            comment: "Ugh"
        }
    }    
    mainPage.textContent+=postContents.unshift(addPost)
    renderPost()
    nameUrl.value = ""
    imgUrl.value = ""
    address.value = ""
    profileIcon.value=""
    localStorage.setItem("Posts", postContents)
})

function renderPost(){   
    mainPage.innerHTML=""
    for (let i = 0; i < postContents.length; i++){
        mainPage.innerHTML += `
        <div id="post-head">
            <div>
                <img src="${postContents[i].icon}" class="profile">
            </div>
            <div>
                <div>
                    <p id="p1"><b>${postContents[i].name}</b></p>
                    <p id="p2">${postContents[i].place}</p>
                </div>
            </div>
            <div>
                <button onclick="deleteBtn(${postContents[i].id})" id="delete-btn">Delete Post</button>
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
            <div id="comment">
                <p><b>${postContents[i].comments.name}</b> ${postContents[i].comments.comment}</p>
                <div>
                    <input type="text" id="comm-input" placeholder="Enter your comments">
                    
                </div>
            </div>
        </div>
        `

        } 

        localStorage.setItem("postContents", JSON.stringify(postContents))
}
renderPost()

function deleteBtn(id){
    const filteredArray = postContents.filter((post)=> post.id != id)
    postContents = filteredArray
    renderPost()
}

function reset(){
    localStorage.clear()
    window.location.reload()
}
