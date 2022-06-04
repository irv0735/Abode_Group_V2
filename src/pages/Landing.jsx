import { Link, Outlet } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import pacific from '../assets/images/pacific_coast.jpg';
import sanJose from '../assets/images/san_jose.jpg';
import caribbean from '../assets/images/caribbean_coast.jpg';

import { About, Area } from '../components/index';

const Landing = () => {

return (
  <>
  <div className="landing">
    <div id="home" className="bannerImage" title="Costa Rica Overview Image">
      <Grid 
        container
        direction='row' 
        spacing={1} 
        justifyContent='space-around'
        alignItems='center'
      >
        <Grid item sm={12} justifyContent='center' alignItems='center'>
          <h2 id="tagline">choose your destination...</h2>
        </Grid>
        <Grid item sm={12} md={4} style={{ display: "flex", justifyContent: "center" }}>
          <Card sx={{ maxWidth: 500 }}>
            <CardActionArea component="div">
              <Link to="/pacific">
                <CardMedia
                  component="img"
                  height="140"
                  image={pacific}
                  alt="green iguana"
                />
              </Link>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Pacific
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item sm={12} md={4} style={{ display: "flex", justifyContent: "center" }}>
          <Card sx={{ maxWidth: 500 }}>
            <CardActionArea>
              <Link to="/sanjose">
                <CardMedia
                  component="img"
                  height="140"
                  image={sanJose}
                  alt="green iguana"
                />
              </Link>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                San José
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item sm={12} md={4} style={{ display: "flex", justifyContent: "center" }}>
          <Card sx={{ maxWidth: 500 }}>
            <CardActionArea>
              <Link to="/caribbean">
                <CardMedia
                  component="img"
                  height="140"
                  image={caribbean}
                  alt="green iguana"
                />
              </Link>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Caribbean
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
    <div className="customSection"><Area /></div>
    <div className="customSection"><About /></div>
  </div>
  <Outlet />
  </> 
);
}

export default Landing;