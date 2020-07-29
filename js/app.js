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
    speech;
})


function loadData() {
   
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid=1fc232b651c2734118f63de0d555156b')
        .then(response => response.json())
        .then(data => {
            nam.innerHTML = "City Name : " + data['name'];
            desc.innerHTML = "Temperature : " + data['main']['temp'] + "Kelvin";
            temp.innerHTML = "Description : " + data['weather']['0']['description'];
            wind.innerHTML = "Wind Speed : " + data['wind']['speed'] + "m/s";
        });
}

// Js for text to speech
function speech() {
                // get output div reference
                var output = document.querySelector(".city_name");
                // get action element reference
                var action = document.querySelector(".Speech");
                // new speech recognition object
                var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
                var recognition = new SpeechRecognition();
              
                // This runs when the speech recognition service returns result
                recognition.onresult = function(event) {
                    var transcript = event.results[0][0].transcript;
                    output.value = transcript;

                    // API work:
                    fetch('https://api.openweathermap.org/data/2.5/weather?q='+transcript+'&appid=1fc232b651c2734118f63de0d555156b')
                    .then(response => response.json())
                    .then(data => {
                        nam.innerHTML = "City Name : " + data['name'];
                        desc.innerHTML = "Temperature : " + data['main']['temp'] + "Kelvin";
                        temp.innerHTML = "Description : " + data['weather']['0']['description'];
                        wind.innerHTML = "Wind Speed : " + data['wind']['speed'] + "m/s";
                    });
                    
                };
              
                 
                 recognition.start();
            }