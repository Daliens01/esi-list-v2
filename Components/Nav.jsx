import { useRouter } from "next/router";
import { Navbar, Button, Link, Text, Card, Radio, Image } from "@nextui-org/react";
import { Layout } from "./Layout.jsx";
import {push} from "next/router";

const Nav = ()=>{
  
 const ruta = useRouter();
    return(
      <div > 
<Layout>
      <Navbar isBordered >
        <Navbar.Content hideIn="xs">
        <Image id="logo" src="https://i.ibb.co/hYPBkZb/logo.png" style={{"width":"10%"}} onClick={()=>{push(".././")}} />
          <Navbar.Link onPress={()=>{push("../More/Form")}}>Registrar</Navbar.Link>
          <Navbar.Link onPress={()=>{push("../More/Show")}}>Mostrar</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          {/* <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item> */}
        </Navbar.Content>
      </Navbar>
    </Layout>
     </div>)
}
export default Nav