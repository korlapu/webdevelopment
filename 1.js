const loginForm = document.getElementById('login-form');
const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');
const loginButton = document.getElementById('login-button');
const signupForm = document.getElementById('signup-form');
const signupEmail = document.getElementById('signup-email');
const signupPassword = document.getElementById('signup-password');
const signupButton = document.getElementById('signup-button');


const dashboard = document.getElementById('dashboard');
const userName = document.getElementById('user-name');
const cityInput = document.getElementById('city-input');
const getWeatherButton = document.getElementById('get-weather-button');
const weatherResult = document.getElementById('weather-result');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const weatherDescription = document.getElementById('weather-description');
const logoutButton = document.getElementById('logout-button');

const correctEmail = "user@example.com";
const correctPassword = "password";

loginButton.addEventListener('click', () => {
    const email = loginEmail.value;
    const password = loginPassword.value;
    if (email === correctEmail && password === correctPassword) {
        openDashboard(email);
    } else {
        alert("Incorrect email or password. Please try again.");
    }
});


const omdbApiKey = "6c552afb";

getWeatherButton.addEventListener('click', () => {
    const movieTitle = cityInput.value;

    const omdbApiUrl = `https://www.omdbapi.com/?apikey=${omdbApiKey}&t=${movieTitle}`;

   
    fetch(omdbApiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
           
            if (data.Response === "True") {
                cityName.textContent = data.Title;
                temperature.textContent = `Released: ${data.Year}`;
                weatherDescription.textContent = `IMDB Rating: ${data.imdbRating}`;
                weatherResult.style.display = 'block';
            } else {
                cityName.textContent = "Movie not found";
                temperature.textContent = "";
                weatherDescription.textContent = "";
                weatherResult.style.display = 'block';
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            
        });
});


logoutButton.addEventListener('click', () => {
    openLogin();
});

function openDashboard(email) {
    loginForm.style.display = 'none';
    signupForm.style.display = 'none';
    dashboard.style.display = 'block';
    userName.textContent = email;
}

function openLogin() {
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
    dashboard.style.display = 'none';
    weatherResult.style.display = 'none';
}

openLogin();