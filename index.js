function downloadDb(url) {
    fetch(url).then(res => res.blob()).then(file => {
        let tem = URL.createObjectURL(file);
        let link = document.createElement("a");
        link.href = tem;
        link.download = "abhi.gif";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        link.remove();
    })
}
let content = document.querySelector(".content");
async function populateFrontPage() {
    try {
        
    content.innerHTML = "Fetching Results";
    let data = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=0l0s3oSnXQCn6oOZwYxONyK0qDDpGlhY&q=boys&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);
    let response = await data.json();
    content.innerHTML = " ";
    response.data.forEach(element => {
        let url = element.images.original.url;
        let video = document.createElement('img');
        video.classList.add('db');
        video.src = url;
        content.appendChild(video);
        video.addEventListener("click", function (e) {
            downloadDb(e.srcElement.currentSrc);
        })
    })

} catch (error) {
    alert("Sorry unable to process your request"); 
}
}

populateFrontPage();



async function searchDisplay(query) {
    try {

        content.innerHTML = "Fetching Results";
        let data = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=0l0s3oSnXQCn6oOZwYxONyK0qDDpGlhY&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);
        let response = await data.json();
        content.innerHTML = "  ";
        response.data.forEach(element => {
            let url = element.images.original.url;
            let video = document.createElement('img');
            video.classList.add('db');
            video.src = url;
            content.appendChild(video);
            video.addEventListener("click", function (e) {
                downloadDb(e.srcElement.currentSrc);
            })
        })
    } catch (error) {
        alert("Sorry unable to process your request");
    }

}

btn.addEventListener("click", function () {
    searchDisplay(input.value.trim());
})


let d = new Date();
year.innerHTML = d.getFullYear();