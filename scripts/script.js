document.addEventListener("DOMContentLoaded", function () {
  console.log("Script carregado!");

  // Configuração do menu hambúrguer (menu principal)
  const menuToggle = document.querySelector(".menu-toggle");
  const menuMain = document.querySelector(".menu-main");

  if (menuToggle && menuMain) {
    menuToggle.addEventListener("click", function () {
      menuMain.classList.toggle("active");
    });
  }

  // Toggle do submenu "Produtos"
  const produtosLink = document.querySelector(".menu-item-produtos > a");
  const submenu = document.querySelector(".submenu");

  if (produtosLink && submenu) {
    produtosLink.addEventListener("click", function (e) {
      e.preventDefault();
      submenu.classList.toggle("active");
    });
  }

  // Banner com deslize infinito (conforme o código original)
  const bannerContainer = document.querySelector(".banner-images");
  let bannerImages = document.querySelectorAll("#banner .banner-images img");
  let currentIndex = 0;
  const totalImages = bannerImages.length;

  if (bannerImages.length > 0) {
    const firstImageClone = bannerImages[0].cloneNode(true);
    bannerContainer.appendChild(firstImageClone);
  }

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

  // **** Geração dinâmica dos cartões na seção "TODOS OS ITENS" ****

  // Seleciona o contêiner onde os produtos serão inseridos
  const produtosWrapper = document.querySelector("#todos-itens .produtos-wrapper");
  const totalProdutos = 37; // Total de cartões a serem gerados

  for (let i = 1; i <= totalProdutos; i++) {
    const produtoDiv = document.createElement("div");
    produtoDiv.className = "produto";
    let title, price, payment, description, images, whatsapp, altText;
    
    if (i === 1) {
      // Primeiro produto com dados originais
      title = "Jeep Wrangler Rubicon 12V";
      price = "R$ 2.999,00";
      payment = "10X de R$299,00 S/juros • Cartão, Pix e Boleto disponíveis";
      description = "LINHA CLÁSSICA\nCARRINHO ELÉTRICO INFANTIL\nJIPE OFF ROAD 12V\nNOVO - COM GARANTIA\nPREÇO: 10x 299,00 S/JUROS\n\nINCLUI: Controle remoto e carregador\n\nBRINDES EXCLUSIVOS:\nCNH Infantil\nDocumento do carrinho\n\nESPECIFICAÇÕES:\nVoltagem: 12V\nAssento: 1\nTempo de carga: 8 a 12 horas\nCapacidade máxima: 40 kg\nMotores: 2 (4x2)\nVelocidade: 3 a 5 km/h\nVelocidades manuais: 1\nPortas que abrem: Sim\nBancos: Plástico\nPneus: Plástico\nCinto de segurança: Sim\nBuzina no volante: Sim\nSistema de som: Sim\n\n*Conectividade:*\nPen-drive: Sim\nCartão de memória: Não\nCabo Auxiliar: Não\nBluetooth: Sim\nLiga/Desliga: Botão start-stop\nPainel iluminado: Não\nFaróis: Sim\nLanternas: Não\n\nDIMENSÕES:\nAltura: 72 cm\nLargura: 61 cm\nComprimento: 100 cm";
      images = "public/images/carro1.jpg,public/images/carro1_1.jpg,public/images/carro1_2.jpg,public/images/carro1_3.jpg,public/images/carro1_4.jpg,public/images/carro1_5.jpg";
      whatsapp = "Olá, quero mais informações sobre o Jeep Wrangler Rubicon 12V!";
      altText = "Jeep Wrangler Rubicon 12V";
    } else {
      // Produtos 2 até 37 com dados genéricos
      title = "Produto " + i;
      price = "R$ 2.999,00";
      payment = "10X de R$299,00 S/juros • Cartão, Pix e Boleto disponíveis";
      description = "LINHA CLÁSSICA\nCARRINHO ELÉTRICO INFANTIL\n" + title + "\nNOVO - COM GARANTIA\nPREÇO: 10x 299,00 S/JUROS\n\nINCLUI: Controle remoto e carregador\n\nBRINDES EXCLUSIVOS:\nCNH Infantil\nDocumento do carrinho\n\nESPECIFICAÇÕES:\nVoltagem: 12V\nAssento: 1\nTempo de carga: 8 a 12 horas\nCapacidade máxima: 40 kg\nMotores: 2 (4x2)\nVelocidade: 3 a 5 km/h\nVelocidades manuais: 1\nPortas que abrem: Sim\nBancos: Plástico\nPneus: Plástico\nCinto de segurança: Sim\nBuzina no volante: Sim\nSistema de som: Sim\n\n*Conectividade:*\nPen-drive: Sim\nCartão de memória: Não\nCabo Auxiliar: Não\nBluetooth: Sim\nLiga/Desliga: Botão start-stop\nPainel iluminado: Não\nFaróis: Sim\nLanternas: Não\n\nDIMENSÕES:\nAltura: 72 cm\nLargura: 61 cm\nComprimento: 100 cm";
      images = "public/images/carro1.jpg,public/images/carro1_1.jpg,public/images/carro1_2.jpg,public/images/carro1_3.jpg,public/images/carro1_4.jpg,public/images/carro1_5.jpg";
      whatsapp = "Olá, quero mais informações sobre o " + title + "!";
      altText = title;
    }
    
    // Define os atributos data- para uso no modal
    produtoDiv.setAttribute("data-description", description);
    produtoDiv.setAttribute("data-payment", payment);
    produtoDiv.setAttribute("data-images", images);
    produtoDiv.setAttribute("data-whatsapp", whatsapp);
    
    // Insere o conteúdo HTML do cartão
    produtoDiv.innerHTML = `
      <img src="public/images/carro1.jpg" alt="${altText}">
      <h3>${title}</h3>
      <p>${price}</p>
      <p>${payment}</p>
      <button class="btn-detalhes">Ver Detalhes</button>
    `;
    
    // Adiciona o cartão ao contêiner
    produtosWrapper.appendChild(produtoDiv);
  }

  // Configuração do modal principal para detalhes dos produtos
  document.querySelectorAll(".btn-detalhes").forEach(button => {
    button.addEventListener("click", function (e) {
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

      const modal = document.getElementById("product-modal");
      modal.querySelector(".modal-title").innerText = title;
      modal.querySelector(".modal-payment").innerText = payment;
      // Armazena a descrição no modal para uso no sub modal
      modal.setAttribute("data-description", description);
      modal.querySelector(".modal-whatsapp").setAttribute("href", `https://wa.me/5588999999999?text=${encodeURIComponent(whatsappMsg)}`);

      const carouselWrapper = modal.querySelector(".modal-carousel-wrapper");
      carouselWrapper.innerHTML = "";
      images.forEach(src => {
        const img = document.createElement("img");
        img.src = src.trim();
        carouselWrapper.appendChild(img);
      });
      modal.setAttribute("data-current-index", "0");
      carouselWrapper.style.transform = `translateX(0)`;

      modal.style.display = "block";
    });
  });

  // Fechar modal principal
  document.querySelector(".modal-close").addEventListener("click", function () {
    document.getElementById("product-modal").style.display = "none";
  });

  window.addEventListener("click", function (event) {
    const modal = document.getElementById("product-modal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Navegação do carrossel no modal principal
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

  // Configuração do botão "Ver Descrição" no modal principal
  document.querySelector(".btn-ver-descricao").addEventListener("click", function () {
    const modal = document.getElementById("product-modal");
    const description = modal.getAttribute("data-description") || "Descrição não disponível.";
    const formattedDescription = description.replace(/\n/g, '<br>');
    const subModal = document.getElementById("description-modal");
    subModal.querySelector(".sub-modal-description").innerHTML = formattedDescription;
    subModal.style.display = "block";
  });

  // Fechar sub modal (descrição)
  document.querySelector(".sub-modal-close").addEventListener("click", function () {
    document.getElementById("description-modal").style.display = "none";
  });

  window.addEventListener("click", function (event) {
    const subModal = document.getElementById("description-modal");
    if (event.target === subModal) {
      subModal.style.display = "none";
    }
  });
});
