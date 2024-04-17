alert("Welcome to my website!");

const color_scheme = {
    "background": {
        "light": "#f0ffff",
        "dark": "#1d3557"
    },
    "text": {
        "light": "#000000",
        "dark": "#caf0f8"
    },
    "navigator_bar_background": {
        "light": "#f28482",
        "dark": "#d1495b",
    },
    "navigator_bar_text": {
        "light": "#f5cac3",
        "dark": "#f28482",
    },

}

function showCurrentTime() {
    let timeSpot = document.getElementById("time");
    let weekdaySpot = document.getElementById("weekday");

    let date = new Date();
    let time = date.toLocaleTimeString();
    timeSpot.innerHTML = time;

    if (date.getDay() == 0) {
        weekdaySpot.innerHTML = "Sunday";
    } else if (date.getDay() == 1) {
        weekdaySpot.innerHTML = "Monday";
    } else if (date.getDay() == 2) {
        weekdaySpot.innerHTML = "Tuesday";
    } else if (date.getDay() == 3) {
        weekdaySpot.innerHTML = "Wednesday";
    } else if (date.getDay() == 4) {
        weekdaySpot.innerHTML = "Thursday";
    } else if (date.getDay() == 5) {
        weekdaySpot.innerHTML = "Friday";
    } else if (date.getDay() == 6) {
        weekdaySpot.innerHTML = "Saturday";
    }
}

function changeThemeDark() {
    document.body.style.color = color_scheme.text.dark;
    document.body.style.backgroundColor = color_scheme.background.dark;
    document.getElementById("navigator").style.backgroundColor = color_scheme.navigator_bar_background.dark;
}

function changeThemeLight() {
    document.body.style.color = color_scheme.text.light;
    document.body.style.backgroundColor = color_scheme.background.light;
    document.getElementById("navigator").style.backgroundColor = color_scheme.navigator_bar_background.light;
}

function update_age() {
    // input of age is a range input
    let age = document.getElementById("age").value;
    document.getElementById("age_value").innerHTML = age;
}

function validate_input() {
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    if (email == "" || phone == "" || message == "") {
        alert("Please fill in all fields");
        return false;
    }

    if (email.indexOf("@") == -1) {
        alert("Invalid email address");
        return false;
    }

    if (phone.length != 10) {
        alert("Invalid phone number");
        return false;
    }

    alert("Submitted Successfully!");
}

window.onload = showCurrentTime;
document.getElementById("refresh_time").addEventListener("click", showCurrentTime);
document.getElementById("change_theme_dark").addEventListener("click", changeThemeDark);
document.getElementById("change_theme_light").addEventListener("click", changeThemeLight);
document.getElementById("age").addEventListener("input", update_age);
document.getElementById("submit").addEventListener("click", validate_input);