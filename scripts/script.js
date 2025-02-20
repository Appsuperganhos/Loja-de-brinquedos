document.addEventListener("DOMContentLoaded", function () {
    console.log("Script carregado!");

    // Carrossel automático
    let index = 0;
    const carrossel = document.querySelector(".carrossel");
    const imagens = ["public/images/img1.jpg", "images/img2.jpg", "images/img3.jpg"]; // Caminho das imagens dentro da pasta 'images'

    // Ajusta a largura do carrossel com base na quantidade de imagens
    carrossel.style.width = `${100 * imagens.length}%`; // 100% por imagem

    imagens.forEach((src) => {
        let img = document.createElement("img");
        img.src = `/public/${src}`; // Caminho absoluto para as imagens, que estará acessível a partir da raiz do site
        img.alt = "Imagem do carrossel";
        img.style.width = "100%"; // A imagem vai ter 100% da largura da tela
        img.style.height = "50vh"; // A altura será 50% da altura da tela
        img.style.objectFit = "cover"; // Garante que a imagem se ajuste bem
        img.style.flexShrink = "0"; // Impede que as imagens encolham
        carrossel.appendChild(img);
    });

    // Função para atualizar o carrossel
    function atualizarCarrossel() {
        const totalImagens = imagens.length;
        index = (index + 1) % totalImagens;
        carrossel.style.transform = `translateX(-${index * 100}%)`; // Move o carrossel para a esquerda
        carrossel.style.transition = "transform 1s ease-in-out"; // Transição suave
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
