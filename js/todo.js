let post = document.querySelector(".posts");
function getPost({ title, completed }) {
  return `
  <div class="col-md-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title card_title">${title}</h5>
        <p class="card-text text" >
        ${
          completed
            ? `<img src="./images/true.svg" alt="">`
            : `<img src="./images/False.svg" alt="">`
        }
        </p>

    </div>
  </div>`;
}

async function getDate() {
  let postId = localStorage.getItem("users");
  post.innerHTML = "...loading...";
  let res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${postId}/todos`
  );
  let data = await res.json();
  console.log(data);
  post.innerHTML = " ";
  data.forEach((posts) => {
    post.innerHTML += getPost(posts);
  });
}
getDate();