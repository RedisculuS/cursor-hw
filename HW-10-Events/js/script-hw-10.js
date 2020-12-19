function makeSound(e) {
    const code = e.keyCode ? e.keyCode : this.getAttribute("data-key"); 
    const activeKey = document.querySelector('.key[data-key="' + code + '"]');
    const activeAudio = document.querySelector('audio[data-key="' + code + '"]');
    if (!activeAudio) return;
    activeAudio.currentTime = 0;
    activeAudio.play();
    activeKey.classList.add('active');
}
    
document.addEventListener('keydown', makeSound);

const allKeys = document.querySelectorAll(".key");

allKeys.forEach(function (key) {
    key.addEventListener('click', makeSound);  
    key.addEventListener('transitionend', function (e) {
        if(e.propertyName !== 'transform') return;
            this.classList.remove("active");
    });
});