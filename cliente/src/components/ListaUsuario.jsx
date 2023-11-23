import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { UsuarioIndividual } from './UsuarioIndividual';

const ListaUsuario = () => {

  const [datosUsuarios, setDatosUsuarios] = useState([])
  
  useEffect(() =>{
    axios.get('/usuarios').then(res =>{
      setDatosUsuarios(res.data)
    })
    .catch(err => console.log(err))
  },[])
  
  const ListaUsuarios = datosUsuarios.map(usuario =>{
    return(
        <UsuarioIndividual key={usuario._id} id={usuario._id} usuario={usuario} />
    )
  })

  return(
    <div>
      <h1>Lista de usuarios</h1>
      {ListaUsuarios}
    </div>
  )
}

export { ListaUsuario }