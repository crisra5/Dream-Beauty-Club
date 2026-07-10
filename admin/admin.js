const content = document.getElementById("content");

const API_URL = "https://script.google.com/macros/s/AKfycbxSoky7ZD_mmJQwE_TbKX_hTPmMvQ3ZueIT-9oT-dp5tOgsLEeCxNHavTyuq1skEK-sxg/exec";

const buttons = document.querySelectorAll(".menu");

function activateButton(button) {
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
}

document.getElementById("dashboardBtn").onclick = function () {
    activateButton(this);
    loadDashboard();
};

document.getElementById("membersBtn").onclick = function () {
    activateButton(this);
    loadMembers();
};

document.getElementById("membershipsBtn").onclick = function () {
    activateButton(this);
    loadMemberships();
};

document.getElementById("appointmentsBtn").onclick = function () {
    activateButton(this);
    loadAppointments();
};

document.getElementById("rewardsBtn").onclick = function () {
    activateButton(this);
    loadRewards();
};

document.getElementById("customizeBtn").onclick = function () {
    activateButton(this);
    loadCustomize();
};

document.getElementById("settingsBtn").onclick = function () {
    activateButton(this);
    loadSettings();
};

loadDashboard();