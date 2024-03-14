// Set the date we're counting down to
var countDownDate = new Date("May 05, 2024 09:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  //document.getElementById("hitung-mundur").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  document.getElementById("days").innerText = days,
  document.getElementById("hours").innerText = hours,
  document.getElementById("minutes").innerText = minutes,
  document.getElementById("seconds").innerText = seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Akad Nikah Telah Dilaksanakan";
  }
}, 1000);

function myFunction() {
  // Copy the text inside the text field
  navigator.clipboard.writeText("1652953374");
  
  // Alert the copied text
  alert("Ingin menyalin nomor rekening?");
}

function myFunction1() {
  
  // Copy the text inside the text field
  navigator.clipboard.writeText("3066094072");

  // Alert the copied text
  alert("Ingin menyalin nomor rekening?");
}

