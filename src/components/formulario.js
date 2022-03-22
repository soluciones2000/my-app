import React, { useState } from 'react';
import { registro } from '../funciones/consultas';

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
            // id={valor}
            type="text"
            value={valor}
            // placeholder={valor}
            style={{width: '50%'}}
            onChange={(ex) => { change(ex.target.value) }} 
         />
      </div>
   )
}

const Seleccion = ({etiqueta, valor, change}) => {
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
            <option value="empresario">Empresario</option>
            <option value="visitante">Visitante</option>
            <option value="empleado">Empleado</option>
         </select>
      </div>
   )
}

export default function Formulario() {
   const [nombres, setNombres] = useState('');
   const [apellidos, setApellidos] = useState('');
   const [edad, setEdad] = useState(null);
   const [telefono, setTelefono] = useState('');
   const [correo, setCorreo] = useState('');
   const [clase, setClase] = useState('ninguno');
   
   return (
      <>
         <h1>Registro de participantes</h1>
         <div
            className="container"
            style={{
               background: "lightgray",
               width: '40%',
               margin: '10px auto',
               padding: '20px',
               borderRadius: '10px',
               boxShadow: '0px 0px 10px #000'
            }}
         >
            <Campo etiqueta="Nombres" valor={nombres} change={setNombres} />
            <Campo etiqueta="Apellidos" valor={apellidos} change={setApellidos} />
            <Campo etiqueta="Edad" valor={edad} change={setEdad} />
            <Campo etiqueta="Teléfono" valor={telefono} change={setTelefono} />
            <Campo etiqueta="Correo" valor={correo} change={setCorreo} />
            <Seleccion etiqueta="Clasificacion" valor={clase} change={setClase} />
            <div className='botones' style={{ textAlign: 'right'}}>
               <button
                  style={{ borderRadius: '5px'}}
                  onClick={() => {
                     registro({ nombres, apellidos, edad, telefono, correo, clase })
                  }}
               >
                  Guardar
               </button>
            </div>
         </div>
      </>
   )
} 
