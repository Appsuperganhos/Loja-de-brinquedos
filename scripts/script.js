document.addEventListener("DOMContentLoaded", function () {
    console.log("Script carregado!");

    // Carrossel automático
    let index = 0;
    const carrossel = document.querySelector(".carrossel");
    const imagens = ["public/images/img1.jpg", "public/images/img2.jpg", "public/images/img3.jpg"];

    imagens.forEach((src) => {
        let img = document.createElement("img");
        img.src = src;
        img.alt = "Imagem do carrossel";
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover";
        img.style.flexShrink = "0";
        carrossel.appendChild(img);
    });

    function atualizarCarrossel() {
        const totalImagens = imagens.length;
        index = (index + 1) % totalImagens;
        carrossel.style.transform = `translateX(-${index * 100}%)`;
        carrossel.style.transition = "transform 1s ease-in-out";
    }

    setInterval(atualizarCarrossel, 3000);

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
