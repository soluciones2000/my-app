const URL = 'https://app.cash-flag.com/apis/pruebas/insertadatos'

export function registro(datos) {
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