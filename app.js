//menu hamburger
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

//filtro de rações funcional
function filterItems(category) {
    let items = document.querySelectorAll(".cat, .dog, .birds, .fish");

    if (category === "all") {
        
        let shuffledItems = Array.from(items).sort(() => 0.5 - Math.random());

        
        let randomItems = shuffledItems.slice(0, 3);
        
        items.forEach(item => item.classList.add("hidden"));

        randomItems.forEach(item => item.classList.remove("hidden"));
        
    } else {
       
        items.forEach(item => {
            if (item.classList.contains(category)) {
                item.classList.remove("hidden");
            } else {
                item.classList.add("hidden");
            }
        });
    }

    document.querySelectorAll("button").forEach(btn => btn.classList.remove("active"));

    document.querySelector(`[onclick="filterItems('${category}')"]`).classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
    filterItems("all");
});


document.querySelectorAll(".quantity-container").forEach(container => {
    let quantityElement = container.querySelector("span"); // Seleciona o span dentro do container
    let quantity = parseInt(quantityElement.textContent) || 1; // Garante que a quantidade começa em 1

    container.querySelector(".quantity-btn:nth-child(1)").addEventListener("click", () => {
        quantity++;
        quantityElement.textContent = quantity;
    });

    container.querySelector(".quantity-btn:nth-child(3)").addEventListener("click", () => {
        if (quantity > 1) {
            quantity--;
            quantityElement.textContent = quantity;
        }
    });
});


//função de favoritar item
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões de favorito
    const favoriteButtons = document.querySelectorAll('.fav-btn');
    
    // Adiciona o evento de clique para cada botão
    favoriteButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Pega o ícone de coração dentro deste botão específico
        const heartIcon = button.querySelector('.heart-icon');
        
        // Alterna a classe active apenas para este ícone
        heartIcon.classList.toggle('active');
        
        // Atualiza o aria-label para este botão
        const isFavorite = heartIcon.classList.contains('active');
        button.setAttribute('aria-label', 
          isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'
        );
      });
    });
  });