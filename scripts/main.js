

 function currentTime() {
    let date = new Date(); 
    let hrs = date.getHours();
    let min= date.getMinutes();
    let secs= date.getSeconds();

    hrs = hrs < 10 ? "0" + hrs : hrs;
    min = min < 10 ? "0" + min : min;
    secs = secs < 10 ? "0" + secs : secs;
    let hexColor = '#' + hrs + min + secs;
    
    
   let time = hrs + ':'+ min + ':' + secs;

    let display = document.querySelector('.clock-display')
   //  document.querySelector('.clock-display').innerText = time;
    display.textContent = time;
   // let change = document.querySelector('.clock-display').innerText= hexColor
   display.addEventListener('mouseover', () => {
      display.textContent =  hexColor;
  })
  display.addEventListener('mouseout', () => {
   display.textContent =  time;
})

    let pro = (secs/min)*3
    document.querySelector('.clock-progress-bar').style.width = pro + 'rem'
    document.querySelector('.clock').style.backgroundColor= hexColor 
    
 }

currentTime()

 setInterval(currentTime, 1000)

