var button = document.querySelector(".submit");
var city = document.querySelector(".city_name");
var nam = document.querySelector(".name");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");
var wind = document.querySelector(".wind_speed");
// Event Handler
button.addEventListener('click', function (e) {
    e.preventDefault();
    loadData();
})


function loadData() {
   
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
        .then(response => response.json())
        .then(data => {
            nam.innerHTML = "City Name : " + data['name'];
            desc.innerHTML = "Temperature : " + data['main']['temp'] + "Kelvin";
            temp.innerHTML = "Description : " + data['weather']['0']['description'];
            wind.innerHTML = "Wind Speed : " + data['wind']['speed'] + "m/s";
        });
}

// Js for text yto speech
function speech() {
                // get output div reference
                var output = document.querySelector(".city_name");
                // get action element reference
                var action = document.querySelector(".Speech");
                // new speech recognition object
                var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
                var recognition = new SpeechRecognition();
            
                // This runs when the speech recognition service starts
                // recognition.onstart = function() {
                //     action.innerHTML = "<small>listening, please speak...</small>";
                // };
                
                // recognition.onspeechend = function() {
                //     action.innerHTML = "<small>stopped listening, hope you are done...</small>";
                //     recognition.stop();
                // }
              
                // This runs when the speech recognition service returns result
                recognition.onresult = function(event) {
                    var transcript = event.results[0][0].transcript;
                    var confidence = event.results[0][0].confidence;
                    output.value = transcript;
                    // output.classList.remove("hide");
                };
              
                 // start recognition
                 recognition.start();
            }