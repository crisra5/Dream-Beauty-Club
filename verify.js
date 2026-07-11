const API =
"https://script.google.com/macros/s/AKfycbxSoky7ZD_mmJQwE_TbKX_hTPmMvQ3ZueIT-9oT-dp5tOgsLEeCxNHavTyuq1skEK-sxg/exec";

const params = new URLSearchParams(window.location.search);

const code = params.get("code");

fetch(API + "?action=verify&code=" + encodeURIComponent(code))
.then(r => r.json())
.then(member => {

const today = new Date();

let status = "ACTIVE MEMBER";
let badgeColor = "#4CAF50";

if (member.expira) {

    const expiration = new Date(member.expira);

    if (expiration < today) {

        status = "EXPIRED MEMBER";
        badgeColor = "#ff4d6d";

    }

}

    if (!member.codigo){

       document.getElementById("verifyStatus").textContent = status;

document.getElementById("verifyStatus").style.background = badgeColor;

        document.getElementById("verifyStatus").textContent =
        "INVALID";

        document.getElementById("verifyStatus").style.background =
        "#ff4d6d";

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

    if(active){

        document.getElementById("verifyStatus").textContent =
        "ACTIVE";

        document.getElementById("verifyStatus").style.background =
        "#35c759";

    }else{

        document.getElementById("verifyStatus").textContent =
        "EXPIRED";

        document.getElementById("verifyStatus").style.background =
        "#ff3b30";

    }

    document.getElementById("verifyExpiration").textContent =
        "Expires: " + member.expira;

});