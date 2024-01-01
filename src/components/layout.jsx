import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { IsConnected } from '../App';
import BusinessData from '../data/businessData';
import BusinessDetails from './businessDetails';

const Layout = observer(() => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));
  return (
    <>
      <header>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar component="nav" sx={{ position: "absolute", backgroundColor: "#814a99" }} >
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {BusinessData.business.name}
              </Typography>
              {!useContext(IsConnected).isConnected ? <><Avatar alt="Remy Sharp" src={BusinessData.business.logo} />
                <Button sx={{ marginLeft: "1vw", ':hover': { backgroundColor: "grey", color: "white" } }} href="/admin" color="inherit">
                  Login
                </Button>
              </> :
                <><StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar alt="Remy Sharp" src={BusinessData.business.logo} />
                </StyledBadge></>}
            </Toolbar>
          </AppBar>
        </Box>
      </header>
      <Outlet />
      <BusinessDetails />
    </>
  )
})

export default Layout;