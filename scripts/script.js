document.addEventListener("DOMContentLoaded", function () {
    console.log("Script carregado!");

    // Definindo as variáveis
    const bannerWrapper = document.querySelector("#banner .banner-wrapper");
    const imagens = document.querySelectorAll("#banner .banner-image");
    let imagemAtual = 0;

    // Função para avançar a imagem do banner
    function avançarBanner() {
        imagemAtual++;
        if (imagemAtual >= imagens.length) {
            imagemAtual = 0; // Volta para a primeira imagem
        }
        bannerWrapper.style.transform = `translateX(-${imagemAtual * 100}%)`;
    }

    // Intervalo para a troca automática de imagens
    setInterval(avançarBanner, 5000); // Troca a cada 5 segundos

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
});
