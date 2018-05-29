//La sigt fct se ejecutara despues de
//que haya cargado todo el DOM.

function cambiaColor (){
    //guardamos en la variable nuevoColor
    //el valor del selectorColores
    let nuevoColor = $('#selectorColores').val();

    //usamos la funcion css() del selector body para
    //definir el color de fondo del body
    $('body').css('background-color' , nuevoColor);

}//fct cambiaColor

function hazAlgo(){
    //asignamos la funcion cambiaColor a 
    //la funcion change del selectorColores.
    $('#selectorColores').change(cambiaColor);

    //definimos el fondo del body por defecto
    $('body').css('background-color' , $('#selectorColores').val() );
    
    //pasamos al evento click del button la fct muestraSelectorColores
    $('button').click(muestraSelectorColores);

}//fct hazAlgo


//pasamos la funcion hazAlgo como argumento
//a la funcion ready del selector de document.

$('document').ready(hazAlgo);
