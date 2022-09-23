import React from "react";
import Error from "next/error"
import { Collapse ,Table, Row, Col, Button, Grid, Text, Modal, Image, Mail, Password, Checkbox, Container, Card } from "@nextui-org/react";
import {StyledBadge} from "../../Components/Icons/styled"
export default function View({task, error}){
  const [visible, setVisible] = React.useState(false);
    const contador = task.link;
    if(error && error.statusCode) return <Error statusCode={error.statusCode} title={error.statusText}/>
    
    const handler = () => setVisible(true);

    const closeHandler = () => {
     setVisible(false);
      console.log("closed");
    };
    const materias = [
      {
        materia: " SSQ 102 Matematicas",
        fechaInicio: "01/0/22",
        fechaFinal: "15/10/22",
      },
      {
        materia: "Quimica",
        fechaInicio: "01/0/22",
        fechaFinal: "15/10/22",
      },
      {
        materia: "Fisica",
        fechaInicio: "01/0/22",
        fechaFinal: "15/10/22",
      },
      {
        materia: "Programación",
        fechaInicio: "01/0/22",
        fechaFinal: "15/10/22",
      },
    ]
    const columns = [
      { name: "NOMBRE/MATRICULA", uid: "name" },
      { name: "CORREO/CELULAR", uid: "email" },
      { name: "USUARIO/CONRASEÑA", uid: "username" },
      { name: "SEDE", uid: "sede" },
      { name: "COMENTARIOS", uid: "Comentarios" },
      { name: "STATUS", uid: "status" },
      { name: "BLOQUES", uid: "bloques" },
    ];
    const users = [
      {
        id: 1,
        name: "Tony Reichert",
        username: "567575629",
        password: "Reichert@22",
        status: "activo",
        matricula: "567575629",
        email: "tony.reichert@example.com",
        cellphone: "921-232-4354",
        sede: "coatza",
        Comentarios: "diplomado",
      },
      {
        id: 2,
        name: "Zoey Lang",
        username: "253453445",
        password: "Lang@22",
        status: "bajaTemporal",
        matricula: "253453445",
        email: "zoey.lang@example.com",
        cellphone: "921-232-4354",
        sede: "coatza",
        Comentarios: "",
      },
      {
        id: 3,
        name: "Jane Fisher",
        username: "2213123123",
        password: "Fisher@22",
        status: "activo",
        matricula: "2213123123",
        email: "jane.fisher@example.com",
        cellphone: "921-232-4354",
        sede: "coatza",
        Comentarios: "diplomado",
      },
      {
        id: 4,
        name: "William Howard",
        username: "2234248",
        password: "Howard@22",
        status: "baja",
        matricula: "2234248",
        email: "william.howard@example.com",
        cellphone: "921-232-4354",
        sede: "puebla",
        Comentarios: "",
      },
      {
        id: 5,
        name: "Kristen Copper",
        username: "22342434",
        password: "Copper@22",
        status: "baja",
        matricula: "22342434",
        email: "kristen.cooper@example.com",
        cellphone: "921-232-4354",
        sede: "coatza",
        Comentarios: "",
      },
    ]; 
    const count = 0
    if (count) return emptyData()
    const renderCell = (user, columnKey) => {
      const cellValue = user[columnKey];
      switch (columnKey) {
        case "name":
          return (
            <Col>
            <Row><Text b size={14} css={{ tt: "capitalize" }}>{cellValue}</Text></Row>
            <Row><Text b size={13} css={{ tt: "capitalize", color: "$accents7" }}>{user.matricula}</Text></Row>
            </Col>
          );
          case "email":
          return (
            <Col>
              <Row><Text b size={14} css={{ tt: "capitalize" }}>{cellValue}</Text></Row>
              <Row><Text b size={13} css={{ tt: "capitalize", color: "$accents7" }}>{user.cellphone}</Text></Row>
            </Col>
          );
        case "username":
          return (
            <Col>
              <Row><Text b size={14} css={{ tt: "capitalize" }}>{cellValue}</Text></Row>
              <Row><Text b size={13} css={{ tt: "capitalize", color: "$accents7" }}>{user.password}</Text></Row>
            </Col>
          );
          case "Comentarios":
            return (
              <Col>
                <Row><Text b size={14} css={{ tt: "capitalize" }}>{cellValue}</Text></Row>
              </Col>
            );
            case "sede":
              return (
                <Col>
                  <Row><Text b size={14} css={{ tt: "capitalize" }}>{cellValue}</Text></Row>
                </Col>
              );
        case "status":
          return <StyledBadge type={user.status}>{cellValue}</StyledBadge>;
        case "bloques":
          return (
           <div>
             <Col>
              <Row><Grid.Container justify="center">
              <Grid xs={2}><Button shadow auto size={"xs"} color={"warning"} onClick={handler}>1</Button></Grid>
              <Grid xs={2}><Button shadow auto size={"xs"} color={"warning"} onClick={handler}>2</Button></Grid>
              <Grid xs={2}><Button shadow auto size={"xs"} color={"warning"} onClick={handler}>3</Button></Grid>
              <Grid xs={2}><Button shadow auto size={"xs"} color={"warning"} onClick={handler}>4</Button></Grid>
                </Grid.Container></Row>  
            </Col>
            
           </div>
          );
        default:
          return cellValue;
      }
    };
    return (
      <div id="ShowBackground">
        <Collapse.Group>
        <Collapse shadow title="Filtros">
        <Grid.Container gap={1}>
      <Grid>
    <Button shadow auto color="warning" >Clear</Button>
        </Grid>
        <Grid>
    <Button auto color="secondary" flat>Quimica</Button>
        </Grid>
        <Grid>
          <Button auto color="secondary" flat>Mecatronica</Button>
        </Grid>
        <Grid>
          <Button auto color="secondary" flat>Ambiental</Button>
        </Grid>
        <Grid>
          <Button auto flat>MIM</Button>
        </Grid>
        <Grid>
          <Button auto flat>MSH</Button>
        </Grid>
        <Grid>
          <Button auto flat>MIMC</Button>
        </Grid>
        <Grid>
          <Button auto flat>EDPP</Button>
        </Grid>
        <Grid>
          <Button auto color="success" flat>TALLER</Button>
        </Grid>
      </Grid.Container>     
      <Collapse.Group>
        <Collapse shadow title="Semestre">
        <Grid.Container gap={1}>
      <Grid>
    <Button shadow auto color="warning" >Clear</Button>
        </Grid>
        <Grid>
    <Button auto color="secondary" flat>Primero</Button>
        </Grid>
        <Grid>
          <Button auto color="secondary" flat>Segundo</Button>
        </Grid>
        <Grid>
          <Button auto color="secondary" flat>Tercero</Button>
        </Grid>
        <Grid>
          <Button auto color="secondary" flat>Cuarto</Button>
        </Grid>
        
      </Grid.Container>        
        </Collapse>
        </Collapse.Group>     
        </Collapse>
        </Collapse.Group>    
        <br/>
      <Table
        aria-label="Example table with custom cells"
        css={{
          height: "auto",
          minWidth: "100%",
          backgroundColor:"#fff"
        }}
        selectionMode="single"
      >
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column
              key={column.uid}
              hideHeader={column.uid === "actions"}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </Table.Column>
          )}
        </Table.Header>
        <Table.Body items={users}>
          {(item) => (
            <Table.Row>
              {(columnKey) => (
                <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
              )}
            </Table.Row>
          )}
        </Table.Body>
      </Table>
      <br/>
      <Card css={{ $$cardColor: '$colors$primary' }}>
      <Card.Body>
      <Text color="white" css={{ m: 0 }} style={{textAlign:"center"}}>SSQ 102 QUIMICA</Text>
      </Card.Body>
      </Card>
      <Modal
                 closeButton
                 aria-labelledby="modal-title"
                 open={visible}
                 onClose={closeHandler}
                >
                  <Modal.Header>
                    <Text id="modal-title" size={18}>
                      Materias del Alumno
                    </Text>
                  </Modal.Header>
                  <Modal.Body>
                  
                     <table>
                            <tr>
                              <td>Materia</td>
                              <td>fechaInicio</td>
                              <td>fechaFinal</td>
                            </tr>
                            <tr>
                              <th><Button color={"success"}>SSQ 102 Matematicas</Button></th>
                              <th>19/09/22</th>
                              <th>25/10/22</th>
                            </tr>
                            <tr>
                              <th><Button color={"success"}>Quimica</Button></th>
                              <th>19/09/22</th>
                              <th>25/10/22</th>
                            </tr>
                            <tr>
                              <th><Button color={"success"} disabled>Fisica</Button></th>
                              <th>19/09/22</th>
                              <th>25/10/22</th>
                            </tr>
                      </table>
                    
                  </Modal.Body>
                  <Modal.Footer>
                    <Button auto flat color="error" onClick={closeHandler}>
                      Editar
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
const emptyData = () =>{
  return(
    <Grid.Container gap={2} justify="center">
      <Grid >
            <h1><i>No hay datos para verse</i></h1>
            <Image style={{'margin': '0 auto'}}  alt="none" src="https://eztoro.com/static/svg/no_data.svg"/>
      </Grid>
    </Grid.Container>
  )
  }