const URL = 'https://app.cash-flag.com/apis/expo/insertadatos'

export function registro(datos) {
   let data = new FormData();

   data.append("nombre",       datos.nombre);
   data.append("telefono",     datos.telefono);
   data.append("correo",       datos.correo);
   data.append("empresa",      datos.empresa);
   data.append("rif",          datos.rif);
   data.append("sector",       datos.sector);
   data.append("logo",         datos.logo);
   data.append("camara",       datos.camara);
   data.append("stand",        datos.stand);
   data.append("status_stand", datos.status_stand);
   data.append("vendedor",     datos.vendedor);
   data.append("comentarios",  datos.comentarios);

   fetch(URL, {
      method: 'POST',
      body: data
   })
   .then((response) => response.json())
   .then((responseData) => {
      console.log(responseData);
      alert(responseData.mensaje);
      return responseData.exito;
   });
}

export function registroparticpantes(datos) {
   let data = new FormData();

   console.log(URL);
   console.log('datos', datos);

   data.append("nombres",   datos.nombres);
   data.append("apellidos", datos.apellidos);
   data.append("edad",      datos.edad);
   data.append("telefono",  datos.telefono);
   data.append("correo",    datos.correo);
   data.append("clase",     datos.clase);

   fetch(URL, {
      method: 'POST',
      body: data
   })
   .then((response) => response.json())
   .then((responseData) => {
      console.log('responseData', responseData);
   });
}