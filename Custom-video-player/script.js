const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const timestamp = document.getElementById('timestamp');
const progress = document.getElementById('progress');

//Play & Pause Video
function toggleVideoStatus(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
    //return true;
}

//update play/pause icon
function updatePlayIcon(){
   if(video.paused){
     play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
   }else{
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
   }
    //return true;
}

//update progress and timestamp
function updateProgress(){
    progress.value = (video.currentTime/video.duration)*100;
    //Get Minutes
    let mins = Math.floor(video.currentTime/60);
    if(mins < 10){
      mins = '0' + String(mins);
    }
    //Get seconds
    let seconds = Math.floor(video.currentTime % 60);
    if(seconds < 10){
        seconds = '0' + String(seconds);
    }

    timestamp.innerHTML = `${mins}:${seconds}`;
    //console.log(video.duration);
    //return true;
}

//Set Video Time to Progress
function setVideoProgress(){
    video.currentTime = (+progress.value*video.duration)/100;
    //return true;
}

//Stop Video
function stopVideo(){
    video.currentTime =0 ;
    video.pause();
    //return true;
}
//Event listener
video.addEventListener('click',toggleVideoStatus);
video.addEventListener('pause',updatePlayIcon);
video.addEventListener('play',updatePlayIcon);
video.addEventListener('timeupdate',updateProgress);

play.addEventListener('click',toggleVideoStatus);
stop.addEventListener('click',stopVideo);
progress.addEventListener('change',setVideoProgress);