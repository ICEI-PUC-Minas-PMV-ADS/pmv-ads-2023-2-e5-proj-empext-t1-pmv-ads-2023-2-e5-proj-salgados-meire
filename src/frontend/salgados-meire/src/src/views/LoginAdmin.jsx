import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Button,
  FormLabel,
  FormControl,
  Input,
  Center,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const LoginAdmin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = () => {
    debugger;
    setLoading(true);
    if (user === "admin" && password === "admin") {
      return navigate("/Admin/Home");
    } else {
      alert("Usuário ou senha incorretos.");
    }
    setLoading(false);
  };

  return (
    <Card align="center" marginTop="100px" marginInline="600px">
      <CardHeader>
        <Heading size="md"> Seja-bem-vindo:</Heading>
      </CardHeader>
      <Center>
        <FormControl>
          <CardBody>
            <FormLabel>Usuário</FormLabel>
            <Input onChange={(e) => setUser(e.target.value)} />
            <FormLabel>Senha</FormLabel>
            <Input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </CardBody>
          <CardFooter>
            <Button
              colorScheme="blue"
              onClick={() => login()}
              isLoading={loading}
            >
              Entrar
            </Button>
          </CardFooter>
        </FormControl>
      </Center>
    </Card>
  );
};

export default LoginAdmin;
