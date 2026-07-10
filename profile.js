const API_URL = "https://script.google.com/macros/s/AKfycbxSoky7ZD_mmJQwE_TbKX_hTPmMvQ3ZueIT-9oT-dp5tOgsLEeCxNHavTyuq1skEK-sxg/exec";

const member = JSON.parse(localStorage.getItem("dreamMember"));

if (!member) {
    window.location.href = "index.html";
}

fetch(API_URL + "?action=getSettings")
.then(r => r.json())
.then(settings => {

    if(settings.profileTitle){

        document.getElementById("profileTitle").textContent =
        settings.profileTitle;

    }

    if(settings.profileSubtitle){

        document.getElementById("profileSubtitle").textContent =
        settings.profileSubtitle;

    }

    if(settings.profileButton){

    document.getElementById("profileButtonText").textContent =
    settings.profileButton;

}

if(settings.profileBackground){

    document.getElementById("profileBody").style.backgroundImage =
    "url('" + settings.profileBackground + "')";

    document.getElementById("profileBody").style.backgroundSize =
    "cover";

    document.getElementById("profileBody").style.backgroundPosition =
    "center";

    document.getElementById("profileBody").style.backgroundRepeat =
    "no-repeat";

}

// Logo
if (settings.logo) {

    const logo = document.getElementById("profileLogo");

    if (logo) {

        logo.src = settings.logo;

        logo.style.display = "block";

    }

}

// Tipografía
if (settings.profileFont) {

    document.body.style.fontFamily =
        settings.profileFont + ", sans-serif";

    const title = document.getElementById("profileTitle");
    const subtitle = document.getElementById("profileSubtitle");

    if (settings.profileFont === "Playfair Display") {

        title.style.fontFamily = "'Playfair Display', serif";
        subtitle.style.fontFamily = "'Playfair Display', serif";

    } else if (settings.profileFont === "Cormorant Garamond") {

        title.style.fontFamily = "'Cormorant Garamond', serif";
        subtitle.style.fontFamily = "'Cormorant Garamond', serif";

    } else if (settings.profileFont === "DM Serif Display") {

        title.style.fontFamily = "'DM Serif Display', serif";
        subtitle.style.fontFamily = "'DM Serif Display', serif";

    } else if (settings.profileFont === "Cinzel") {

        title.style.fontFamily = "Cinzel, serif";
        subtitle.style.fontFamily = "Cinzel, serif";

    } else if (settings.profileFont === "Italianno") {

        title.style.fontFamily = "'Italianno', cursive";
        subtitle.style.fontFamily = "'Italianno', cursive";

    } else if (settings.profileFont === "Pinyon Script") {

        title.style.fontFamily = "'Pinyon Script', cursive";
        subtitle.style.fontFamily = "'Pinyon Script', cursive";

    } else {

        title.style.fontFamily = settings.profileFont + ", sans-serif";
        subtitle.style.fontFamily = settings.profileFont + ", sans-serif";

    }

}

// Color del título
if (settings.profileTitleColor) {

    document.getElementById("profileTitle").style.color =
        settings.profileTitleColor;

}

// Color del texto
if (settings.profileTextColor) {

    document.getElementById("profileSubtitle").style.color =
        settings.profileTextColor;

}

// Tarjeta
if (settings.profileCardColor) {

    const card = document.querySelector(".profile-card")

    if(card){

        card.style.background = settings.profileCardColor;

    }

}

// Borde
if (settings.profileBorderColor) {

    const card = document.querySelector(".profile-card")

    if(card){

        card.style.border =
            "2px solid " + settings.profileBorderColor;

    }

}

// Botón
if (settings.profileButtonColor) {

    document.getElementById("saveProfile").style.background =
        settings.profileButtonColor;

}

});

document.getElementById("saveProfile").addEventListener("click", function () {

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();

    if (firstName === "") {
        alert("Please enter your first name 💖");
        return;
    }

    const url =
        API_URL +
        "?saveProfile=true" +
        "&row=" + member.fila +
        "&firstName=" + encodeURIComponent(firstName) +
        "&lastName=" + encodeURIComponent(lastName);

    fetch(url)
        .then(response => response.text())
        .then(result => {

            if (result.trim() !== "PROFILE SAVED") {
                alert("Error saving your profile.");
                return;
            }

            member.nombre = firstName;
            member.apellido = lastName;

            localStorage.setItem("dreamMember", JSON.stringify(member));

            window.location.href = "member.html";

        })
        .catch(error => {
            console.error(error);
            alert("Connection error.");
        });

});