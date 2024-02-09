window.onload = function(){
    if (screen.orientation && screen.orientation.lock) {
        screen.orientation.lock('portrait');
    }
}