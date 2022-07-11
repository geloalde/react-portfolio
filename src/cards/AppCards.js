
import Card from "react-bootstrap/Card";
import React from 'react';
import {
    CardGroup,
    Button,
    
  } from 'react-bootstrap';





  
export default function AppCards() {
  return (
    
    <div className="container text-center poppins mt-4">
        <h2>2GE</h2>
        <br></br>
        <p> 2G for Gelo and Gela, and E for Ernest. 2G also stands for the 2nd generation (2G technology) and the 2nd grouping of our class</p>
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
    <Card.Img variant="top" src="https://images.immediate.co.uk/production/volatile/sites/21/2020/11/Two-road-cyclists-in-drops-winter_road_female-a2b8cdd.jpg?quality=90&resize=620%2C413" />
    <Card.Body>
      <Card.Title>Cycling</Card.Title>
      <Card.Text className="soft">
       
      </Card.Text>
      
    </Card.Body>
    <Card.Footer>
    <Button className="f10" href="https://shopee.ph/">Check Social Media</Button>
    </Card.Footer>
  </Card>
  <Card className="cardMargin">
    <Card.Img variant="top" src={''} />
    <Card.Body>
      <Card.Title>Ernest Vincent Torrejos</Card.Title>
      <Card.Text className="soft">
        Father to one daughter, husband to one wife, only son, and brother to three elder sisters.
        <br></br>BPO employee by day, coding student by night.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button className="f10" href="https://www.facebook.com/ernestvincent.torrejos/">Check Social Media!</Button>
    </Card.Footer>
  </Card>

  


</CardGroup>

<br>
</br>




    </div>
    


  );
}