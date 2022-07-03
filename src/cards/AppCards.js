
import Card from "react-bootstrap/Card";
import React from 'react';
import {
    CardGroup,
    Button,
    Row,
    Col,
  } from 'react-bootstrap';





  
export default function AppCards() {
  return (
    
    <div className="container text-center poppins mt-4">
        <h2>Gelo's Passion for 2022!</h2>
        <br></br>

<CardGroup>
  <Card className="cardMargin">
    <Card.Img variant="top" src="https://townsquare.media/site/295/files/2020/07/80s.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89" />
    <Card.Body>
      <Card.Title>80s Music</Card.Title>
      <Card.Text className="soft">
        Listening to the golden era of music gives my soul and mind a leap to another dimension!
      </Card.Text>
      
    </Card.Body>
    <Card.Footer>
    <Button className="f10" href="https://www.youtube.com/watch?v=kOnde5c7OG8&list=RDMMkOnde5c7OG8&start_radio=1">Check this youtube!</Button>
    </Card.Footer>
  </Card>
  
  <Card className="cardMargin">
    <Card.Img variant="top" src="https://images.immediate.co.uk/production/volatile/sites/21/2020/11/Two-road-cyclists-in-drops-winter_road_female-a2b8cdd.jpg?quality=90&resize=620%2C413" />
    <Card.Body>
      <Card.Title>Cycling</Card.Title>
      <Card.Text className="soft">
        One of my newest passion this year! I want to improve my health and explore new wealth!
      </Card.Text>
      
    </Card.Body>
    <Card.Footer>
    <Button className="f10" href="https://shopee.ph/">Check Shopee for accessories!</Button>
    </Card.Footer>
  </Card>
  <Card className="cardMargin">
    <Card.Img variant="top" src="https://www.pcworld.com/wp-content/uploads/2021/11/IMG_20190615_214330-2.jpg?quality=50&strip=all&w=1024" />
    <Card.Body>
      <Card.Title>PC Gaming</Card.Title>
      <Card.Text className="soft">
        One of my earliest passion in life! from Famcom, Sega, Arcade and now! PC! PC Gaming is Life!
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button className="f10" href="https://store.steampowered.com/">Check NEW Games in Steam!</Button>
    </Card.Footer>
  </Card>

  <Card className="cardMargin">
    <Card.Img variant="top" src="https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/04/iStock-969305052-1024x683.jpg?w=1155&h=2969" />
    <Card.Body>
      <Card.Title>PC Gaming</Card.Title>
      <Card.Text className="soft">
        Stress relievers? Yeah. Sometimes.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button className="f10" href="https://store.steampowered.com/">Check On-Sale pet foods!</Button>
    </Card.Footer>
  </Card>


</CardGroup>
<br>
</br>




    </div>
    


  );
}