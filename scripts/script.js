document.addEventListener("DOMContentLoaded", function () {
    console.log("Script carregado!");

    // Carrossel automático
    let index = 0;
    const carrossel = document.querySelector(".carrossel");
    const imagens = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg"]; // Caminho das imagens

    // Ajusta a largura do carrossel com base na quantidade de imagens
    carrossel.style.width = `${100 * imagens.length}%`; // 100% por imagem

    imagens.forEach((src) => {
        let img = document.createElement("img");
        img.src = `/${src}`; // Caminho correto para acessar as imagens dentro de 'public/images'
        img.alt = "Imagem do carrossel";
        carrossel.appendChild(img);
    });

    // Função para atualizar o carrossel
    function atualizarCarrossel() {
        const totalImagens = imagens.length;
        index = (index + 1) % totalImagens;
        carrossel.style.transform = `translateX(-${index * 100}%)`; // Move o carrossel para a esquerda
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
