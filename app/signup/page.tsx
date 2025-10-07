'use client';

import Navbar from "../components/Navbar/Navbar"
import { Form, Card, Button, Nav, ButtonGroup} from 'react-bootstrap';


export default function Login(){
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
              <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>Sign Up</h3>
              <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
      
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit" style={{ width: '100%' }}>
                  Sign Up
                </Button>
              </Form>
            </Card>
          </div>
        </main>

    )
}