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

    // Configuração do banner para deslizar automaticamente
    const banners = document.querySelectorAll(".banner-image");
    const wrapper = document.querySelector(".banner-wrapper");
    let currentIndex = 0;
    const totalBanners = banners.length;

    function changeBanner() {
        // Desloca as imagens para a esquerda
        wrapper.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`;

        // Atualiza o índice do banner
        currentIndex = (currentIndex + 1) % totalBanners;  // Loop infinito
    }

    // Inicializa a animação de mudança de banner
    setInterval(changeBanner, 3000); // Troca a cada 3 segundos
});
