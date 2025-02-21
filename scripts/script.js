document.addEventListener("DOMContentLoaded", function () {
  console.log("Script carregado!");

  // Configuração do menu hambúrguer
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector("nav ul");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("active");
  });

  // Banner com deslize infinito
  const bannerContainer = document.querySelector(".banner-images");
  let images = document.querySelectorAll("#banner .banner-images img");
  let currentIndex = 0;
  const totalImages = images.length;

  // Clona a primeira imagem para criar o loop
  const firstImageClone = images[0].cloneNode(true);
  bannerContainer.appendChild(firstImageClone);

  function slideBanner() {
    currentIndex++;
    bannerContainer.style.transition = "transform 1s ease-in-out";
    bannerContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

    if (currentIndex === totalImages) {
      setTimeout(() => {
        bannerContainer.style.transition = "none";
        bannerContainer.style.transform = `translateX(0)`;
        currentIndex = 0;
      }, 1000);
    }
  }

  setInterval(slideBanner, 4000);

  // Configuração do modal para detalhes dos produtos
  document.querySelectorAll(".btn-detalhes").forEach(button => {
    button.addEventListener("click", function (e) {
      // Obtém os dados do produto a partir do cartão
      const produto = e.target.closest(".produto");
      const title = produto.querySelector("h3").innerText;
      const description = produto.getAttribute("data-description") || "Descrição não disponível.";
      const payment = produto.getAttribute("data-payment") || "Formas de pagamento não informadas.";
      const whatsappMsg = produto.getAttribute("data-whatsapp") || `Olá, quero comprar o ${title}!`;
      const mainImage = produto.querySelector("img").getAttribute("src");

      // Obtém imagens extras para o carrossel, se houver
      let images = [];
      const dataImages = produto.getAttribute("data-images");
      if (dataImages) {
        images = dataImages.split(",");
      } else {
        images.push(mainImage);
      }

      // Popula o modal com os dados do produto
      const modal = document.getElementById("product-modal");
      modal.querySelector(".modal-title").innerText = title;
      modal.querySelector(".modal-description").innerText = description;
      modal.querySelector(".modal-payment").innerText = payment;
      modal.querySelector(".modal-whatsapp").setAttribute("href", `https://wa.me/5588999999999?text=${encodeURIComponent(whatsappMsg)}`);

      // Popula o carrossel do modal
      const carouselWrapper = modal.querySelector(".modal-carousel-wrapper");
      carouselWrapper.innerHTML = ""; // Limpa imagens anteriores
      images.forEach(src => {
        const img = document.createElement("img");
        img.src = src.trim();
        carouselWrapper.appendChild(img);
      });
      // Reinicia o índice do carrossel
      modal.setAttribute("data-current-index", "0");
      carouselWrapper.style.transform = `translateX(0)`;

      // Exibe o modal
      modal.style.display = "block";
    });
  });

  // Fechar modal ao clicar no "X"
  document.querySelector(".modal-close").addEventListener("click", function () {
    document.getElementById("product-modal").style.display = "none";
  });

  // Fechar modal ao clicar fora do conteúdo
  window.addEventListener("click", function (event) {
    const modal = document.getElementById("product-modal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  // Navegação do carrossel dentro do modal
  document.querySelector(".carousel-prev").addEventListener("click", function () {
    const modal = document.getElementById("product-modal");
    const carouselWrapper = modal.querySelector(".modal-carousel-wrapper");
    const images = carouselWrapper.querySelectorAll("img");
    let currentIndex = parseInt(modal.getAttribute("data-current-index"));
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    modal.setAttribute("data-current-index", currentIndex.toString());
    carouselWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  });

  document.querySelector(".carousel-next").addEventListener("click", function () {
    const modal = document.getElementById("product-modal");
    const carouselWrapper = modal.querySelector(".modal-carousel-wrapper");
    const images = carouselWrapper.querySelectorAll("img");
    let currentIndex = parseInt(modal.getAttribute("data-current-index"));
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    modal.setAttribute("data-current-index", currentIndex.toString());
    carouselWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  });
});
