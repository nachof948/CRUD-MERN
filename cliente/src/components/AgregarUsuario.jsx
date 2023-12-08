import React, {useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
const AgregarUsuario = () => {
  
  const navegar = useNavigate()
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')


  const agregarUsuario= async(e)=>{
    e.preventDefault()
    const usuario = {
      nombre: nombre,
      email: email,
      telefono: telefono
    }
    console.log(usuario)

    await axios.post('https://crud-mern-o0u8.onrender.com/agregarusuario', usuario)
    .then(res => {
      //alert(res.data)
      Swal.fire({
        title: "El usuario fue agregado!",
        text: `${res.data}`,
        icon: "success"
      });
      navegar('/')
    })
    .then(error =>{
      console.log(error)
    })
  }
  
  return(
    <div className='container'>
      <div className="row ">
          <h2 className='mt-4  mt-5 pt-5'>Agregar un usuario</h2>
      </div>
			<div className="row">
        <div className="col-sm-6 offset-3">
          <div className="mb-3">
            <label htmlFor="nombre" className='form-label '>Nombre</label>
            <input type="text" 
            className='form-control'
            value={nombre} 
            onChange={(e)=> {setNombre(e.target.value)}} 
            placeholder='Nombre' />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className='form-label'>Email</label>
            <input type="email" 
            className='form-control' 
            value={email}
            onChange={(e)=> {setEmail(e.target.value)}} 
            placeholder='Email' />
          </div>
          <div className="mb-3">
            <label htmlFor="telefono" className='form-label'>Telefono</label>
            <input type="text" 
            className='form-control' 
            value={telefono}
            onChange={(e)=> {setTelefono(e.target.value)}}
            placeholder='Telefono' />
          </div>
          <button onClick={agregarUsuario} className='btn btn-success'>Agregar usuario</button>
        </div>
      </div>
		</div>
  )
}

export { AgregarUsuario }