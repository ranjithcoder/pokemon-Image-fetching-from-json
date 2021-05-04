const container = document.querySelector(".container");
const input = document.querySelector("input");

let usersArray = [];

const createCardList = (array) => {
  container.innerHTML = "";

  array.forEach((obj) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `<div class="image"><img src"${obj.imgurl}" height="90px" width="90px" alt=""></div>
    <div class="name">Name</div><div class="name-content">${obj.name}</div><div class="email">Type</div><div class="email-content">${obj.type}</div>`;
    container.appendChild(card);
  });
};

fetch("https://raw.githubusercontent.com/ranjithcoder/demo/master/db.json")
  .then((data) => {
    return data.text();
    // return data.json();
    // console.log ka example
  })
  .then((result) => {
    console.log(JSON.parse(result));
    usersArray = JSON.parse(result);
    createCardList(usersArray);
  });

input.addEventListener("input", (event) => {
  const searchStr = event.target.value.toLowerCase();

  const filteredArray = usersArray.filter((ele) => {
    return (
      ele.username.toLowerCase().includes(searchStr) ||
      ele.email.toLowerCase().includes(searchStr)
    );
  });

  createCardList(filteredArray);
});

// particle js configuration
particlesJS.load("particles-js", "particles.json"); 
