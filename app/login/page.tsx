'use client';

import Navbar from "../components/Navbar/Navbar"
import { Form, Card, Button, Nav} from 'react-bootstrap';
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { supabase } from "../utils/supabaseClient";

export default function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    const { error, data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      router.push('/dashboard'); // redirect after login
    }
  }
    return (
        <main>
            <Navbar />
            <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#121212'
          }}>
            <Card style={{ width: '25rem', padding: '2rem', backgroundColor: '#1e1e1e', color: '#fff' }}>
              <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>Login</h3>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
      
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <p style={{ textAlign: "center", marginTop: "10px" }}>
                Don’t have an account?{" "}
                <Nav.Link 
                    href="/signup" 
                    style={{ display: "inline", color: "#0d6efd", padding: 0 }}
                >
                    Sign up
                </Nav.Link>
                </p>


      
                <Button onClick={handleLogin} variant="primary" type="submit" style={{ width: '100%' }}>
                  Login
                </Button>
              </Form>
            </Card>
          </div>
        </main>

    )
}