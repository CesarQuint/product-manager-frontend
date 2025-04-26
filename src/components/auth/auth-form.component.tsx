import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [form, setForm] = useState({
    first_name: "",
    last_name_p: "",
    last_name_m: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignUp) {
      console.log("Signing up with:", form);
      // TODO: Call your Sign Up API here
    } else {
      console.log("Logging in with:", {
        email: form.email,
        password: form.password,
      });
      // TODO: Call your Login API here
    }
  };

  const toggleMode = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="#f5f5f5">
      <Card sx={{ width: 400, padding: 3 }}>
        <CardContent>
          <Typography
            variant="h5"
            mb={2}
            textAlign="center">
            {isSignUp ? "Sign Up" : "Login"}
          </Typography>

          <form onSubmit={handleSubmit}>
            {isSignUp && (
              <>
                <TextField
                  label="First Name"
                  name="first_name"
                  value={form.first_name}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                />

                <TextField
                  label="Father's Last Name"
                  name="last_name_p"
                  value={form.last_name_p}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                />

                <TextField
                  label="Mother's Last Name"
                  name="last_name_m"
                  value={form.last_name_m}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                />
              </>
            )}

            <TextField
              label="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              type="email"
              required
            />

            <TextField
              label="Password"
              name="password"
              value={form.password}
              onChange={handleChange}
              fullWidth
              margin="normal"
              type="password"
              required
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}>
              {isSignUp ? "Sign Up" : "Login"}
            </Button>

            <Button
              onClick={toggleMode}
              fullWidth
              sx={{ mt: 1 }}>
              {isSignUp
                ? "Already have an account? Login"
                : "Don't have an account? Sign Up"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
