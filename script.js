const previousAudioButton = document.getElementById('previous');
const playPauseButton = document.getElementById('play-pause');
const nextAudioButton = document.getElementById('next');
const chapterAudio = document.getElementById('chapter-audio');
const chapterQuant = 10;
const chapterName = document.getElementById('chapter');
let isPlaying = 0;
let actualChapter = 1;

/*==================== Play e Pause do áudio ====================*/
function playAudio(){
    chapterAudio.play();
    playPauseButton.classList.remove("bi-play-circle-fill");
    playPauseButton.classList.add("bi-pause-circle-fill");
    isPlaying = 1;
    return isPlaying;
}

function pauseAudio(){
    chapterAudio.pause();
    playPauseButton.classList.remove("bi-pause-circle-fill");
    playPauseButton.classList.add("bi-play-circle-fill");
    isPlaying = 0;
    return isPlaying;
}

function playPause(){
    if(isPlaying === 0){
        playAudio()
    } else {
        pauseAudio()
    }
}
playPauseButton.addEventListener('click', playPause);
/*==============================================================*/
/*================== Previous e Next do áudio ==================*/
function previousAudio(){
    if(actualChapter === 1){
        actualChapter = chapterQuant;
    } else {
        actualChapter = actualChapter - 1;
    }
    chapterAudio.src = "books/dom-casmurro/" + actualChapter + ".mp3";
    playAudio();
    nameAudio();
}
previousAudioButton.addEventListener('click', previousAudio);

function nextAudio(){
    if(actualChapter === chapterQuant){
        actualChapter = 1;
    } else {
        actualChapter = actualChapter + 1;
    }
    chapterAudio.src = "books/dom-casmurro/" + actualChapter + ".mp3";
    playAudio();
    nameAudio();
}
nextAudioButton.addEventListener('click', nextAudio);
/*==============================================================*/
function nameAudio(){
    chapterName.innerText = 'Capítulo ' + actualChapter;
}