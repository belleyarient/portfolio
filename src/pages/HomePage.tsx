import React, { useEffect } from 'react'
import { useRef } from 'react';
// import { Button } from 'react-bootstrap';
// import { Card } from 'react-bootstrap';
// import { Row } from 'react-bootstrap';
// import { Col } from 'react-bootstrap';
// import { CardGroup } from 'react-bootstrap';
import Scroll from '../components/Scroll';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const HomePage = () => {

    const contentStyle: {[key: string]: string} = {
        textAlign: 'center'
    };
    const cardStyle = {

    };

    

    return (
        <div>
            <div className='title'>
                <Scroll delay={1000} origin={'left'}>
                    <h1 style={contentStyle}>Sample Page For Portfolio</h1>
                </Scroll>
                <Scroll delay={2000} origin={'right'}>
                    <h2 style={contentStyle}>更新テスト</h2>
                </Scroll>
                    <Scroll delay={3000} origin={'bottom'}><h3 style={contentStyle}>Gitのコマンド覚える</h3></Scroll>
            </div>

            {/* <CardGroup className='mt-5'>
  <Card className='m-5'>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Java</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card className='m-5'>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>TypeScript</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card className='m-5'>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>React</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup> */}

<Grid container spacing={2}>
  <Box sx={{color: 'black', margin: '60px'}}>
    <Card sx={{ minWidth: 275 }} >
          <CardContent >
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
  </Box>
</Grid>

        </div>

    )
}

export default HomePage;