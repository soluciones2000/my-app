import React, { useState, useEffect } from 'react';
// import { registro } from '../funciones/consultas';

const URL = 'https://app.cash-flag.com/apis/expo/insertadatos'

const Campo = ({etiqueta, valor, change}) => {
   return (
      <div
         className="campos"
         style={{
            width: '100%',
            marginBottom: '10px',
            display: 'flex',
         }}
      >
         <div style={{width: '50%', textAlign: 'left'}}>
            <label 
               htmlFor={valor}
            >
               {etiqueta}
            </label>
         </div>
         <input 
            type="text"
            value={valor}
            style={{width: '50%'}}
            onChange={(ex) => { change(ex.target.value) }} 
         />
      </div>
   )
}

const CampoNumero = ({etiqueta, valor, change}) => {
   return (
      <div
         className="campos"
         style={{
            width: '100%',
            marginBottom: '10px',
            display: 'flex',
         }}
      >
         <div style={{width: '50%', textAlign: 'left'}}>
            <label 
               htmlFor={valor}
            >
               {etiqueta}
            </label>
         </div>
         <input 
            type="number"
            value={valor}
            min={0}
            style={{width: '50%'}}
            onChange={(ex) => { change(ex.target.value) }} 
         />
      </div>
   )
}

const SeleccionSector = ({etiqueta, valor, change}) => {
   return (
      <div
         className="campos"
         style={{
            width: '100%',
            marginBottom: '10px',
            display: 'flex',
         }}
      >
         <div style={{width: '50%', textAlign: 'left'}}>
            <label 
               htmlFor={valor}
            >
               {etiqueta}
            </label>
         </div>
         <select 
            // id={valor}
            type="text"
            value={valor}
            // placeholder={valor}
            style={{width: '50%'}}
            onChange={(ex) => { change(ex.target.value) }} 
         >
            <option value="ninguno">Seleccione</option>
            <option value="Alimentos">Alimentos</option>
            <option value="Artes gráficas">Artes gráficas</option>
            <option value="Calzado y Textil">Calzado y Textil</option>
            <option value="Construcción y Madera">Construcción y Madera</option>
            <option value="Eléctrico">Eléctrico</option>
            <option value="Manufactura">Manufactura</option>
            <option value="Metalmecánico">Metalmecánico</option>
            <option value="Plástico">Plástico</option>
            <option value="Químico">Químico</option>
            <option value="Servicios">Servicios</option>
            <option value="Tecnología y Nuevas Tendencias">Tecnología y Nuevas Tendencias</option>
         </select>
      </div>
   )
}


const SeleccionStatus = ({etiqueta, valor, change}) => {
   return (
      <div
         className="campos"
         style={{
            width: '100%',
            marginBottom: '10px',
            display: 'flex',
         }}
      >
         <div style={{width: '50%', textAlign: 'left'}}>
            <label 
               htmlFor={valor}
            >
               {etiqueta}
            </label>
         </div>
         <select 
            // id={valor}
            type="text"
            value={valor}
            // placeholder={valor}
            style={{width: '50%'}}
            onChange={(ex) => { change(ex.target.value) }} 
         >
            <option value="ninguno">Seleccione</option>
            <option value="Reservado">Reservado</option>
            <option value="Vendido">Vendido</option>
         </select>
      </div>
   )
}


export default function Formulario() {
   const [nombre, setNombre] = useState('');
   const [telefono, setTelefono] = useState('');
   const [correo, setCorreo] = useState('');
   const [empresa, setEmpresa] = useState('');
   const [rif, setRif] = useState('');
   const [sector, setSector] = useState('ninguno');
   const [camara, setCamara] = useState('');
   const [stand, setStand] = useState(0);
   const [status_stand, setStatus_Stand] = useState('ninguno');
   const [vendedor, setVendedor] = useState('');
   const [comentarios, setComentarios] = useState('');

   const [ancho, setAncho] = useState(window.innerWidth);

   useEffect(() => {
      window.addEventListener('resize', () => {
         setAncho(window.innerWidth);
      });
   },[ancho]);
   
   return (
      <>
         <img 
            src="https://app.cash-flag.com/expo/img/logoexpoblanco.png" 
            alt="Logo Expo" 
            style={
               ancho > 800 ? {
                  marginTop: '10px',
                  width: '40%'
               } : {
                  marginTop: '10px',
                  width: '80%'
               }
            }
         />
         <h1 style={{margin: '0'}}>Registro de stands</h1>
         <div
            className="container"
            style={
               ancho > 800 ? {
                  background: "lightgray",
                  width: '40%',
                  margin: '10px auto',
                  padding: '20px',
                  borderRadius: '10px',
                  boxShadow: '0px 0px 10px #000'
               } : {
                  background: "lightgray",
                  width: '80%',
                  margin: '10px auto',
                  padding: '20px',
                  borderRadius: '10px',
                  boxShadow: '0px 0px 10px #000'
               }
            }
         >
            <Campo etiqueta="Nombre" valor={nombre} change={setNombre} />
            <Campo etiqueta="Teléfono" valor={telefono} change={setTelefono} />
            <Campo etiqueta="Correo" valor={correo} change={setCorreo} />
            <Campo etiqueta="Empresa" valor={empresa} change={setEmpresa} />
            <Campo etiqueta="R.I.F." valor={rif} change={setRif} />
            <SeleccionSector etiqueta="Sector" valor={sector} change={setSector} />
            <Campo etiqueta="Cámara" valor={camara} change={setCamara} />
            <CampoNumero etiqueta="Stand" valor={stand} change={setStand} />
            <SeleccionStatus etiqueta="Status Stand" valor={status_stand} change={setStatus_Stand} />
            <Campo etiqueta="Vendedor" valor={vendedor} change={setVendedor} />
            <Campo etiqueta="Comentarios" valor={comentarios} change={setComentarios} />

            <div className='botones' style={{ textAlign: 'right'}}>
               <button
                  style={{ borderRadius: '5px'}}
                  onClick={() => {
                     let data = new FormData();

                     data.append("nombre",       nombre);
                     data.append("telefono",     telefono);
                     data.append("correo",       correo);
                     data.append("empresa",      empresa);
                     data.append("rif",          rif);
                     data.append("sector",       sector);
                     // data.append("logo",         logo);
                     data.append("camara",       camara);
                     data.append("stand",        stand);
                     data.append("status_stand", status_stand);
                     data.append("vendedor",     vendedor);
                     data.append("comentarios",  comentarios);
                  
                     fetch(URL, {
                        method: 'POST',
                        body: data
                     })
                     .then((response) => response.json())
                     .then((responseData) => {
                        console.log(responseData);
                        alert(responseData.mensaje);
                        if (responseData.exito==="SI") {
                           setNombre('');
                           setTelefono('');
                           setCorreo('');
                           setEmpresa('');
                           setRif('');
                           setSector('ninguno');
                           setCamara('');
                           setStand(0);
                           setStatus_Stand('ninguno');
                           setVendedor('');
                           setComentarios('');
                        }
                     });
                  }}
               >
                  Guardar
               </button>
            </div>
         </div>
      </>
   )
} 
