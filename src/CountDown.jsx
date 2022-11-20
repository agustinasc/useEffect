import { useState, useEffect } from "react";
import { Heading } from "@chakra-ui/react";

export const CountDown = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    const interval = setInterval(() => {
      //console.log(count);
      if (!count) return clearInterval(interval);
      setCount(count - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);
  return (
    <>
      <Heading> CountDown</Heading>
      {count || "Tiempo finalizado =)"}
    </>
  );
};
