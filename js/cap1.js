let video = document.querySelector("#miVideo");
let btn = document.querySelector("#reproducir");
let e = 1;

function reproducir(){
    btn.style.display = "none";

    video.play();
    
    let intervalo = setInterval(function(){
        console.log('txt')
        if(video.currentTime >= 4 && e == 1){
            video.pause()
            clearInterval(intervalo)
            e = 2
        }else if(video.currentTime >= 10 && e == 2){
            video.pause()
            clearInterval(intervalo)
            e = 3
        }else if(video.currentTime >= 16 && e == 3){
            video.pause()
            clearInterval(intervalo)
            e = 4
        }else if(video.currentTime >= 24 && e == 4){
            video.pause()
            clearInterval(intervalo)
            e = 5
        }else if(video.currentTime >= 31 && e == 5){
            video.pause()
            clearInterval(intervalo)
            e = 6
        }else if(video.currentTime >= 34 && e == 6){
            video.pause()
            clearInterval(intervalo)
            e = 7
        }
    },1000)
}

function mostrarBoton() {
    btn.style.display = "block";
}
video.addEventListener("ended", mostrarBoton)

video.addEventListener("pause", mostrarBoton)

btn.addEventListener("click", reproducir)