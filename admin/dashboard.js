function loadDashboard() {

content.innerHTML = `

<h1>Welcome, Cris 👑</h1>

<p class="subtitle">

Dream Beauty Club Administration

</p>

<div class="cards">

<div class="card">

<h3>Total Members</h3>

<h2 id="totalMembers">-</h2>

</div>

<div class="card">

<h3>Active Memberships</h3>

<h2 id="activeMembers">-</h2>

</div>

<div class="card">

<h3>Expired</h3>

<h2 id="expiredMembers">-</h2>

</div>

<div class="card">

<h3>Appointments Today</h3>

<h2>0</h2>

</div>

</div>

`;

fetch(API_URL)

.then(r=>r.json())

.then(members=>{

document.getElementById("totalMembers").innerHTML=members.length;

let active=0;

let expired=0;

members.forEach(member=>{

if(member.estado.toLowerCase()=="activo"){

active++;

}else{

expired++;

}

});

document.getElementById("activeMembers").innerHTML=active;

document.getElementById("expiredMembers").innerHTML=expired;

});

}