import React from "react";
import Router from "next/router";
import {  Button, Grid, Text, Modal, Input, Textarea  } from "@nextui-org/react";

export default function View({task, error}){
  
    // useState de los modals

  const [AlumnoView, setAlumnoView] = React.useState(false);
  const [MateriaView, setMateriaView] = React.useState(false);
  const [LicenciaturaView, setLicenciaturaView] = React.useState(false);
  const [MaestriaView, setMaestriaView] = React.useState(false);
  const [TallerView, setTallerView] = React.useState(false);
  const [newTask, setNewTask] = React.useState();

  const OpenAlumno = () => setAlumnoView(true);
  const closeAlumno = () => setAlumnoView(false)

  const OpenMateria = () => setMateriaView(true)
  const CloseMateria = () => setMateriaView(false)

  const OpenLic = () => setLicenciaturaView(true)
  const CloseLic = () => setLicenciaturaView(false)

  const OpenMaster = () => setMaestriaView(true)
  const CloseMaster = () => setMaestriaView(false)

  const OpenTaller = () => setTallerView(true)
  const CloseTaller = () => setTallerView(false)
  
  const add = async () =>{
            
    try{
        await fetch("https://api-daliens01.vercel.app/api/options", {
            method: "POST", headers: { 
                "Content-Type" : "application/json"
            }, body: JSON.stringify(newTask)
        }).then((response) => Promise.all([response.json(), response.headers])).then(([body, headers] )=>{
            const auth = headers.get("link");
            console.log(auth);
    })
    }catch (error){
        console.error("error al agregar");
        console.error(error);
    }
}
const handleSubmit = async (e) =>{
  e.preventDefault();
  await add();
  await Router.push("/More/Form");
}
const handleChange = (e) => setNewTask({...newTask, [e.target.name] : e.target.value}  );
    
    // if(error && error.statusCode) return <Error statusCode={error.statusCode} title={error.statusText}/>
    return(<div onMouseMove={()=>{
      const contador = true
      if(contador) { document.getElementById("idA").style = "display : block"}
      else{
        document.getElementById("idA").style = "display : none"
      }
    }}>
      <Grid.Container gap={2} justify="center">
      <Grid>
      <Text style={{textAlign: "center"}}>Agregar Alumno <Button style={{margin: "0 auto"}} onPress={OpenAlumno}>+</Button></Text>
      <Text style={{textAlign: "center"}}> Agregar Materia <Button style={{margin: "0 auto"}} onPress={OpenMateria}>+</Button></Text><br/><hr/>
      <div id="idA" style={{display: "none"}}>
      <Text  style={{textAlign: "center" }}>Asignar Alumno a:</Text>
      <Grid.Container gap={2} justify="center">
        <Grid xl={4}><Button color={"success"} onPress={OpenLic}>Licenciatura</Button></Grid>
        <Grid xl={4}><Button color={"success"} onPress={OpenMaster}>Maestría</Button></Grid>
        <Grid xl={4}><Button color={"success"}  onPress={OpenTaller}>Taller</Button></Grid>
      </Grid.Container>
      </div>
      </Grid>
    </Grid.Container>
    {/* Modal Registrar Alumno */}
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={AlumnoView}
      onClose={closeAlumno}
     >
       <Modal.Header>
         <Text id="modal-title" size={18}>
           Agregar Alumno
         </Text>
       </Modal.Header>
       <form onSubmit={handleSubmit} method="POST">
       <Modal.Body>
         <Input required placeholder="Nombre completo"></Input>
         <Input required placeholder="Correo"></Input>
         <Input required placeholder="Celular"></Input>
         <Input placeholder="username"></Input>
         <Input placeholder="Contraseña"></Input>
         
       </Modal.Body>
       <Modal.Footer>
         <Button auto flat color="error" onClick={closeAlumno}>
           Cancelar
         </Button>
         <Button auto flat color="success" type="submit" >
           Guardar
         </Button>
       </Modal.Footer>
       </form>
     </Modal>

     {/* Modal Materia */}
     <Modal 
      closeButton
      aria-labelledby="modal-title"
      open={MateriaView}
      onClose={CloseMateria}>
         <Modal.Header>
          
         <Text id="modal-title" size={18}>
           Agregar Materia
         </Text>
       </Modal.Header>
      <Modal.Body>
      <Input placeholder="Nombre Materia"></Input>
      </Modal.Body>
      <Modal.Footer>
         <Button auto flat color="error" onClick={CloseMateria}>
           Cancelar
         </Button>
         <Button auto flat color="success" onClick={CloseMateria}>
           Guardar
         </Button>
       </Modal.Footer>
     </Modal>
     {/* Modal ASIGNACION ALUMNO LICENCIATURA */}
     <Modal 
      closeButton
      aria-labelledby="modal-title"
      open={LicenciaturaView}
      onClose={CloseLic}>
         <Modal.Header>
         <Text id="modal-title" size={18}>
           Asignar Alumno Licenciatura  
         </Text>
       </Modal.Header>
      <Modal.Body>
      <Input placeholder="Alumno"></Input>
      <select>
      <option value={0} disabled selected>Selecciona un bloque </option>
        <option value={1}>BLOQUE 1</option>
        <option value={2}>BLOQUE 2</option>
        <option value={3}>BLOQUE 3</option>
        <option value={4}>BLOQUE 4</option>
      </select>
      <select>
      <option value={0} disabled selected>Selecciona Plan </option>
        <option value={1}>Licenciatura Quimica</option>
        <option value={2}>Licenciatura Mecatronica</option>
        <option value={3}>Licenciatura Ambiental</option>
      </select>
      <select>
      <option value={0} disabled selected>Selecciona un Codigo de materia </option>
        <option value={1}>101 {"(1er Semestre)"}</option>
        <option value={2}>102 {"(1er Semestre)"}</option>
        <option value={3}>103 {"(1er Semestre)"}</option>
        <option value={1}>201 {"(2do Semestre)"}</option>
        <option value={2}>202 {"(2do Semestre)"}</option>
        <option value={3}>203 {"(2do Semestre)"}</option>
        <option value={1}>301 {"(3er Semestre)"}</option>
        <option value={2}>302 {"(3er Semestre)"}</option>
        <option value={3}>303 {"(3er Semestre)"}</option>
        <option value={1}>401 {"(4to Semestre)"}</option>
        <option value={2}>402 {"(4to Semestre)"}</option>
        <option value={3}>403 {"(4to Semestre)"}</option>
      </select>
      <label>Fecha Inicio</label>
      <Input type={"date"}></Input>
      <label>Fecha Final</label>
      <Input type={"date"}></Input>
      <Input placeholder="Materia"></Input>
      <Textarea  placeholder="Comentario"></Textarea >
      </Modal.Body>
      <Modal.Footer>
         <Button auto flat color="error" onClick={CloseLic}>
           Cancelar
         </Button>
         <Button auto flat color="success" onClick={CloseLic}>
           Guardar
         </Button>
       </Modal.Footer>
     </Modal>
      {/* Modal ASIGNACION ALUMNO MAESTRIA */}
      <Modal 
      closeButton
      aria-labelledby="modal-title"
      open={MaestriaView}
      onClose={CloseMaster}>
         <Modal.Header>
         <Text id="modal-title" size={18}>
           Asignar Alumno Maestría
         </Text>
       </Modal.Header>
      <Modal.Body>
      <Input placeholder="Alumno"></Input>
      <select>
      <option value={0} disabled selected>Selecciona un bloque </option>
        <option value={1}>BLOQUE 1</option>
        <option value={2}>BLOQUE 2</option>
        <option value={3}>BLOQUE 3</option>
        <option value={4}>BLOQUE 4</option>
      </select>
      <select>
      <option value={0} disabled selected>Selecciona Plan </option>
        <option value={1}>MIM</option>
        <option value={2}>MSH</option>
        <option value={3}>MIMC</option>
        <option value={3}>EDPP</option>
      </select>
      <select>
      <option value={0} disabled selected>Selecciona un Codigo de materia </option>
        <option value={1}>101 {"(1er Semestre)"}</option>
        <option value={2}>102 {"(1er Semestre)"}</option>
        <option value={3}>103 {"(1er Semestre)"}</option>
        <option value={1}>201 {"(2do Semestre)"}</option>
        <option value={2}>202 {"(2do Semestre)"}</option>
        <option value={3}>203 {"(2do Semestre)"}</option>
        <option value={1}>301 {"(3er Semestre)"}</option>
        <option value={2}>302 {"(3er Semestre)"}</option>
        <option value={3}>303 {"(3er Semestre)"}</option>
        <option value={1}>401 {"(4to Semestre)"}</option>
        <option value={2}>402 {"(4to Semestre)"}</option>
        <option value={3}>403 {"(4to Semestre)"}</option>
      </select>
      <label>Fecha Inicio</label>
      <Input type={"date"}></Input>
      <label>Fecha Final</label>
      <Input type={"date"}></Input>
      <Input placeholder="Materia"></Input>
      <Textarea  placeholder="Comentario"></Textarea >
      </Modal.Body>
      <Modal.Footer>
         <Button auto flat color="error" onClick={CloseMaster}>
           Cancelar
         </Button>
         <Button auto flat color="success" onClick={CloseMaster}>
           Guardar
         </Button>
       </Modal.Footer>
     </Modal>
      {/* Modal ASIGNACION ALUMNO MAESTRIA */}
      <Modal 
      closeButton
      aria-labelledby="modal-title"
      open={TallerView}
      onClose={CloseTaller}>
         <Modal.Header>
         <Text id="modal-title" size={18}>
           Asignar Alumno Taller
         </Text>
       </Modal.Header>
      <Modal.Body>
      <Input placeholder="Alumno"></Input>
      <select>
      <option value={0} disabled selected>Selecciona un bloque </option>
        <option value={1}>BLOQUE 1</option>
        <option value={2}>BLOQUE 2</option>
        <option value={3}>BLOQUE 3</option>
        <option value={4}>BLOQUE 4</option>
      </select>
      <select>
      <option value={0} disabled selected>Selecciona Plan </option>
        <option value={1}>MODULO 1</option>
        <option value={2}>MODULO 2</option>
        <option value={3}>MODULO 3</option>
        <option value={3}>MODULO 4</option>
      </select>
      <label>Fecha Inicio</label>
      <Input type={"date"}></Input>
      <label>Fecha Final</label>
      <Input type={"date"}></Input>
      <Input placeholder="Materia"></Input>
      <Textarea  placeholder="Comentario"></Textarea >
      </Modal.Body>
      <Modal.Footer>
         <Button auto flat color="error" onClick={CloseTaller}>
           Cancelar
         </Button>
         <Button auto flat color="success" onClick={CloseTaller}>
           Guardar
         </Button>
       </Modal.Footer>
     </Modal>
    </div>
    )
}
export async function getServerSideProps({query: {id}}){
   const res = await fetch(`https://api-daliens01.vercel.app/api/options/627bec884a8163d612d3b799`)
    if(res.status === 200){
        const task = await res.json();
        return(  {props: {task}})
    }return({ props: {  error:{statusCode: res.status, statusText: "Identificador invalido"}}})
}