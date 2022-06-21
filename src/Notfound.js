import React from 'react'
import {useNavigate} from 'react-router-dom'

function Notfound() {
  let navigate = useNavigate ();

  return (
    <div>Notfound 404 Error

      <button onClick={() => {navigate('/Shehab')}} >Bauk </button>
    </div>
  )
}

export default Notfound