fetch("data.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("cardContainer");

    data.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
      container.appendChild(card);
    });
  });
