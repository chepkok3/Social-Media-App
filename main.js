let form = document.getElementById("form");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");
let input = document.getElementById("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");

  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Post cannot be blank";
    console.log("failure");
  } else {
    console.log("success");
    msg.innerHTML = "";
    acceptData();
  }
};

let data = {};
let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
  createPost();
};

let createPost = () => {
  posts.innerHTML += `<div>
  <p>${"data.text"}</p>
  <span class="options">
    <i onClick="editPost(this)" class="fas fa-edit"></i>
    <i onClick="deletPost(this)" class="fas fa-trash-alt"></i>
  </span>
</div>;
`;
  input.value = "";
};

let deletPost = (e) => {
  e.parentElement.parentElement.remove();
};

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
