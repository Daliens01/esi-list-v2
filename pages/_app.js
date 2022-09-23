import '../styles/globals.css';
import { NextUIProvider } from '@nextui-org/react';
import Con from "Components/Container";

function MyApp({ Component, pageProps }) {
  return <NextUIProvider><Con>
            <link rel="shortcut icon" href="/logo.ico" />
            <Component {...pageProps} />
        </Con></NextUIProvider>
}
export default MyApp
