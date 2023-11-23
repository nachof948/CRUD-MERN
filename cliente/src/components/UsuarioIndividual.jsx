import axios from 'axios';
import React, { useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import AOS from 'aos'
import Swal from 'sweetalert2'
import 'aos/dist/aos.css'


const UsuarioIndividual = ({id, usuario}) => {
  const navegar = useNavigate()

  //Efecto en la animacion al hacer scroll
  useEffect(()=>{
    AOS.init()
  }, [])

  const borrarUsuario = (id)=>{
    Swal.fire({
      title: "Estas seguro?",
      text: "No podras volver atras!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminalo!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`/eliminarusuario/${id}`)
        Swal.fire({
          title: "Eliminado!",
          text: "El usuario se elimino correctamente.",
          icon: "success"
        });
        setTimeout(() => {
          navegar(0);
        }, 1000);
      }
    })
    .catch(err =>{console.log(err)});
    };



  return(
    <div className='container mt-5 pt-4'>
      <div className="row">
        <div className="col-sm-6 offset-3" data-aos="zoom-in">
          <ul className='list-group mb-2'>
            <li className='list-group-item'>{usuario.nombre}</li>
            <li className='list-group-item'>{usuario.email}</li>
            <li className='list-group-item'>{usuario.telefono}</li>
          </ul>
          <Link to={`/editarusuario/${id}`}><li className='btn btn-success'>Editar</li></Link>
          &nbsp;
          <button onClick={()=>{borrarUsuario(id)}} className='btn btn-danger'>Eliminar</button>
          <hr className='mt-4' />
        </div>
      </div>
    </div>
  )
}

export { UsuarioIndividual }