document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("mostrarMapa");
    const contenedor = document.getElementById("contenedorMapa");
  
    boton.addEventListener("click", function () {
      const iframe = document.createElement("iframe");
      iframe.src =
        "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d48652.82354952362!2d-74.65516891150001!3d40.34674983669023!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDIwJzQ4LjMiTiA3NMKwMzknMTguNiJX!5e0!3m2!1sen!2sar!4v1751456472808!5m2!1sen!2sar";
      iframe.className = "maps";
      iframe.allowFullscreen = true;
      iframe.loading = "lazy";
      iframe.referrerPolicy = "no-referrer-when-downgrade";
  
      contenedor.appendChild(iframe);
      boton.style.display = "none";
    });
  });