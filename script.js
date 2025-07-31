let addBtn = document.getElementById("add-btn")
let popUp = document.getElementById("popup")
let closeBtn = document.getElementById("close")
let mainPage = document.getElementById("container")

// For popup
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
        name: "icerdayl",
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
        name: "icer",
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

const mainPageLocalStorage = JSON.parse(localStorage.getItem("postContents"))

submitBtn.addEventListener("click", function(){
    if(nameUrl && imgUrl && address && profileIcon){
        let addPost={
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
    }
    else{
        alert("please fill up all the blanks")
        false
    }
})

if (mainPageLocalStorage){
    postContents = mainPageLocalStorage
    renderPost()
}

if(mainPageLocalStorage){
    mainPage = mainPageLocalStorage
    renderPost(mainPageLocalStorage)
}

function renderPost(){   
    mainPage.innerHTML=""
    localStorage.setItem("mainPage", JSON.stringify(mainPage))
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
                    <input type="text" placeholder="Enter your comments">
                </div>
            </div>
        </div>
        `
    } 
}
renderPost()


// function deleteBtn(){
//     postContents.(postContents)
//     renderPost()
// }


