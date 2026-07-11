const API_URL = "https://script.google.com/macros/s/AKfycbxSoky7ZD_mmJQwE_TbKX_hTPmMvQ3ZueIT-9oT-dp5tOgsLEeCxNHavTyuq1skEK-sxg/exec";

const member = JSON.parse(localStorage.getItem("dreamMember"));

if (!member) {
    window.location.href = "index.html";
}

fetch(API_URL + "?action=getSettings")
.then(r => r.json())
.then(settings => {

    // Logo
    if (settings.logo) {
        const logo = document.getElementById("memberLogo");
        logo.src = settings.logo;
        logo.style.display = "block";
    }

    // Fondo de la página de la membresía
if (settings.memberBackground) {

    document.body.style.backgroundImage =
        "url('" + settings.memberBackground + "')";

    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";

}

// Tipografía de la membresía
if (settings.memberFont) {

console.log("Fuente:", settings.memberFont);

    document.body.style.fontFamily = settings.memberFont;

console.log(document.body.style.fontFamily);

    document.getElementById("memberName").style.fontFamily =
        settings.memberFont;

    document.getElementById("memberWelcome").style.fontFamily =
        settings.memberFont;

    document.getElementById("memberFooter").style.fontFamily =
        settings.memberFont;

    document.querySelector(".benefits h2").style.fontFamily =
        settings.memberFont;

}

// Tipografía del badge (ACTIVE MEMBER)

if (settings.memberBadgeFont) {

    document.getElementById("memberStatus").style.fontFamily =

        settings.memberBadgeFont;

}

// Colores personalizados de la membresía

if (settings.memberCardColor) {

    document.documentElement.style.setProperty(
        "--member-card-color",
        settings.memberCardColor
    );

}

if (settings.memberBorderColor) {

    document.documentElement.style.setProperty(
        "--member-border-color",
        settings.memberBorderColor
    );

}

if (settings.memberBadgeColor) {

    document.documentElement.style.setProperty(
        "--member-badge-color",
        settings.memberBadgeColor
    );

}

if (settings.memberButtonColor) {

    document.documentElement.style.setProperty(
        "--member-button-color",
        settings.memberButtonColor
    );

}

    // Welcome
    if (settings.memberWelcome) {
        document.getElementById("memberWelcome").textContent =
            settings.memberWelcome;
    }

    // Footer
    if (settings.memberFooter) {
        document.getElementById("memberFooter").textContent =
            settings.memberFooter;
    }

    // Nombre de la clienta
    if (member.nombre) {
        document.getElementById("memberName").textContent = member.nombre;
    }

    // Estado
if (member.estado) {

    let status = member.estado.toLowerCase();

    if (status === "activo" || status === "usado") {
        status = "ACTIVE";
    } else {
        status = status.toUpperCase();
    }

    document.getElementById("memberStatus").textContent =
        "✨ " + status + " MEMBER ✨";

}

    // QR único
    if (member.codigo) {

        document.getElementById("memberQR").innerHTML = "";

        const verifyUrl =
"https://crisra5.github.io/Dream-Beauty-Club/verify.html?code=" +
encodeURIComponent(member.codigo);

new QRCode(document.getElementById("memberQR"), {

    text: verifyUrl,

    width: 100,
    height: 100,

    colorDark: "#000000",
    colorLight: "#ffffff",

    correctLevel: QRCode.CorrectLevel.H

});

    }

});

document.querySelector(".bookingButton").addEventListener("click", function () {

    window.open(
        "https://dreamssalon.glossgenius.com/services?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAS5_GxwZG9mAmV4dG4DYWVtAjExAHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp4YuR_0r3e_1qsG3nWT1mKFm-gQjgtuHlwa-Hx0fcj9KDLT1VZ9Nr2Ep4yse_aem_2dCpLuwomc06a0gnszwlmw",
        "_blank"
    );

});