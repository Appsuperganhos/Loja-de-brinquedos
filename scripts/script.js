document.addEventListener("DOMContentLoaded", function () {
    console.log("Script carregado!");

    // Configuração do botão de WhatsApp
    document.querySelectorAll(".botao-whatsapp").forEach(botao => {
        botao.addEventListener("click", function () {
            const numero = "5588999999999"; // Substituir pelo número real
            const mensagem = encodeURIComponent("Olá, estou interessado no carrinho elétrico!");
            window.open(`https://wa.me/${numero}?text=${mensagem}`, "_blank");
        });
    });

    // Configuração do menu hambúrguer
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    // Banner com deslize infinito
    const bannerContainer = document.querySelector(".banner-images");
    let images = document.querySelectorAll("#banner .banner-images img");
    let currentIndex = 0;
    const totalImages = images.length;

    // Clona a primeira imagem e adiciona ao final para criar o efeito de loop
    const firstImageClone = images[0].cloneNode(true);
    bannerContainer.appendChild(firstImageClone);

    function slideBanner() {
        currentIndex++;

        bannerContainer.style.transition = "transform 1s ease-in-out";
        bannerContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

        if (currentIndex === totalImages) {
            setTimeout(() => {
                bannerContainer.style.transition = "none"; // Remove a transição para resetar sem efeito
                bannerContainer.style.transform = `translateX(0)`;
                currentIndex = 0;
            }, 1000); // Espera a animação terminar antes de resetar
        }
    }

    // Deslizar automaticamente
    setInterval(slideBanner, 4000); // Troca de imagem a cada 4 segundos
});

document.addEventListener("DOMContentLoaded", function () {
    // Abrir o modal
    window.abrirModal = function(modalId) {
        document.getElementById(modalId).style.display = "block";
    };

    // Fechar o modal
    window.fecharModal = function(modalId) {
        document.getElementById(modalId).style.display = "none";
    };

    // Fechar modal ao clicar fora da janela
    window.onclick = function(event) {
        if (event.target.className === "modal") {
            event.target.style.display = "none";
        }
    };
});
