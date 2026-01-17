function searchRecipe() {
  let input = document.getElementById("search").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let title = card.querySelector("h3").innerText.toLowerCase();
    card.style.display = title.includes(input) ? "block" : "none";
  });
}

function addRecipe() {
  let name = document.getElementById("name").value;
  let desc = document.getElementById("desc").value;
  let category = document.getElementById("category").value;

  if (name === "" || desc === "") {
    alert("Fill all fields");
    return;
  }

  let imageURL;

  if (category === "veg") {
    imageURL = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c";
  } 
  else if (category === "nonveg") {
    imageURL = "https://images.unsplash.com/photo-1600891964599-f61ba0e24092";
  } 
  else if (category === "dessert") {
    imageURL = "https://images.unsplash.com/photo-1578985545062-69928b1d9587";
  }

  let card = document.createElement("div");
  card.className = "card";
  card.setAttribute("data-category", category);

  card.innerHTML = `
    <img src="${imageURL}?w=600&h=400&fit=crop">
    <div class="card-content">
      <h3>${name}</h3>
      <p>${desc}</p>
      <div class="stars" onclick="rate(this)">★★★☆☆</div>
    </div>
  `;

  document.getElementById("recipeList").appendChild(card);

  document.getElementById("name").value = "";
  document.getElementById("desc").value = "";
}

function rate(starsDiv) {
  let rating = prompt("Rate from 1 to 5");
  if (rating >= 1 && rating <= 5) {
    starsDiv.innerText =
      "★★★★★".slice(0, rating) + "☆☆☆☆☆".slice(0, 5 - rating);
  }
}

  document.getElementById("desc").value = "";
}



