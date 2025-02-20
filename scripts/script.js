document.addEventListener("DOMContentLoaded", function () {
    console.log("Script carregado!");

    // Carrossel automático
    let index = 0;
    const carrossel = document.querySelector(".carrossel");
    const imagens = ["/images/img1.jpg", "/images/img2.jpg", "/images/img3.jpg"]; // Caminho das imagens

    imagens.forEach((src) => {
        let img = document.createElement("img");
        img.src = src;
        img.alt = "Imagem do carrossel";
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover";
        img.style.flexShrink = "0"; // Evitar que a imagem encolha
        carrossel.appendChild(img);
    });

    // Função para atualizar o carrossel
    function atualizarCarrossel() {
        const totalImagens = imagens.length;
        index = (index + 1) % totalImagens;
        carrossel.style.transform = `translateX(-${index * 100}%)`; // Mover as imagens para a esquerda
        carrossel.style.transition = "transform 1s ease-in-out"; // Efeito suave
    }

    // Atualiza a cada 3 segundos
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
