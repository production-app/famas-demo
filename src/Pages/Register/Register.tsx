import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Text,
  Container,
  Button,
} from "@mantine/core";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <>
      <Container size={520} my={40}>
        <Title ta="center" className="title">
          Sign-Up User !
        </Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Filling your profile below to complete the registration, otherwise
          click to <Link to="/">login</Link>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={50} radius="md">
          <TextInput label="Email" placeholder="you@mantine.dev" required />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
          />
          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm password"
            required
            mt="md"
          />

          <Button fullWidth mt="xl">
            Sign in
          </Button>
        </Paper>
      </Container>
    </>
  );
};

export default Register;
