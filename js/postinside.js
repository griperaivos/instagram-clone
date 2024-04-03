const postAuthor = document.querySelector(".post-author");
const commentHtml = document.querySelector(".post-comments");
const urlParams = new URLSearchParams(window.location.search);
const commentParam = urlParams.get("post");
const postLikes = document.querySelector(".post-likes");
const postDate = document.querySelector(".post-date");
const postContent = document.querySelector(".content-post");
const interactions = document.querySelector(".interactions");

let commentsArray = [ [
    {
        img: "img/profiles/casaldenerd.jpg",
        name: "casaldenerd",
        text: "Gênios 🧞‍♂️ #supertype #games #mobile",
        date: "3d"
    },
    {
        img: "img/profiles/goldenboy.jpg",
        name: "goldenboym7_",
        text: "Vocês fizeram minha infância sabia , caspitola , sonho e vários outros ❤️",
        date: "3d"
    }],

    [    {
        img: "img/profiles/receitascuriosas.jpg",
        name: "receitacuriosa",
        text: "Coloque QUIABO no CONDICIONADOR e NUNCA mais gaste com PROGRESSIVA !!",
        date: "2w"
    },
    {
        img: "img/profiles/kitpeng.png",
        name: "rr.decoracoes_",
        text: "Eu fui tentar fazer a receita, mas cozinhei os quiabos e comi, antes de fazer a receita 😢😢",
        date: "2w"
    }]
]

postInside();
load_comments();
load_interactions();
load_content();

function load_comments(){
    let commentsHtml = '';

    if(commentParam-1 >= 0){
        let comments = commentsArray[commentParam-1];

        let author = comments[0];
        let authorImg = author["img"];
        let authorName = author["name"]

        postAuthor.innerHTML += `                     
            <img src="${authorImg}" alt="">
            <p>${authorName}</p>
            <img class="more" src="/img/more.png" alt="">`;
        
        for (let i = 0; i < comments.length; i++){
            let comment = comments[i];

            let img = comment["img"];
            let username = comment["name"];
            let text = comment["text"];
            let date = comment["date"]

            commentsHtml += `
                <div class="post-comment">
                    <img src="${img}" alt="">
                    <p><span>${username}</span> ${text}</p>
                    <div class="inf">
                        <p>${date}</p>
                        <p>See Translation</p>
                    </div>
                </div>`;
        }

        commentHtml.innerHTML = commentsHtml;
    }

}

function postInside() {
    const post = document.querySelector(".post-inside");
    const home = document.querySelector("#home");
    const body = document.querySelector("body");

    if(commentParam){
        window.scrollTo(0, 0);
        post.classList.remove("hide");
        home.classList.add("defocus");
        body.classList.add("overflow-hidden");

        document.addEventListener("click", function(e) {
            const target = e.target;

            // Verifica se o clique foi fora do post e do botão de like/deslike
            if (!post.contains(target) && !target.classList.contains("off")) {
                window.location.assign("index.html");
            }
        });
    }
}

function load_interactions(){
    for (let i = 0; i < posts.length; i++){
        let post = posts[i];

        let id = post["id"];
        let likes = post["likes"];
        let date = post["date"];

        if(id == commentParam)
        {
            postLikes.innerHTML += `<p class="post-${id}">${likes} Likes</p>`;
            postDate.innerHTML += `<p>${date} ago</p>`;
            interactions.innerHTML += `            <div class="right bookmark-${id}">
            <img class="bookmark off" src="img/bookmark.png" alt="">
        </div>`
        }
    }
}

function load_content(){
    for (let i = 0; i < posts.length; i++){
        let post = posts[i];

        let id = post["id"];
        let content = post["content"];

        if(id == commentParam)
        {
            postContent.innerHTML += `${content}`;
        }
    }
}
