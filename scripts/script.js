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

    // Banner com deslize automático e manual
    let currentIndex = 0;
    const images = document.querySelectorAll("#banner .banner-images img");
    const totalImages = images.length;
    const bannerContainer = document.querySelector(".banner-images");

    function slideBanner() {
        currentIndex = (currentIndex + 1) % totalImages;
        updateBannerPosition();
    }

    function updateBannerPosition() {
        const offset = -currentIndex * 100;
        bannerContainer.style.transform = `translateX(${offset}%)`;
    }

    // Deslizar automaticamente
    setInterval(slideBanner, 4000); // Troca de imagem a cada 4 segundos

    // Navegação manual (clicando nas imagens do banner)
    images.forEach((img, index) => {
        img.addEventListener("click", () => {
            currentIndex = index;
            updateBannerPosition();
        });
    });
});
