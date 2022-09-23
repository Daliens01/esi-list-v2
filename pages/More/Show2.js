import React from "react";
import Error from "next/error"
import { Table, Row, Col, Button, Grid, Text, Modal, Image, Mail, Password, Checkbox } from "@nextui-org/react";
import {StyledBadge} from "../../Components/Icons/styled"
export default function View({task, error}){
    const contador = task.link;
    if(error && error.statusCode) return <Error statusCode={error.statusCode} title={error.statusText}/>
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);

    const closeHandler = () => {
     setVisible(false);
      console.log("closed");
    };
  
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
        case "status":
          return <StyledBadge type={user.status}>{cellValue}</StyledBadge>;
        case "bloques":
          return (
           <div>
             <Col>
              <Row><Grid.Container gap={1} justify="center">
              <Grid xs={2}><Button shadow size={"xs"} color={"warning"} onClick={handler}>1</Button></Grid>
              <Grid xs={2}><Button shadow size={"xs"} color={"warning"} onClick={handler}>2</Button></Grid>
              <Grid xs={2}><Button shadow size={"xs"} color={"warning"} onClick={handler}>3</Button></Grid>
              <Grid xs={2}><Button shadow size={"xs"} color={"warning"} onClick={handler}>4</Button></Grid>
                </Grid.Container></Row>  
            </Col>
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
          );
        default:
          return cellValue;
      }
    };
    return (
      <Table
        aria-label="Example table with custom cells"
        css={{
          height: "auto",
          minWidth: "100%",
        }}
        selectionMode="none"
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