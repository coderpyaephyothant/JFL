const songs = ["song1","song2","song3","song4","song5"];
const mainDiv = document.getElementById("mainDiv");
const  emojiRain = document.getElementById("emoji-rain");
const stopTag = document.getElementById("stop");
const emojiActiveTag = document.querySelector(".emojiActive");
let sp = false;
    function maincontroller () {
        /* for emoji rain */
    function fallEmoji () {
        let emojiContainerTag = document.createElement("div");
        emojiContainerTag.append("❤️");
        emojiContainerTag.classList.add("emojiActive");
        document.body.appendChild(emojiContainerTag);
        emojiContainerTag.style.left = Math.random()*100+"vw";
        emojiContainerTag.style.animationDuration= Math.random() * 9 + "s";
        setTimeout(() => {
            emojiContainerTag.remove();
        }, 5000);

        if (sp === false) {
            emojiContainerTag.remove();
        }else
        sp= true;
    
    }

    
    /* for songs loop */
    songs.forEach((param)=>{
    
        const button = document.createElement("button");
        mainDiv.append(button);
        button.classList.add("butn");
        button.append(param);
        mainDiv.append(button);


        button.addEventListener("click", ()=>{
            sp=true;
            stop();
            document.getElementById(param).play();

            setInterval(() => {
                fallEmoji();
            },500);
        });
    });


    stopTag.addEventListener("click",()=>{
        sp=false;
        console.log(sp)
        stop();
    });


    function stop() {

        songs.forEach((para)=>{
            document.getElementById(para).pause()
        });

        songs.forEach((pr)=>{
            document.getElementById(pr).currentTime = 0
        });

    };
    }
    
maincontroller();