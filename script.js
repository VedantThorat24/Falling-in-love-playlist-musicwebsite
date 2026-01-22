const songListArr = [
    {
        title: "Choo lo",
        desc: "The Local Train",
        url: "./music/chooLo.mp3",
        image: "./images/img1.jpg",
        time: "03:54"
    },
    {
        title: "ik kudi",
        desc: "Arpit bala",
        url: "./music/IkKudi.mp3",
        image: "./images/img2.jpg",
        time: "03:50"
    },
    {
        title: "Mystery of Love",
        desc: "Sufjan Stevens",
        url: "./music/mystery.mp3",
        image: "./images/img3.jpg",
        time: "04:90"
    },
    {
        title: "Hrudayat Vaje Something",
        desc: "Vidhit Patankar",
        url: "./music/Something.mp3",
        image: "./images/img4.jpg",
        time: "04:55"
    },

]
var audio = new Audio();
var clutter = ""
var container = document.querySelector(".container")
songListArr.forEach(function (songListArr, idx) {
    clutter += `<div id="${idx}" class="songList">
                <h3>${idx + 1}</h3>
                <div class="image">
                    <div class="cover">
                        <img src="${songListArr.image}" alt="">
                    </div>
                    <div class="button">
                        <div class="pause">
                        <i class="ri-album-fill"></i>
                        </div>
                    </div>
                </div>
                <div class="left">
                    <div class="songText">
                        <h2>${songListArr.title}</h2>
                        <h4>${songListArr.desc}</h4>
                    </div>
                    <h3>${songListArr.time}</h3>
                </div>
            </div>`
})
container.innerHTML = clutter
const allImages = document.querySelectorAll(".image");
var songList = document.querySelector(".songList")
container.addEventListener("click", function (details) {
    var songCard = details.target.closest(".songList")

    allImages.forEach(img => {
        img.style.opacity = "0";
        img.style.zIndex = "0";

    });

    const currentImage = songCard.querySelector(".image");
    currentImage.style.opacity = "1";
    currentImage.style.zIndex = "4";

    selectedSong = songCard.id
    audio.src = songListArr[selectedSong].url
    audio.play()

})
document.querySelectorAll(".image").forEach(image => {
    image.addEventListener("click", function (e) {
        e.stopPropagation();
    });
});

var pause = document.querySelectorAll(".button .pause")
pause.forEach(function (btn) {
    btn.addEventListener("click", function() {
        if (audio.paused){
            audio.play();
            btn.innerHTML = ` <i class="ri-album-fill"></i>`

        }else{
            btn.innerHTML = `<i class="ri-pause-circle-fill"></i>`
            audio.pause();

        }
    })
})


// logic for back btn 
// var back = document.querySelectorAll(".button .back")
// back.forEach(function (btn1) {
//     btn1.addEventListener("click", function() {
//         if (selectedSong>0){
//             selectedSong--
//             audio.src = songListArr[selectedSong].url;
//             audio.play();
//         }
//     })
// })

var vibe = document.querySelector(".vibe")

vibe.addEventListener("click", function () {
    if (document.body.getAttribute("theme") === "red") {
        document.body.setAttribute("theme", "blue");
        vibe.innerHTML = `<i class="ri-sun-fill"></i>`;
    } else {
        document.body.setAttribute("theme", "red");
        vibe.innerHTML = `<i class="ri-moon-fill"></i>`;
    }
});
