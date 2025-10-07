'use client';

import Navbar from "./components/Navbar/Navbar"
import { Card, Button} from 'react-bootstrap';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="DataView" style={{display:"flex"}}>
        <div className="Card1" style={{paddingInline:"3%"}}>
          <Card style={{ width: '22rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Data Evaluation</Card.Title>
            <Card.Text>
              This shows how the Data-Dashboard can evaluate any data you enter, and show it
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          </Card>
        </div>
        <div className="Card2" style={{paddingInline:"3%"}}>
          <Card style={{ width: '22rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Data Evaluation</Card.Title>
            <Card.Text>
              This shows how the Data-Dashboard can evaluate any data you enter, and show it
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          </Card>
        </div>
        <div className="Card3" style={{paddingInline:"3%"}}>
          <Card style={{ width: '22rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Data Evaluation</Card.Title>
            <Card.Text>
              This shows how the Data-Dashboard can evaluate any data you enter, and show it
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          </Card>
        </div>
        <div className="Card4" style={{paddingInline:"3%"}}>
          <Card style={{ width: '22rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Data Evaluation</Card.Title>
            <Card.Text>
              This shows how the Data-Dashboard can evaluate any data you enter, and show it
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          </Card>
        </div>
        
      </div>
      

    </main> 
  );
}
