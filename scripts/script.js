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

    function slideBanner() {
        currentIndex = (currentIndex + 1) % totalImages;
        const offset = -currentIndex * 100;
        document.querySelector(".banner-images").style.transform = `translateX(${offset}%)`;
    }

    // Deslizar automaticamente
    setInterval(slideBanner, 3000); // Troca de imagem a cada 3 segundos

    // Navegação manual (clicando nas imagens do banner)
    document.querySelectorAll(".banner-images img").forEach((img, index) => {
        img.addEventListener("click", () => {
            currentIndex = index;
            const offset = -currentIndex * 100;
            document.querySelector(".banner-images").style.transform = `translateX(${offset}%)`;
        });
    });
});
