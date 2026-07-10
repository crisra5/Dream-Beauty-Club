const API_URL = "https://script.google.com/macros/s/AKfycbxSoky7ZD_mmJQwE_TbKX_hTPmMvQ3ZueIT-9oT-dp5tOgsLEeCxNHavTyuq1skEK-sxg/exec";

fetch(API_URL + "?action=getSettings")
.then(r => r.json())
.then(settings => {

    if(settings.websiteName)
        document.getElementById("websiteName").textContent = settings.websiteName;

    if(settings.loginSubtitle)
        document.getElementById("loginSubtitle").textContent = settings.loginSubtitle;
    
if(settings.textColor){

    document.getElementById("loginSubtitle").style.color =
    settings.textColor;

}

    if(settings.loginButton)
        document.getElementById("enterButton").textContent = settings.loginButton;

    if(settings.primaryColor){

    document.documentElement.style.setProperty(
        "--primary-color",
        settings.primaryColor
    );

    const button = document.getElementById("enterButton");

    if(button){

        button.style.background = settings.primaryColor;

    }

}

if(settings.textColor){

    document.body.style.color = settings.textColor;

}

if(settings.titleColor){

    const title = document.getElementById("websiteName");

    if(title){

        title.style.color = settings.titleColor;

    }

}

if(settings.buttonColor){

    const button = document.getElementById("enterButton");

    if(button){

        button.style.background = settings.buttonColor;

    }

}

if(settings.cardColor){

    const card = document.querySelector(".card");

    if(card){

        card.style.background = settings.cardColor;

    }

}

if(settings.cardBorderColor){

    const card = document.querySelector(".card");

    if(card){

        card.style.border =
        "2px solid " + settings.cardBorderColor;

    }

}
    
    if(settings.logo){

    const logo = document.getElementById("logo");

    logo.src = settings.logo;

    logo.style.display = "block";

}

if(settings.loginBackground){

    document.body.style.backgroundImage =
    "url('" + settings.loginBackground + "')";

    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
}

if(settings.loginBackground){

    document.body.style.backgroundImage =
    "url('" + settings.loginBackground + "')";

    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
}

if(settings.websiteFont){

    document.body.style.fontFamily =
    settings.websiteFont + ", sans-serif";

    const title = document.getElementById("websiteName");

    if(title){

        if(settings.websiteFont === "'Playfair Display'"){

            title.style.fontFamily = "'Playfair Display', serif";

        }else if(settings.websiteFont === "'Cormorant Garamond'"){

            title.style.fontFamily = "'Cormorant Garamond', serif";

        }else if(settings.websiteFont === "'DM Serif Display'"){

            title.style.fontFamily = "'DM Serif Display', serif";

        }else if(settings.websiteFont === "Cinzel"){

    title.style.fontFamily = "Cinzel, serif";

}else if(settings.websiteFont === "Italianno"){

    title.style.fontFamily = "'Italianno', cursive";

}else if(settings.websiteFont === "Pinyon Script"){

    title.style.fontFamily = "'Pinyon Script', cursive";

}else{

            title.style.fontFamily =
            settings.websiteFont + ", sans-serif";

        }

    }

}

});

document.getElementById("enterButton").addEventListener("click", function () {

    const code = document.getElementById("code").value.trim();

    if (code === "") {
        alert("Please enter your membership code 💖");
        return;
    }

    fetch(API_URL)
    .then(r => r.json())
    .then(codes => {

        const member = codes.find(c => c.codigo === code);

        if (!member) {

            document.getElementById("message").innerHTML = "❌ Invalid membership code.";
            return;

        }

        if (member.estado.toLowerCase() === "usado") {

            document.getElementById("message").innerHTML = "❌ This membership has already been activated.";
            return;

        }

        fetch(API_URL + "?row=" + member.fila)
        .then(() => {

            localStorage.setItem("dreamMember", JSON.stringify(member));

            if (!member.nombre || member.nombre.trim() === "") {

                window.location.href = "profile.html";

            } else {

                window.location.href = "member.html";

            }

        });

    })
    .catch(error => {

        alert(error);

    });

});