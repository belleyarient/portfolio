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
import * as THREE from 'three';
import { color, margin } from '@mui/system';



const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const HomePage = () => {

  const contentStyle: { [key: string]: string } = {
    textAlign: 'center',
    color: 'white',
    margin: '100px auto'
  };
  const cardStyle = {

  };
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();


  
  let createParticles = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    // レンダラを作成
    const renderer: any = new THREE.WebGLRenderer({
      canvas: document.querySelector("#nyumon-sample1") as HTMLCanvasElement
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    // シーンを作成
    const scene = new THREE.Scene();
    // カメラを作成 
    const camera = new THREE.PerspectiveCamera(45, width / height);
    camera.position.set(0, 0, +1000);
    const SIZE = 3000;
    const LENGTH = 100;
   
    let geom = new THREE.SphereGeometry(2, 32, 16);
    // let geom = new THREE.IcosahedronGeometry(10, 0);
    // geom.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    
    let particle:any = [];
    let cloud = new THREE.Group;
    for(let i = 0; i < LENGTH; i++) {
      let color = '0x' + Math.floor(Math.random() * 10000000).toString(16);
      let material = new THREE.PointsMaterial({
        size:10, blending: THREE.AdditiveBlending, color: Number(color), depthWrite: false, transparent:true, opacity:1.0})
      particle[i] = new THREE.Mesh(geom, material);

      particle[i].position.x = width*(Math.random()-0.5);
      particle[i].position.y = height*(Math.random()-0.5);
      particle[i].position.z = width*(Math.random()-0.6);
      cloud.add(particle[i]);
      scene.add(particle[i]);
    }
    console.log(height);
    
    let update = () => {
      renderer.render(scene, camera);
      // レンダリング
      for(let j = 0; j < LENGTH; j++) {
        // particle[j].position.x += Math.random() * 0.5;
        // particle[j].position.y += Math.random() * 0.1;
        particle[j].position.z += Math.random() * 0.8;
        particle[j].rotation.x += Math.random() * 0.01;
        particle[j].rotation.y += Math.random() * 0.02;
        particle[j].rotation.z += Math.random() * 0.02;
        if(particle[j].position.y > height/2){
          particle[j].position.y = -height/2;
        }
        if(particle[j].position.z < -20 || particle[j].position.z > 1000) {
          particle[j].position.z = 0;
        }
      }
      cloud.position.x += 0.1;
      requestAnimationFrame(update);
    }
    update();
  }

  const createBox = () => {
    // サイズを指定
    const width = window.innerWidth;
    const height = window.innerHeight;
    // レンダラを作成
    const renderer: any = new THREE.WebGLRenderer({
      canvas: document.querySelector("#nyumon-sample1") as HTMLCanvasElement
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    // シーンを作成
    const scene = new THREE.Scene();
    // カメラを作成 
    const camera = new THREE.PerspectiveCamera(45, width / height);
    camera.position.set(0, 0, +1000);
    // 箱を作成
    const geometry = new THREE.BoxGeometry(width/4, width/4, width/4);
    const material = new THREE.MeshNormalMaterial(); const box = new THREE.Mesh(geometry, material);
    scene.add(box);
    tick();



    // 毎フレーム時に実行されるループイベント
    function tick() {
      box.rotation.x += 0.002;
      box.rotation.y += 0.002;
      box.rotation.z += 0.002;
      renderer.render(scene, camera);
      // レンダリング
      requestAnimationFrame(tick);
    }
  };
  useEffect(() => {
    createParticles();
  }, []);
  


  return (
    <div style={{position: 'relative', display: 'flex', justifyContent: 'center'}}>
      
      <div className='home-content'>
        <Scroll delay={1000} origin={'left'}>
          <h1>Welcome to</h1>
        </Scroll>
        <Scroll delay={1500} origin={'right'}>
        <h1>My Portfolio</h1>
        </Scroll>
        <Scroll delay={2000} origin={'bottom'}><h1>{`${year}/${month}/${date}`}</h1></Scroll>
        {/* <h1>{`${hour}:${minute}:${second}`}</h1> */}
        {/* <Scroll delay={2000} origin={'right'}>
          <h2 style={contentStyle}>更新テスト</h2>
        </Scroll>
        <Scroll delay={3000} origin={'bottom'}><h3 style={contentStyle}>Gitのコマンド覚える</h3></Scroll> */}
      </div>

      {/* <Grid container spacing={2} style={{position: 'absolute', top: '300px'}}>
        <Box sx={{ color: 'black', margin: '60px auto' }}>
          <Card>
            <CardContent>Java</CardContent>
          </Card>
        </Box>
        <Box sx={{ color: 'black', margin: '60px auto' }}>
          <Card>
            <CardContent>JavaScript</CardContent>
          </Card>
        </Box>
        <Box sx={{ color: 'black', margin: '60px auto' }}>
          <Card>
            <CardContent>SQL</CardContent>
          </Card>
        </Box>
        <Box sx={{ color: 'black', margin: '60px auto' }}>
          <Card>
            <CardContent>C++</CardContent>
          </Card>
        </Box>
      </Grid>

      <Grid container>
        <Grid item xs={12} sm={12} lg={3}>
          1
        </Grid>
        <Grid item xs={12} sm={12} lg={3}>
          2
        </Grid>
        <Grid item xs={12} sm={12} lg={3}>
          3
        </Grid>
        <Grid item xs={12} sm={12} lg={3}>
          4
        </Grid>
      </Grid> */}

        <canvas id="nyumon-sample1" style={{position: 'relative', zIndex: -5, top: 0}}/>

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
    </div>

  )
}

export default HomePage;