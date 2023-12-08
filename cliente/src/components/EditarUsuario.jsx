import axios from 'axios';
import React,{useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
const EditarUsuario = () => {
  const params = useParams()
  const navegar = useNavigate()
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')

  useEffect(() => {
      axios.post(`https://crud-mern-o0u8.onrender.com/obtenerdatos/${params._id}`)
        .then(res => {
          const datosUsuario = res.data
          setNombre(datosUsuario.nombre)
          setEmail(datosUsuario.email)
          setTelefono(datosUsuario.telefono)
        })
        .catch(err => {
          console.log(err);
        });
    },[params._id]);
    
    /* Actualizar los datos del usuario */
    const editarUsuario=() =>{
      const actualizarUsuario ={
        nombre: nombre,
        email: email,
        telefono: telefono
      }
      Swal.fire({
        title: "Quieres guardar los cambios?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Guardar",
        denyButtonText: `No guardar`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Cambios realizados", "", "success");
          axios.post(`https://crud-mern-o0u8.onrender.com/actualizarusuario/${params._id}`, actualizarUsuario)
      .then(res =>{
        console.log(res.data)
        navegar('/')
      })
      .catch((error) => {console.log(error)});
        } else if (result.isDenied) {
          Swal.fire("Los cambios no fueron guardados", "", "info");
        }
      });
    }
  return(
    <div className='container'>
      <div className="row">
          <h2 className='mt-4'>Editar usuario</h2>
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
          <button onClick={editarUsuario} className='btn btn-success'>Editar usuario</button>
        </div>
      </div>
		</div>
  )
}

export { EditarUsuario }