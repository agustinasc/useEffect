import { useState, useEffect } from "react";
import { VStack, Button, Heading, HStack, Text } from "@chakra-ui/react";
import { FaExchangeAlt } from "react-icons/fa";
import "./App.css";
import { Reloj } from "./Reloj.jsx";
import { CountDown } from "./CountDown";
import { PosicionCursor } from "./PosicionCursor";

function App() {
  const [count, setCount] = useState(0);

  //TOGGLE
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  useEffect(() => {
    document.title = `Hiciste ${count} clicks`;
    console.log(count);
  }, [count]);

  /*  const elegirColor = (count) => {
    if (count > 0) {
      colorFondo = "green";
    } else if (count < 0) {
      colorFondo = "red";
    } else {
      colorFondo = "blue";
    }
  }; */

  return (
    <VStack
    /* onChange={(e) => {
        setColorFondo(colorFondo);
      }} */
    >
      <Heading>Contador de Clicks</Heading>
      <Text fontSize="6xl">{count}</Text>
      <HStack>
        <Button
          onClick={
            () => setCount((count) => count + 1) /* elegirColor(colorFondo) */
          }
        >
          + 1
        </Button>
        <Button onClick={() => setCount((count) => (count = 0))}>
          <FaExchangeAlt></FaExchangeAlt>
        </Button>
        <Button onClick={() => setCount((count) => count - 1)}>- 1</Button>
      </HStack>

      {show && <Reloj />}
      <Button onClick={toggle}>Toggle</Button>

      <CountDown initialCount={10} />
      <PosicionCursor />
    </VStack>
  );
}

export default App;
