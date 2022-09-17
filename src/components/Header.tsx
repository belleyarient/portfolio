import React from 'react'
import { Link } from "react-router-dom";
// import { Navbar } from 'react-bootstrap';
// import { Nav } from 'react-bootstrap';
// import { NavDropdown } from 'react-bootstrap';
// import {Container} from 'react-bootstrap';
// import { hover } from '@testing-library/user-event/dist/hover';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['About', 'Products', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event:any) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event:any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <header>

      {/* <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
  <Container>
  <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#home"><Link to= "/" style={{textDecoration:'none' }}>HOME</Link></Nav.Link>
      <Nav.Link href="#pricing"><Link to= "/blog" style={{textDecoration:'none'}}>BLOG</Link></Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar> */}
      <AppBar position="static" style={{backgroundColor:'#202020'}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              My Portfolio
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}

                <MenuItem onClick={handleCloseNavMenu}
                //   variant='contained'
                  color='primary'
                  component={Link}
                  to='/'
                >
                  <Typography textAlign="center">HOME</Typography>
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}
                //   variant='contained'
                  color='primary'
                  component={Link}
                  to='/profile'
                >
                  <Typography textAlign="center">PROFILE</Typography>
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}
                //   variant='contained'
                  color='primary'
                  component={Link}
                  to='/blog'
                >
                  <Typography textAlign="center">ABOUT</Typography>
                </MenuItem>
              </Menu>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              My Portfolio
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}

              <Button
                onClick={handleCloseNavMenu}
                component={Link}
                to='/'
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                HOME
              </Button>

              <Button
                onClick={handleCloseNavMenu}
                component={Link}
                to='/profile'
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                PROFILE
              </Button>

              <Button
                onClick={handleCloseNavMenu}
                component={Link}
                to='/blog'
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                ABOUT
              </Button>

            </Box>


          </Toolbar>
        </Container>
      </AppBar>
      
    </header>
  )
}

export default Header