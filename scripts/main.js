(function () {
   'use strict';

   let display = document.querySelector('.clock-display');
   // let clock = document.querySelector('.clock');
   let isHover = false;


   display.addEventListener('mouseover', (e) => {
      isHover = true;
   });

   display.addEventListener('mouseout', (e) => {
      isHover = false;
   });

   setInterval(currentTime, 1000);

   function currentTime() {
      let date = new Date();
      let hrs, min, secs;

      if(isHover) {
          // let hexColor = '#' + hrs + ':' + min + ':' + secs.toString(16);
          hrs = date.getHours().toString(16);
          min = date.getMinutes().toString(16);
          secs = date.getSeconds().toString(16);
        
      } else {
         hrs = date.getHours().toString();
         min = date.getMinutes().toString();
         secs = date.getSeconds().toString();
        
      }

      hrs = hrs.length < 2 ? "0" + hrs : hrs;
      min = min.length < 2 ? "0" + min : min;
      secs = secs.length < 2 ? "0" + secs : secs;

      // secs = ("0" + date.getSeconds()).slice(-2);
      
      let time = hrs + ':' + min + ':' + secs;

      display.textContent = time;


      //need to change to true/false eventListener, use if else for hexColor and time display for : in hex value
      // if (isHover === true) {
      //    display.textContent = hexColor
      // } else {
      //    display.textContent = time
      // }
      

      let progress = (secs / 60) * 14
      document.querySelector('.clock-progress-bar').style.width = progress + 'rem';
      document.querySelector('.clock').style.backgroundColor = hexColor;

   }

   currentTime();

})();
