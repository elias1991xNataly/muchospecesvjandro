var imagenes = ['imagenes/IMG_20231023_175757.jpg', 'imagenes/IMG_20231023_180102.jpg', 'imagenes/IMG_20231023_180857.jpg']
cont = 0;


function carrousel(contenedor) {
    contenedor.addEventListener('click', e => {
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            imagen=contenedor.querySelector('img'),
            tgt=e.target;

            if (tgt==atras) {
                if(cont > 0){
                   imagen.src=imagenes[cont - 1];
                   cont--; 
                }else{
                    imagen.src=imagenes[imagenes.length-1];
                    cont = imagenes.length - 1 ;
                }

            } else if(tgt==adelante){
                if(cont < imagenes.length - 1){
                    imagen.src=imagenes[cont + 1];
                    cont++; 
                 }else{
                     imagen.src=imagenes[0];
                     cont = 0;
                 }
            }
    });
}


document.addEventListener("DOMContentLoaded",()=>{
let contenedor=document.querySelector('.contenedor');

carrousel(contenedor);
});

