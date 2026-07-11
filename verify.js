const API =
"https://script.google.com/macros/s/AKfycbxSoky7ZD_mmJQwE_TbKX_hTPmMvQ3ZueIT-9oT-dp5tOgsLEeCxNHavTyuq1skEK-sxg/exec";

const params = new URLSearchParams(window.location.search);
const code = params.get("code");

// Cargar configuración
fetch(API + "?action=getSettings")
.then(r => r.json())
.then(settings => {

    if (settings.verifyTitle)
        document.getElementById("verifyTitle").textContent =
        settings.verifyTitle;

    if (settings.verifySubtitle)
        document.getElementById("verifySubtitle").textContent =
        settings.verifySubtitle;

    if (settings.verifyBackground) {

        document.body.style.backgroundImage =
        "url('" + settings.verifyBackground + "')";

        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";

    }

    if (settings.logo) {

        const logo = document.getElementById("verifyLogo");

        logo.src = settings.logo;
        logo.style.display = "block";

    }

    if (settings.verifyCardColor) {

        document.documentElement.style.setProperty(
            "--verify-card-color",
            settings.verifyCardColor
        );

    }

    if (settings.verifyBorderColor) {

        document.documentElement.style.setProperty(
            "--verify-border-color",
            settings.verifyBorderColor
        );

    }

    return fetch(
        API + "?action=verify&code=" +
        encodeURIComponent(code)
    )
})

.then(r => r.json())

.then(member => {

    if (!member.codigo){

        document.getElementById("verifyName").textContent =
        "Invalid Membership";

        document.getElementById("verifyStatus").textContent =
        "INVALID";

        return;

    }

    document.getElementById("verifyName").textContent =
        member.nombre + " " + member.apellido;

    let active = false;

    if(member.expira){

        const today = new Date();

        const expiration = new Date(member.expira);

        active = expiration >= today;

    }

    fetch(API + "?action=getSettings")
    .then(r => r.json())
    .then(settings => {

        if(active){

            document.getElementById("verifyStatus").textContent =
            "ACTIVE MEMBER";

            document.getElementById("verifyStatus").style.background =
            settings.verifyActiveColor || "#35c759";

        }else{

            document.getElementById("verifyStatus").textContent =
            "EXPIRED MEMBER";

            document.getElementById("verifyStatus").style.background =
            settings.verifyExpiredColor || "#ff3b30";

        }

    });

    document.getElementById("verifyExpiration").textContent =
        member.expira
        ? "Valid until: " + member.expira
        : "";

});