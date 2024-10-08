const suggests = document.querySelector(".suggests-list");
const postHtml = document.querySelector("#post");
const home = document.querySelector("#home");
const heart = document.querySelector("#heart");

let profiles_suggests = [
    {
        name:"meru_alter",
        img:"/img/profiles/meru_alter.jpg",
    },
    { 
        name: "thedantewill",
        img: "/img/profiles/dante.jpg",
    },
    {
        name: "lboobies",
        img: "/img/profiles/lboobies.jpg",
    }
];

let posts = [
    {
        id: 1,
        name: "casaldenerd",
        img: "img/profiles/casaldenerd.jpg",
        date: "1w",
        content: `<video autoplay controls muted loop>
                    <source src="img/posts/casaldenerd1.mp4" type="video/mp4">
                  </video>`,
        likes: 163,
        title: "Like pra parte 2 👍 #experimentando #doces",
        comments: 8,
    },
    {
        id: 2,
        name: "receitascuriosas",
        img: "img/profiles/receitascuriosas.jpg",
        date: "1w",
        content: `<video autoplay controls muted loop>
                    <source src="img/posts/receitascuriosas.mp4" type="video/mp4">
                  </video>`,
        likes: 329.406,
        title: 'Coloque QUIABO no CONDICIONADOR e NUNCA mais gaste com PROGRESSIVA !!',
        comments: 3.200,
    }
];

load_post();
suggests_profiles();
heartSystem();
markSystem();

function suggests_profiles (){
    for (let i = 0; i < profiles_suggests.length; i++){
        let profile = profiles_suggests[i];

        let img = profile['img'];
        let username = profile['name'];

        suggests.innerHTML += `<div class="profil">
        <img src="${img}" alt="">
        <div>
            <h3>${username}</h3>
            <p>popular</p>
        </div>
        <a href="#">Follow</a>
    </div>`;
    }
}

function load_post() {
    let postsHTML = ''; // Variável para armazenar o HTML dos posts

    for (let i = 0; i < posts.length; i++){
        let post = posts[i];

        let username = post["name"];
        let img = post["img"];
        let date = post["date"];
        let content = post["content"];
        let likes = post["likes"];
        let title = post["title"];
        let comments = post["comments"];
        let id = post["id"];

        postsHTML += `<div class="post">
        <div class="post-profile">
            <div class="post-profile-info">
                <img src="${img}" alt="">

                <div class="post-info-text">
                    <div>
                        <h3>${username}</h3>
                        <span>•</span>
                        <span>${date}</span>
                    </div>
                    <p>Original audio</p>

                    <div class="post-more">
                        <img src="/img/more.png" alt="">
                    </div>
                </div>

            </div>
        </div>

        <div class="post-content">
            ${content}
        </div>

        <div class="interactions">
            <div class="left heart${i}">
                <img class="deslike" src="img/heart.png" alt="">
            </div>
            <div class="left comment">
                <a href="?post=${id}"><img src="img/comment.png" alt=""></a>
            </div>
            <div class="left">
                <img src="img/send.png" alt="">
            </div>
            <div class="right bookmark-${i}">
                <img class="bookmark" src="img/bookmark.png" alt="">
            </div>
            
        </div>

        <p class="likes post-${i}">${likes} likes</p>
        <div class="title-post">
            <h3>${username}</h3>
            <p>${title}</p>
        </div>

        <div class="translation">
            <p>See translation</p>
        </div>

        <div class="comments">
            <p>View all ${comments} comments</p>
            <p>Add a comment...</p>
        </div>
    </div>`;
    }

    postHtml.innerHTML = postsHTML; // Define o HTML dos posts corretamente
}

function search() {
    const search_button = document.querySelector(".search-button");
    const search = document.querySelector("#search");
    const title = document.querySelector(".nav-text");
    const logo = document.querySelector(".logo");

    search_button.addEventListener("click", function(event) {
        title.classList.add("hide");
        search.classList.remove("hide");
        logo.classList.add("show");
        search_button.classList.add("selected");

        // Impede que o clique no botão de busca propague para o documento
        event.stopPropagation();
    });

    document.addEventListener("click", function(e) {
        let click = search.contains(e.target);

        if (!click) {
            search.classList.add("hide");
            title.classList.remove("hide");
            logo.classList.remove("show");
            search_button.classList.remove("selected");
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    search();
})