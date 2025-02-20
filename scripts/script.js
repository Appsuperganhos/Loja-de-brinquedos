document.addEventListener("DOMContentLoaded", function () {
    console.log("Script carregado!");

    // Carrossel automático
    let index = 0;
    const carrossel = document.querySelector(".carrossel");
    const imagens = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg"]; // Caminho das imagens

    // Adiciona as imagens ao carrossel
    imagens.forEach((src) => {
        let img = document.createElement("img");
        img.src = `/${src}`;
        img.alt = "Imagem do carrossel";
        carrossel.appendChild(img);
    });

    // Função para atualizar o carrossel
    function atualizarCarrossel() {
        index = (index + 1) % imagens.length; // Loop entre as imagens
        carrossel.style.transform = `translateX(-${index * 100}vw)`; // Move o carrossel para a esquerda
    }

    // Alterna imagens a cada 3 segundos
    setInterval(atualizarCarrossel, 3000);
});
