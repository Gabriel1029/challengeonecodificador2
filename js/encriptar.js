let texto = document.querySelector(".input-text");
let mensaje = document.querySelector(".input-mensaje");
let botonEncriptar = document.querySelector(".encriptar");
let botonDesEncriptar = document.querySelector(".desencriptar");
let botonCopiar = document.querySelector("#copiar");
let imagen =  document.querySelector("#imagen-de-espera");

mensaje.style.display = 'none';
botonCopiar.style.display = 'none';
//boton para encriptar
botonEncriptar.addEventListener('click', function () {
    
//mostrar imagen
    if (texto.value) {
        imagen.style.display = 'none';
        mensaje.style.display = 'block';
        botonCopiar.style.display = 'block';
    }else{
        imagen.style.display = 'block';
        botonCopiar.style.display = 'none';
        mensaje.style.display = 'none';
    }
    const textoEncriptado = encriptar(texto.value);
    mensaje.value = textoEncriptado;
    texto.value = "";
    

});
//boton para desencriptar
botonDesEncriptar.addEventListener('click', function () {

    const textoDesEncriptado = desencriptar(mensaje.value);
    mensaje.value = textoDesEncriptado;

});
//funcion para encriptar
function encriptar(textoParaEncriptar) {
    let letras = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoParaEncriptar = textoParaEncriptar.toLowerCase();
    for (let i = 0; i < letras.length; i++) {
        if (textoParaEncriptar.includes(letras[i][0])) {
            textoParaEncriptar = textoParaEncriptar.replaceAll(letras[i][0], letras[i][1]);
        }
    }
    return textoParaEncriptar;

}

//funcion para desencriptar
function desencriptar(textoParaDesncriptar) {
    let letras = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    for (let i = 0; i < letras.length; i++) {
        if (textoParaDesncriptar.includes(letras[i][1])) {
            textoParaDesncriptar = textoParaDesncriptar.replaceAll(letras[i][1], letras[i][0]);
        }
    }
    return textoParaDesncriptar;
}
//boton copiar
botonCopiar.addEventListener('click', function () {
    let textoCopiado = mensaje;
    textoCopiado.select();
    document.execCommand("copy");
});

