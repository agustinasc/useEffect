import { useState, useEffect } from "react";
import { Heading } from "@chakra-ui/react";

export const PosicionCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setPosition({
        ...PosicionCursor,
        x: e.clientX,
        y: e.clientY,
      });
    });
    return () => {
      window.removeEventListener("mousemove", () => {}, true);
    };
  }, []);

  return (
    <>
      <Heading>Posicion del cursos</Heading>;<Heading>X: {position.x}</Heading>;
      <Heading>Y: {position.y}</Heading>;
    </>
  );
};
