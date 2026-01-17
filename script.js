function addRecipe() {
  let name = document.getElementById("name").value;
  let desc = document.getElementById("desc").value;
  let category = document.getElementById("category").value;

  if (!name || !desc) {
    alert("Fill all fields");
    return;
  }

  let imageURL = "";

  if (category === "veg") {
    imageURL = "https://source.unsplash.com/600x400/?vegetarian,food";
  } else if (category === "nonveg") {
    imageURL = "https://source.unsplash.com/600x400/?chicken,food";
  } else if (category === "dessert") {
    imageURL = "https://source.unsplash.com/600x400/?dessert,cake";
  }

  let card = document.createElement("div");
  card.className = "card";
  card.dataset.category = category;

  card.innerHTML = `
    <img src="${imageURL}">
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


