function addRecipe() {
  let name = document.getElementById("name").value.toLowerCase();
  let desc = document.getElementById("desc").value;
  let category = document.getElementById("category").value;

  if (!name || !desc) {
    alert("Fill all fields");
    return;
  }

  let imageURL = "";

  // 🔥 NAME-BASED IMAGE FIX
  if (name.includes("pizza")) {
    imageURL = "https://images.unsplash.com/photo-1601924582975-7e670d5a7c18?w=600";
  }
  else if (name.includes("pasta")) {
    imageURL = "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600";
  }
  else if (category === "veg") {
    imageURL = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600";
  }
  else if (category === "nonveg") {
    imageURL = "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600";
  }
  else if (category === "dessert") {
    imageURL = "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600";
  }
  else {
    // fallback image (ALWAYS SHOWS)
    imageURL = "https://images.unsplash.com/photo-1495195134817-aeb325a55b65?w=600";
  }

  let card = document.createElement("div");
  card.className = "card";
  card.setAttribute("data-category", category);

  card.innerHTML = `
    <img src="${imageURL}" alt="recipe image">
    <div class="card-content">
      <h3>${name.toUpperCase()}</h3>
      <p>${desc}</p>
      <div class="stars">★★★☆☆</div>
    </div>
  `;

  document.getElementById("recipeList").appendChild(card);

  document.getElementById("name").value = "";
  document.getElementById("desc").value = "";
}

