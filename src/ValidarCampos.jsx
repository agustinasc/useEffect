import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Heading,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react";

/* Crear un formulario de login con email y clave
Se debe verificar que no esten vacio y que la clave sea mayor a 8
Verificar cuando se toca de envia se deber aparce un alert por 5 min
En caso de ser falso debe aparecer el boton de logearse deshabilitado */

export const ValidarCampos = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  /*  useEffect(() => {
    const mostrarAlerta = () => alert("INGRESASTE");

    if(errors === ){
      mostrarAlerta()
    }
  });

  useEffect(() => {
    if(count === 5){
      console.log("count =", 5)
    };
    console.log("use effect", count)

    
  }, []);

 */

  /*  useEffect(() => {
    const mostrarAlerta = () => alert("ononono");
    handleSubmit();
    if (objKeys === 0) {
      mostrarAlerta();
    }
  });
 */
  const handleChange = (e) => {
    const newValues = {
      ...values,
      [e.target.name]: e.target.value,
    };
    setValues(newValues);
    console.log(e.target.name);
    console.log(e.target.value);
  };

  console.log(values, "values");

  const handleSubmit = (e) => {
    e.preventDefault();

    //LO GUARDO EN UNA CONSTANTE PARA MOSTRAR EL ERROR EN EL CONSOLE LOG
    const mostrarErrores = validate(values);
    console.log(mostrarErrores);

    const objKeys = Object.keys(mostrarErrores);
    if (objKeys.length === 0) {
      alert("PASO");
    } else {
      alert("NO PASO, VOLVE A INTENTAR");
    }
  };

  //PARA VALIDAR:

  const validate = (values) => {
    const errors = {};

    if (values.email.trim().length === 0) {
      errors.email = "Este campo es requerido";
    }
    if (values.password.trim().length === 0 || values.password.length < 8) {
      errors.password =
        "Este campo es requerido y debe ser mayor a 8 caracteres";
    }

    console.log(values.password.length);
    setErrors(errors);
    return errors;
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <Heading>Validar Campos</Heading>
      <FormControl gap={10}>
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
      {errors.email}

      <FormControl gap={10}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          name="password"
          id="password"
          value={values.password}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <FormHelperText>Introduce your password</FormHelperText>
      </FormControl>
      {errors.password}
      <Button type="onSubmit" colorScheme="green">
        Login
      </Button>
    </form>
  );
};
