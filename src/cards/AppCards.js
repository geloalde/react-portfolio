
import Card from "react-bootstrap/Card";
import React from 'react';
import {
    CardGroup,
    Button,
    
  } from 'react-bootstrap';





  
export default function AppCards() {
  return (
    
    <div className="container text-center poppins mt-4">
        <h2>Team 2GE</h2>
        <br></br>
        <p className="soft f16"> Our team name is derived from our nicknames — Gelo, Gela, Ernest.
        <br></br> We aim to create quality websites and programs forged from our teamwork and camaraderie.</p>
        
        <br></br>
        <br></br>
        

        <h2>Team Members</h2>
<CardGroup>
  <Card className="cardMargin">
    <Card.Img variant="top" src={'/gelo.jpg'} />
    <Card.Body>
      <Card.Title>Gelo Alde</Card.Title>
      <Card.Text className="soft">
        Stay at home Tito who loves to play FPS games! 
        <br></br>Bike in the morning, Code in the evening.
      </Card.Text>
      
    </Card.Body>
    <Card.Footer>
    <Button className="f10" href="https://facebook.com/geloalde">Check Social Media</Button>
    </Card.Footer>
  </Card>
  
  <Card className="cardMargin">
    <Card.Img variant="top" src={'/gela.jpg'} />
    <Card.Body>
      <Card.Title>Gela Cajudo</Card.Title>
      <Card.Text className="soft">
        Aspiring web developer and webtoon artist.
       <br></br>Waiting one step at a time!
      </Card.Text>
      
    </Card.Body>
    <Card.Footer>
    <Button className="f10" href="https://facebook.com/gelamvc">Check Social Media</Button>
    </Card.Footer>
  </Card>
  <Card className="cardMargin">
    <Card.Img variant="top" src={'/Ernest.jpg'} />
    <Card.Body>
      <Card.Title>Ernest Vincent Torrejos</Card.Title>
      <Card.Text className="soft">
        Father to one daughter, husband to one wife, only son, and brother to three elder sisters.
        <br></br>BPO employee by day, coding student by night.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button className="f10" href="https://www.facebook.com/ernestvincent.torrejos/">Check Social Media</Button>
    </Card.Footer>
  </Card>

  


</CardGroup>

<br>
</br>




    </div>
    


  );
}
