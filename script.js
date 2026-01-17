function searchRecipe() {
  let input = document.getElementById("search").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let title = card.querySelector("h3").innerText.toLowerCase();
    card.style.display = title.includes(input) ? "block" : "none";
  });
}

function filterCategory() {
  let category = document.getElementById("categoryFilter").value;
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    if (category === "all" || card.dataset.category === category) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function addRecipe() {
  let name = document.getElementById("name").value;
  let desc = document.getElementById("desc").value;
  let category = document.getElementById("category").value;

  if (!name || !desc) {
    alert("Fill all fields");
    return;
  }

  let card = document.createElement("div");
  card.className = "card";
  card.dataset.category = category;

  card.innerHTML = `
    <img src="https://picsum.photos/600/400?random=${Math.random()*1000}">
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

function rate(starDiv) {
  let rating = prompt("Rate from 1 to 5");
  if (rating >= 1 && rating <= 5) {
    starDiv.innerText = "★★★★★".slice(0, rating) + "☆☆☆☆☆".slice(0, 5 - rating);
  }
}
