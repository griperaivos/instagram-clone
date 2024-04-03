heartSystem();
markSystem();

function heartSystem() {
    for (let i = 0; i < posts.length+1; i++) {
        const heartContainer = document.querySelector(`.heart${i}`);
        console.log(heartContainer)
        heartContainer.addEventListener("click", function(event) {
            event.preventDefault();
            const target = event.target;
            console.log(target);

            if (target.matches(".deslike")) {
                const commentElement = heartContainer.querySelector("img[src='img/comment.png']");
                const sendElement = heartContainer.querySelector("img[src='img/send.png']");
                heartContainer.innerHTML = `<img class="like off" src="img/red.heart.png" alt="">`;
                if (commentElement) {
                    heartContainer.appendChild(commentElement);
                }
                if (sendElement) {
                    heartContainer.appendChild(sendElement);
                }
                updateLikes(i, 1); // Aumenta o número de likes em 1
                console.log("ata")
            } else if (target.matches(".like")) {
                const commentElement = heartContainer.querySelector("img[src='img/comment.png']");
                const sendElement = heartContainer.querySelector("img[src='img/send.png']");
                heartContainer.innerHTML = `<img class="deslike off" src="img/heart.png" alt="">`;
                if (commentElement) {
                    heartContainer.appendChild(commentElement);
                }
                if (sendElement) {
                    heartContainer.appendChild(sendElement);
                }
                updateLikes(i, -1); // Diminui o número de likes em 1
                console.log("okay")
            }
        });

        console.log("passou batido");
    }
}



function markSystem(){
    for (let i = 0; i < posts.length+1; i++) {
        const markContainer = document.querySelector(`.bookmark-${i}`);

        markContainer.addEventListener("click", function(event) {
            const target = event.target;

            if(target.matches(".bookmark")) {
                target.remove();
                markContainer.innerHTML += `<img class="mark off" src="img/mark.png" alt="">`;
            } else if(target.matches(".mark")) {
                target.remove();
                markContainer.innerHTML += `<img class="bookmark off" src="img/bookmark.png" alt="">`;
            }
        })
    }
}

function updateLikes(postIndex, change) {
    // Seleciona o elemento de likes correspondente ao postIndex
    const likesElement = document.querySelector(`.post-${postIndex}`);
    const test = document.querySelector(`.post-${commentParam-1}`);

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
    

    try{
        // Atualiza o número de likes no array 'posts'
        posts[postIndex].likes += change;

        
        // Verifica se o elemento de likes foi encontrado corretamente
        if (likesElement) {
            likesElement.textContent = posts[postIndex].likes + " likes"; // Atualiza o texto exibido com o novo número de likes
        } else {
            console.error("Elemento de likes não encontrado para o post " + postIndex);
            console.log(`.post-${postIndex} .likes`);
        }
    } catch {
        if(test){
            if(test.textContent.length > 10){
                if(change == 1){
                    change = 0.001;
                }
                else if (change == -1){
                    change = -0.001;
                }
            }
        }

        posts[commentParam-1].likes += change;
        
        // Verifica se o elemento de likes foi encontrado corretamente
        if (test) {
            let post = posts[commentParam-1]
            postLikes.innerHTML = `<p class="post-${commentParam-1}">${post["likes"]} Likes</p>`;
        } else {

            console.error("Elemento de likes não encontrado para o post " + postIndex);
            console.log(`.post-${postIndex} .likes`);
        }
    }

}