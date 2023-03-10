let post = document.querySelector(".posts");
function getPost({ title, url, thumbnailUrl }) {
  return `
  <div class="col-md-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title card_title"> <img class="img" src="${url}" alt="">  </h5>
        <p class="card-text text" >
     
         <b> 
           ${title} <b/>
        </p>
        </div>
    </div>
  </div>`;
}

async function getDate() {
  let postId = localStorage.getItem("users");
  post.innerHTML = "...loading...";
  let res = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${postId}/photos`
  );
  let data = await res.json();
  console.log(data);
  post.innerHTML = " ";
  data.forEach((posts) => {
    post.innerHTML += getPost(posts);
  });
}
getDate();
