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

    // Configuração do banner
    let currentIndex = 0;
    const images = document.querySelectorAll("#banner .banner-images img");
    const totalImages = images.length;
    const bannerContainer = document.querySelector(".banner-images");

    function slideBanner() {
        currentIndex = (currentIndex + 1) % totalImages;
        updateBannerPosition();
    }

    function updateBannerPosition() {
        // Ajuste para garantir que a última imagem não cause espaço em branco
        const offset = -currentIndex * 100;
        bannerContainer.style.transform = `translateX(${offset}vw)`;
    }

    // Deslizar automaticamente a cada 4 segundos
    setInterval(slideBanner, 4000);

    // Navegação manual (clicando nas imagens do banner)
    images.forEach((img, index) => {
        img.addEventListener("click", () => {
            currentIndex = index;
            updateBannerPosition();
        });
    });
});
