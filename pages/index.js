// import {push} from "next/router";
import {Grid} from "@nextui-org/react";
export default function Home() {
  return ( 
  <Grid.Container gap={2} justify="center">
    <Grid>
    <h1 style={{textAlign: "center"}}>Bienvenid@ </h1>
    <br/>
    <p>Esta app consiste en recopilar la información de los alumnos dados de baja e inscritos, en sus materias y bloques</p>
    </Grid>
  </Grid.Container>
 ) 
}

