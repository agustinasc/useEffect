import { useState, useEffect } from "react";
import { Heading } from "@chakra-ui/react";

export const Reloj = () => {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      //console.log(date.toLocaleTimeString());
      setHora(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Heading>Reloj {hora}</Heading>
    </>
  );
};
