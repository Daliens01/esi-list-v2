import Nav from "./Nav";
import Head from "next/head";
const Contanier =(props) =>{
    return (
    <div id="MainBackground"> 
        <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css"></link>
        <title>Alumnos Esiapi</title>
        </Head>
        <Nav />
        <div  className="contanier p-5"> 
            {props.children}
        </div>
    </div>
    )
}

export default Contanier