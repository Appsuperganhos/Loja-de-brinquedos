document.addEventListener("DOMContentLoaded", function () {
    console.log("Script carregado!");

    // Carrossel automático
    let index = 0;
    const carrossel = document.querySelector(".carrossel");
    const imagens = ["public/images/img1.jpg", "public/images/img2.jpg", "public/images/img3.jpg"]; // Agora carregando imagens da pasta correta

    imagens.forEach((src) => {
        let img = new Image();
        img.src = src;
    });

    function atualizarCarrossel() {
        carrossel.style.transform = `translateX(-${index * 100}%)`;
        carrossel.style.transition = "transform 1s ease-in-out";
    }

    function avancarCarrossel() {
        index = (index + 1) % imagens.length;
        atualizarCarrossel();
    }

    setInterval(avancarCarrossel, 3000);
    atualizarCarrossel();

    // Configuração do botão de WhatsApp
    document.querySelectorAll(".botao-whatsapp").forEach(botao => {
        botao.addEventListener("click", function () {
            const numero = "5588999999999"; // Substituir pelo número real
            const mensagem = encodeURIComponent("Olá, estou interessado no carrinho elétrico!");
            window.open(`https://wa.me/${numero}?text=${mensagem}`, "_blank");
        });
    });

    // Configuração do menu hamburguer
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});
