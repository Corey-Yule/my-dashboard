'use client';

import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Form, Card, Button } from 'react-bootstrap';
import { supabase } from "../utils/supabaseClient";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      setMessage("Check your email for a confirmation link!");
    }
  };

  return (
    <main>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#121212",
        }}
      >
        <Card
          style={{
            width: "25rem",
            padding: "2rem",
            backgroundColor: "#1e1e1e",
            color: "#fff",
          }}
        >
          <h3 style={{ textAlign: "center", marginBottom: "1rem" }}>Sign Up</h3>
          <Form onSubmit={handleSignup}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>

            {error && (
              <p style={{ color: "red", textAlign: "center" }}>{error}</p>
            )}
            {message && (
              <p style={{ color: "lightgreen", textAlign: "center" }}>
                {message}
              </p>
            )}

            <Button variant="primary" type="submit" style={{ width: "100%" }}>
              Sign Up
            </Button>
          </Form>
        </Card>
      </div>
    </main>
  );
}