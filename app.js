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

//botão de adcionar mais ou menos no carrinho

let quantity = 1;

function increase () {
    quantity++;
    document.getElementById("quantity").textContent = quantity;
}

function decrease() {
    if (quantity > 1) {
        quantity--;
        document.getElementById("quantity").textContent = quantity;
    }
}

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