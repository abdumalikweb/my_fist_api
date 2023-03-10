// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     return res.json();
//   })
//   .then((res) => {
//     console.log(res);
//   });
let users = document.querySelector(".users");

function getUsers({
  name,
  username,
  website,
  email,
  id,
  address,
  company,
  phone,
}) {
  return `
  <div class="col-md-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${username}</h6>
        <p class="card-text">
        <b>Company</b>: ${company.name}<br>
        <b>City</b> :  ${address.city}<br>
        <b>Email</b>: ${email}<br>
        <b>Phone</b>: ${phone}<br>
         <b>www.${website}</b>
        </p>
        <a href="posts.html" onclick="saveId(${id})"  class="card-link btn btn-primary">Post</a>
        <a href="todo.html"  onclick="saveId(${id})" class="card-link btn btn-primary">Todos</a>
        <a href="albums.html"  onclick="saveId(${id})" class="card-link btn btn-primary">Albums</a>

      </div>
    </div>
  </div>`;
}

function saveId(id) {
  localStorage.setItem("users", id);
}

async function getDate() {
  users.innerHTML = `<div class="text-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>`;
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await res.json();
  users.innerHTML = " ";
  data.forEach((user) => {
    users.innerHTML += getUsers(user);
  });
}
getDate();
