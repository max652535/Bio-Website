
document.addEventListener("click", musicPlay);
function musicPlay() {
    var song = document.getElementById("song");
    song.volume = 0.2;
    song.play();

    document.removeEventListener("click", musicPlay);
}
