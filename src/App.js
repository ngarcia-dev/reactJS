import React from "react";
import Binary from "./componentes/Binary"
import HookForm from "./componentes/HookForm"
import FormCrud from "./componentes/FormCrud";
import Saludo from "./componentes/Saludo";
import Comment from "./componentes/Comment";
import Avatar from "./componentes/Avatar";

function App(){
  return (
    <div>
      <Avatar avatarUrl={'logo512.png'} urlImagen={Comment.avatarUrl} />
      <Comment author={Avatar}/>
      <Saludo name="Nahuel"/>
      <Saludo name="Maria"/>
      <Saludo name="Brandon"/>
      <Binary/>
      <FormCrud/>
      <HookForm/>
    </div>
  )
}

export default App