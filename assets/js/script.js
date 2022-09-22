// Buscando o elemento onde vamos aplicar a função

let classImgClube = document.getElementsByClassName("team");

// Executando a função por segundo para caso aja alteração no width do usuário

setInterval(function captureScreen() {
  // Verificando o valor da largura atual do usuário
  let widthMobile = window.screen.width;

  // Caso retornar 425px ou menos, vai deixar alterar a tela para padrão mobile, caso seja maior,será padrão tablet/desktop
  if (widthMobile < 425) {
    for (i = classImgClube.length - 1; i >= 0; i--) {
      classImgClube[i].classList.remove("w-50");
      classImgClube[i].setAttribute("height", "250");
    }
  } else {
    for (i = classImgClube.length - 1; i >= 0; i--) {
      classImgClube[i].classList.add("w-50");
      classImgClube[i].setAttribute("height", "500");
    }
  }
}, 1000);

// Função nativa do bootstrap para o envio do formulário

(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
