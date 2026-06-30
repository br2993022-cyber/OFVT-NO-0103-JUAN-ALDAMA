
// MENU LATERAL
function toggleMenu(){
  document.getElementById('sidebar').classList.toggle('open');
}

// MAPA DE BUSQUEDA
const pages = {
  'acerca':'acerca.html',
  'mision':'mision.html',
  'vision':'mision.html',
  'objetivo':'mision.html',
  'titular':'titular.html',
  'contacto':'contacto.html',
  'oferta':'oferta.html',
  'noticias':'noticias.html',
  'avisos':'noticias.html',
  'politicas':'politicas.html',
  'reglamentos':'politicas.html',
  'juan aldama':'index.html',
  'escuela':'acerca.html',
  'imagenes':'galeria.html',
  'historia':'historia.html',
  'infraestructura':'infraestructura.html',
  'eventos':'eventos.html',
  'docentes':'docentes.html',
  'participacion':'participacion.html',
  'comunidad':'participacion.html'
};

// BUSCAR
function buscar(){
  let q = document.getElementById('buscar').value.toLowerCase().trim();

  if(!q){
    alert('Escribe algo');
    return;
  }

  let best = null;

  for(let k in pages){
    if(q.includes(k)){
      best = pages[k];
      break;
    }
  }

  if(best){
    window.location.href = best;
  }else{
    alert('No encontrado. Prueba: noticias, contacto, historia, oferta');
  }
}

// ABRIR IMAGEN
function openImg(src){
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox").classList.add("show");
}

// CERRAR IMAGEN
function closeImg(){
  document.getElementById("lightbox").classList.remove("show");
}