document.addEventListener("DOMContentLoaded", () => {
    let encriptar = document.querySelector("#btn-encriptar");
    let desencriptar = document.querySelector("#btn-desencriptar");
    let encripPref = "*"; // Definimos un prefijo para el texto encriptado
    const resultadoDesencriptadoDiv = document.querySelector(
      "#resultado-desencriptadoDiv"
    );
    const resultadoDesencriptado = document.querySelector(
      "#resultado-desencriptado"
    );
    const img_munieco = document.querySelector("#img-munieco");
    const titulo_nomensaje = document.querySelector("#titulo-nomensaje");
    const texto_nomensaje = document.querySelector("#texto-nomensaje");
    const btnCopiar = document.querySelector("#btn-copiar");
  
    // Función para encriptar el texto
    function encriptarTexto(texto) {
      // Convertir el texto a un array de caracteres
      let caracs = texto.split("");
      // Reordenar las letras de lugar para la encriptacion
      let encriptado = caracs.reverse().join("");
      // Sumamos el prefijo delante del texto encriptado
      return encripPref + encriptado;
    }
  
    // Funcion para desencriptar el texto
    function desencriptarTexto(texto) {
      /* Si el texto comienza con el prefijo de encriptacion
      realiza el proceso de desencriptado, pero sino, devuelve
      el mismo texto, porque ya esta desencriptado */
      if (texto.startsWith(encripPref)) {
        // Convertir el texto a un array de caracteres y eliminamos el prefijo de encriptacion
        let caracs = texto.substring(encripPref.length).split("");
        // Revertir el reordenamiento hecho en la funcion de encriptar
        let desencriptado = caracs.reverse().join("");
        return desencriptado;
      } else {
        return alert("El texto esta desencriptado!"); // El texto no esta encriptado y devuelve el mismo texto
      }
    }
  
    encriptar.addEventListener("click", () => {
      let textoEncriptar = document.querySelector("#encriptar").value;
      if (textoEncriptar.startsWith(encripPref)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "El texto ya esta encriptado!",
        });
      } else {
        let textoEncriptado = encriptarTexto(textoEncriptar);
        resultadoDesencriptado.innerHTML = textoEncriptado;
        img_munieco.style.display = "none";
        titulo_nomensaje.style.display = "none";
        texto_nomensaje.style.display = "none";
        resultadoDesencriptadoDiv.style.display = "flex";
      }
    });
  
    desencriptar.addEventListener("click", () => {
      let textoDesencriptar = document.querySelector("#encriptar").value;
      if (!textoDesencriptar.startsWith(encripPref)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "El texto ya esta desencriptado!",
        });
      } else {
        let textoDesencriptado = desencriptarTexto(textoDesencriptar);
        resultadoDesencriptado.innerHTML = textoDesencriptado;
        img_munieco.style.display = "none";
        titulo_nomensaje.style.display = "none";
        texto_nomensaje.style.display = "none";
        resultadoDesencriptadoDiv.style.display = "flex";
      }
    });
  
    btnCopiar.addEventListener("click", () => {
      // Copiamos el texto al portapapeles
      let texto = resultadoDesencriptado.innerText;
      navigator.clipboard
        .writeText(texto)
        .then(() => {
          // Copiamos el texto y lanzamos un mensaje
          Swal.fire({
            title: "Copia exitosa!",
            text: "Texto copiado en el portapapeles!",
            icon: "success",
          });
        })
        .catch((error) => {
          // Si surgio algun problema, se lo informamos al usuario
          alert("Error al copiar el texto: ", error);
        });
    });
  });
  