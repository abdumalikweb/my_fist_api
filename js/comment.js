let post = document.querySelector(".posts");
function getPost({ name, body, email }) {
  return `
  <div class="col-md-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title card_title">${name}</h5>
        <p class="card-text text" >
        ${body}
        </p>
      <div class = "card_flex"> 
       <a class="card-link">${email}</a></div>

      
      </div>
    </div>
  </div>`;
}

async function getDate() {
  let postId = localStorage.getItem("users");
  post.innerHTML = `<div class="text-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>`;
  let res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
  let data = await res.json();
  console.log(data);
  post.innerHTML = " ";
  data.forEach((posts) => {
    post.innerHTML += getPost(posts);
  });
}
getDate();
