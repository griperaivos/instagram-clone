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
            <div class="left" id="heart${i}">
                <img id="deslike" src="img/heart.png" alt="">
            </div>
            <div class="left">
                <img src="img/comment.png" alt="">
            </div>
            <div class="left">
                <img src="img/send.png" alt="">
            </div>
            <div class="right bookmark-${i}">
                <img id="bookmark" src="img/bookmark.png" alt="">
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

function heartSystem() {
    for (let i = 0; i < posts.length; i++) {
        const heartContainer = document.querySelector(`#heart${i}`);
        heartContainer.addEventListener("click", function(event) {
            const target = event.target;

            if (target.matches("#deslike")) {
                target.remove();
                heartContainer.innerHTML += `<img id="like" src="img/red.heart.png" alt="">`;
                updateLikes(i, 1); // Aumenta o número de likes em 1
            } else if (target.matches("#like")) {
                target.remove();
                heartContainer.innerHTML += `<img id="deslike" src="img/heart.png" alt="">`;
                updateLikes(i, -1); // Diminui o número de likes em 1
            }
        });
    }
}

function markSystem(){
    for (let i = 0; i < posts.length; i++) {
        const markContainer = document.querySelector(`.bookmark-${i}`);
        markContainer.addEventListener("click", function(event) {
            const target = event.target;

            if(target.matches("#bookmark")) {
                target.remove();
                markContainer.innerHTML += `<img id="mark" src="img/mark.png" alt="">`;
            } else if(target.matches("#mark")) {
                target.remove();
                markContainer.innerHTML += `<img id="bookmark" src="img/bookmark.png" alt="">`;
            }
        })
    }
}

function updateLikes(postIndex, change) {
    // Seleciona o elemento de likes correspondente ao postIndex
    const likesElement = document.querySelector(`.post-${postIndex}`);

    if(likesElement ){
        if(likesElement.textContent.length > 10){
            if(change == 1){
                change = 0.001;
            }
            else if (change == -1){
                change = -0.001;
            }
        }
    }

    // Atualiza o número de likes no array 'posts'
    posts[postIndex].likes += change;

    // Verifica se o elemento de likes foi encontrado corretamente
    if (likesElement) {
        likesElement.textContent = posts[postIndex].likes + " likes"; // Atualiza o texto exibido com o novo número de likes
    } else {
        console.error("Elemento de likes não encontrado para o post " + postIndex);
        console.log(`.post-${postIndex} .likes`);
    }
}


