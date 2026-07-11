function loadMembers() {

content.innerHTML = `

<h1>Members 👩</h1>

<p class="subtitle">
Manage all Dream Beauty Club members.
</p>

<div class="card">

<table id="membersTable" style="width:100%;border-collapse:collapse;">

<tr>

<th>Code</th>
<th>Status</th>
<th>Expires</th>
<th>First Name</th>
<th>Last Name</th>
<th>Actions</th>

</tr>

</table>

</div>

`;

fetch(API_URL)

.then(r => r.json())

.then(members => {

const table = document.getElementById("membersTable");

members.forEach(member => {

let expires = "-";

if(member.expira){
    expires = new Date(member.expira).toLocaleDateString();
}

table.innerHTML += `

<tr>

<td>${member.codigo}</td>

<td>${member.estado}</td>

<td>${expires}</td>

<td>${member.nombre || "-"}</td>

<td>${member.apellido || "-"}</td>

<td>

<button onclick="renewMembership(${member.fila})">
Renew
</button>

<button onclick="expireMembership(${member.fila})">
Expire
</button>

</td>

</tr>

`;

});

});

}

// ==============================
// RENEW
// ==============================

function renewMembership(row){

fetch(API_URL + "?action=renew&row=" + row)

.then(r => r.text())

.then(() => {

    alert("Membership Renewed! 💖");

    loadMembers();

});

}

// ==============================
// EXPIRE
// ==============================

function expireMembership(row){

fetch(API_URL + "?action=expire&row=" + row)

.then(r => r.text())

.then(() => {

    alert("Membership Expired!");

    loadMembers();

});

}