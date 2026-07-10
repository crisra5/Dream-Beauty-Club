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
<th>First Name</th>
<th>Last Name</th>

</tr>

</table>

</div>

`;

fetch(API_URL)

.then(r=>r.json())

.then(members=>{

const table=document.getElementById("membersTable");

members.forEach(member=>{

table.innerHTML += `

<tr>

<td>${member.codigo}</td>

<td>${member.estado}</td>

<td>${member.nombre || "-"}</td>

<td>${member.apellido || "-"}</td>

</tr>

`;

});

});

}