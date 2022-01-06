

 function currentTime() {
    let date = new Date(); 
    let hrs = date.getHours();
    let min= date.getMinutes();
    let secs= date.getSeconds();

    hrs = hrs < 10 ? "0" + hrs : hrs;
    min = min < 10 ? "0" + min : min;
    secs = secs < 10 ? "0" + secs : secs;

    let hexColor = '#' + hrs + min + secs.toString(16);
   
    
   let time = hrs + ':'+ min + ':' + secs;

    let display = document.querySelector('.clock-display')
   
    display.textContent = time;
   
    //need to change to true/false eventListener, use if else for hexColor and time display for : in hex value
   display.addEventListener('mouseover', () => {
      display.textContent =  hexColor;
  })
  display.addEventListener('mouseout', () => {
   display.textContent =  time;
})

    let pro = (secs/60)*14
    document.querySelector('.clock-progress-bar').style.width = pro + 'rem'
    document.querySelector('.clock').style.backgroundColor= hexColor 
    
 }

currentTime()

 setInterval(currentTime, 1000)

