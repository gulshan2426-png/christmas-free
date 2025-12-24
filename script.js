function createSnowflake() {
    const snow = document.createElement('div');
    snow.innerHTML = "❄";
    snow.style.position = "fixed";
    snow.style.top = "-20px";
    snow.style.left = Math.random() * window.innerWidth + "px";
    snow.style.fontSize = Math.random() * 10 + 10 + "px";
    snow.style.color = "white";
    snow.style.opacity = Math.random();
    snow.style.zIndex = "1000";
    snow.style.transition = "transform 5s linear, opacity 5s linear";
    
    document.body.appendChild(snow);

    setTimeout(() => {
        snow.style.transform = `translateY(${window.innerHeight + 50}px) rotate(360deg)`;
        snow.style.opacity = "0";
    }, 100);

    setTimeout(() => {
        snow.remove();
    }, 5100);
}
setInterval(createSnowflake, 150);