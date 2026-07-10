function loadCustomize() {

content.innerHTML = `

<h1>Customize Website 🎨</h1>

<p class="subtitle">
Customize every detail of Dream Beauty Club.
</p>

<div class="card">

<h2>🖼 Branding</h2>

<label><b>Logo</b></label><br>

<input type="file" id="logoFile" accept="image/*">

<br><br>

<button id="uploadLogo">
📤 Upload Logo
</button>

<br><br>

<label>Logo URL</label>

<input id="logoUrl" placeholder="https://...">

<br><br>

<h2>🖼 Backgrounds</h2>

<label>Login Background URL</label>

<input id="loginBackground" placeholder="https://...">

<br><br>

<hr>

<h2>👤 Profile Page</h2>

<label>Profile Title</label>
<input id="profileTitle">

<label>Profile Subtitle</label>
<textarea id="profileSubtitle"></textarea>

<label>Profile Button</label>
<input id="profileButton">

<label>Profile Background URL</label>
<input id="profileBackground" placeholder="https://...">

<br><br>

<label>Profile Font</label>

<select id="profileFont">

<option value="Poppins">Poppins</option>
<option value="Playfair Display">Playfair Display</option>
<option value="Montserrat">Montserrat</option>
<option value="Lora">Lora</option>
<option value="Quicksand">Quicksand</option>
<option value="Cormorant Garamond">Cormorant Garamond</option>
<option value="DM Serif Display">DM Serif Display</option>
<option value="Cinzel">Cinzel</option>
<option value="Italianno">Italianno ✨</option>
<option value="Pinyon Script">Pinyon Script 👑</option>

</select>

<br><br>

<label>Profile Card Color</label>
<input type="color" id="profileCardColor">

<br><br>

<label>Profile Border Color</label>
<input type="color" id="profileBorderColor">

<br><br>

<label>Profile Button Color</label>
<input type="color" id="profileButtonColor">

<br><br>

<label>Profile Title Color</label>
<input type="color" id="profileTitleColor">

<br><br>

<label>Profile Text Color</label>
<input type="color" id="profileTextColor">

<hr>

<h2>💳 Membership</h2>

<label>Welcome Text</label>

<input id="memberWelcome">

<label>Footer</label>

<textarea id="memberFooter"></textarea>

<br><br>

<label>Membership Background URL</label>

<input
id="memberBackground"
placeholder="https://...">

<br><br>

<label>Membership Font</label>

<select id="memberFont">

<option value="Poppins">Poppins</option>

<option value="'Playfair Display'">Playfair Display</option>

<option value="Montserrat">Montserrat</option>

<option value="Lora">Lora</option>

<option value="Quicksand">Quicksand</option>

<option value="'Cormorant Garamond'">Cormorant Garamond</option>

<option value="'DM Serif Display'">DM Serif Display</option>

<option value="Cinzel">Cinzel</option>

<option value="Italianno">Italianno ✨</option>

<option value="Pinyon Script">Pinyon Script 👑</option>

</select>

<br><br>

<label>Membership Badge Font</label>

<select id="memberBadgeFont">

<option value="Poppins">Poppins</option>
<option value="Playfair Display">Playfair Display</option>
<option value="Montserrat">Montserrat</option>
<option value="Lora">Lora</option>
<option value="Quicksand">Quicksand</option>
<option value="Cormorant Garamond">Cormorant Garamond</option>
<option value="DM Serif Display">DM Serif Display</option>
<option value="Cinzel">Cinzel</option>
<option value="Italianno">Italianno ✨</option>
<option value="Pinyon Script">Pinyon Script 👑</option>

</select>

<br><br>

<label>Membership Card Color</label>

<input type="color" id="memberCardColor">

<br><br>

<label>Membership Border Color</label>

<input type="color" id="memberBorderColor">

<br><br>

<label>Membership Badge Color</label>

<input type="color" id="memberBadgeColor">

<br><br>

<label>Membership Button Color</label>

<input type="color" id="memberButtonColor">

<hr>

<h2>📝 Login</h2>

<label>Website Name</label>

<input id="websiteName">

<label>Login Title</label>

<input id="loginTitle">

<label>Login Subtitle</label>

<textarea id="loginSubtitle"></textarea>

<label>Login Button</label>

<input id="loginButton">

<label>Success Message</label>

<input id="successMessage">

<hr>

<h2>🖋 Typography</h2>

<label>Website Font</label>

<select id="websiteFont">

<option value="Poppins">Poppins</option>

<option value="'Playfair Display'">Playfair Display</option>

<option value="Montserrat">Montserrat</option>

<option value="Lora">Lora</option>

<option value="Quicksand">Quicksand</option>

<option value="'Cormorant Garamond'">Cormorant Garamond</option>

<option value="'DM Serif Display'">DM Serif Display</option>

<option value="Cinzel">Cinzel</option>

<option value="Italianno">Italianno ✨</option>

<option value="Pinyon Script">Pinyon Script 👑</option>

</select>

<hr>

<h2>🎨 Login Colors</h2>

<label>Primary Color</label>
<input type="color" id="primaryColor">

<br><br>

<label>Secondary Color</label>
<input type="color" id="secondaryColor">

<br><br>

<label>Text Color</label>
<input type="color" id="textColor">

<br><br>

<label>Title Color</label>
<input type="color" id="titleColor">

<br><br>

<label>Login Button Color</label>
<input type="color" id="buttonColor">

<br><br>

<label>Login Card Color</label>
<input type="color" id="cardColor">

<br><br>

<label>Card Border Color</label>
<input type="color" id="cardBorderColor">

<br><br>

<button id="saveSettings">

💾 Save Changes

</button>

</div>

`;

fetch(API_URL + "?action=getSettings")

.then(r => r.json())

.then(settings => {

document.getElementById("websiteName").value =
settings.websiteName || "";

document.getElementById("loginTitle").value =
settings.loginTitle || "";

document.getElementById("loginSubtitle").value =
settings.loginSubtitle || "";

document.getElementById("loginButton").value =
settings.loginButton || "";

document.getElementById("successMessage").value =
settings.successMessage || "";

document.getElementById("profileTitle").value =
settings.profileTitle || "";

document.getElementById("profileSubtitle").value =
settings.profileSubtitle || "";

document.getElementById("profileButton").value =
settings.profileButton || "";

document.getElementById("profileBackground").value =
settings.profileBackground || "";

document.getElementById("profileFont").value =
settings.profileFont || "Poppins";

document.getElementById("profileCardColor").value =
settings.profileCardColor || "#ffffff";

document.getElementById("profileBorderColor").value =
settings.profileBorderColor || "#ffd6e7";

document.getElementById("profileButtonColor").value =
settings.profileButtonColor || "#ff5fa2";

document.getElementById("profileTitleColor").value =
settings.profileTitleColor || "#222222";

document.getElementById("profileTextColor").value =
settings.profileTextColor || "#555555";

document.getElementById("memberWelcome").value =
settings.memberWelcome || "";

document.getElementById("memberFooter").value =
settings.memberFooter || "";

document.getElementById("memberBackground").value =
settings.memberBackground || "";

document.getElementById("memberFont").value =
settings.memberFont || "Poppins";

document.getElementById("memberBadgeFont").value =
settings.memberBadgeFont || "Poppins";

document.getElementById("logoUrl").value =
settings.logo || "";

document.getElementById("loginBackground").value =
settings.loginBackground || "";

document.getElementById("websiteFont").value =
settings.websiteFont || "Poppins";

document.getElementById("primaryColor").value =
settings.primaryColor || "#ff5fa2";

document.getElementById("secondaryColor").value =
settings.secondaryColor || "#ffffff";

document.getElementById("textColor").value =
settings.textColor || "#555555";

document.getElementById("titleColor").value =
settings.titleColor || "#222222";

/* ===== LOGIN ===== */

document.getElementById("buttonColor").value =
settings.buttonColor || "#ff5fa2";

document.getElementById("cardColor").value =
settings.cardColor || "#ffffff";

document.getElementById("cardBorderColor").value =
settings.cardBorderColor || "#ffd6e7";

/* ===== MEMBERSHIP ===== */

document.getElementById("memberCardColor").value =
settings.memberCardColor || "#ffffff";

document.getElementById("memberBorderColor").value =
settings.memberBorderColor || "#f3c7d8";

document.getElementById("memberBadgeColor").value =
settings.memberBadgeColor || "#ff5fa2";

document.getElementById("memberButtonColor").value =
settings.memberButtonColor || "#ff5fa2";

});

document.getElementById("saveSettings").onclick = function () {

const url =

API_URL +

"?action=saveSettings" +

"&websiteName=" + encodeURIComponent(document.getElementById("websiteName").value) +

"&loginTitle=" + encodeURIComponent(document.getElementById("loginTitle").value) +

"&loginSubtitle=" + encodeURIComponent(document.getElementById("loginSubtitle").value) +

"&loginButton=" + encodeURIComponent(document.getElementById("loginButton").value) +

"&successMessage=" + encodeURIComponent(document.getElementById("successMessage").value) +

"&profileTitle=" + encodeURIComponent(document.getElementById("profileTitle").value) +

"&profileSubtitle=" + encodeURIComponent(document.getElementById("profileSubtitle").value) +

"&profileButton=" + encodeURIComponent(document.getElementById("profileButton").value) +

"&profileBackground=" + encodeURIComponent(document.getElementById("profileBackground").value) +

"&profileFont=" +
encodeURIComponent(document.getElementById("profileFont").value) +

"&profileCardColor=" +
encodeURIComponent(document.getElementById("profileCardColor").value) +

"&profileBorderColor=" +
encodeURIComponent(document.getElementById("profileBorderColor").value) +

"&profileButtonColor=" +
encodeURIComponent(document.getElementById("profileButtonColor").value) +

"&profileTitleColor=" +
encodeURIComponent(document.getElementById("profileTitleColor").value) +

"&profileTextColor=" +
encodeURIComponent(document.getElementById("profileTextColor").value) +

"&memberWelcome=" + encodeURIComponent(document.getElementById("memberWelcome").value) +

"&memberFooter=" + encodeURIComponent(document.getElementById("memberFooter").value) +

"&memberBackground=" +
encodeURIComponent(document.getElementById("memberBackground").value) +

"&memberFont=" +
encodeURIComponent(document.getElementById("memberFont").value) +

"&memberBadgeFont=" +
encodeURIComponent(document.getElementById("memberBadgeFont").value) +

"&logo=" + encodeURIComponent(document.getElementById("logoUrl").value) +

"&loginBackground=" + encodeURIComponent(document.getElementById("loginBackground").value) +

"&websiteFont=" + encodeURIComponent(document.getElementById("websiteFont").value) +

"&primaryColor=" + encodeURIComponent(document.getElementById("primaryColor").value) +

"&secondaryColor=" + encodeURIComponent(document.getElementById("secondaryColor").value) +

"&textColor=" + encodeURIComponent(document.getElementById("textColor").value) +

"&titleColor=" + encodeURIComponent(document.getElementById("titleColor").value) +

/* ===== LOGIN ===== */

"&buttonColor=" + encodeURIComponent(document.getElementById("buttonColor").value) +

"&cardColor=" + encodeURIComponent(document.getElementById("cardColor").value) +

"&cardBorderColor=" + encodeURIComponent(document.getElementById("cardBorderColor").value) +

/* ===== MEMBERSHIP ===== */

"&memberCardColor=" + encodeURIComponent(document.getElementById("memberCardColor").value) +

"&memberBorderColor=" +
encodeURIComponent(document.getElementById("memberBorderColor").value) +

"&memberBadgeColor=" + encodeURIComponent(document.getElementById("memberBadgeColor").value) +

"&memberButtonColor=" + encodeURIComponent(document.getElementById("memberButtonColor").value);

console.log(url);

fetch(url)

.then(r=>r.text())

.then(()=>{

alert("VERSION NUEVA");

});

};

document.getElementById("uploadLogo").onclick=function(){

alert("Next step: Upload Logo 🚀");

};

}