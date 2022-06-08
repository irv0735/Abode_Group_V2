import { Link, Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import pacific from "../assets/images/pacific_coast.jpg";
import sanJose from "../assets/images/san_jose.jpg";
import caribbean from "../assets/images/caribbean_coast.jpg";

const Landing = () => {
  return (
    <>
      <div className="landing">
        <div
          id="home"
          className="bannerImage"
          title="Costa Rica Overview Image"
        >
          <Grid
            container
            direction="row"
            spacing={1}
            justifyContent="space-around"
            alignItems="center"
          >
            <Grid item sm={12} justifyContent="center" alignItems="center">
              <h2 id="tagline">choose your destination...</h2>
            </Grid>
            <Grid
              item
              sm={12}
              md={4}
              style={{ display: "flex", justifyContent: "center" }}
            >
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
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid
              item
              sm={12}
              md={4}
              style={{ display: "flex", justifyContent: "center" }}
            >
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
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid
              item
              sm={12}
              md={4}
              style={{ display: "flex", justifyContent: "center" }}
            >
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
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
      <Outlet />
      <div id="area-info" className="areaInfo">
        <h1>Costa Rica Information</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
          vulputate ut pharetra sit amet aliquam id. Eu lobortis elementum nibh
          tellus molestie nunc non blandit massa. A diam maecenas sed enim ut
          sem viverra. Tincidunt eget nullam non nisi est sit amet. In mollis
          nunc sed id semper. Facilisi cras fermentum odio eu feugiat pretium
          nibh ipsum consequat. Velit ut tortor pretium viverra suspendisse
          potenti nullam. Fermentum iaculis eu non diam phasellus vestibulum
          lorem. Curabitur gravida arcu ac tortor dignissim convallis aenean et
          tortor. Vitae purus faucibus ornare suspendisse sed nisi lacus. Enim
          nec dui nunc mattis enim ut. Quisque non tellus orci ac auctor. Diam
          phasellus vestibulum lorem sed risus ultricies.
        </p>
        <p>
          Purus ut faucibus pulvinar elementum integer enim. Ornare aenean
          euismod elementum nisi quis eleifend quam adipiscing. In ante metus
          dictum at tempor. Massa sapien faucibus et molestie ac feugiat sed
          lectus. Velit euismod in pellentesque massa placerat duis ultricies
          lacus. Elementum tempus egestas sed sed risus pretium. Egestas integer
          eget aliquet nibh praesent tristique. Velit sed ullamcorper morbi
          tincidunt. Tortor aliquam nulla facilisi cras fermentum odio eu. Odio
          eu feugiat pretium nibh ipsum consequat nisl. Quis eleifend quam
          adipiscing vitae proin sagittis nisl rhoncus mattis. Ornare arcu dui
          vivamus arcu felis bibendum ut tristique. In metus vulputate eu
          scelerisque felis imperdiet proin fermentum. Habitasse platea dictumst
          quisque sagittis purus sit amet.
        </p>
        <p>
          Ultricies tristique nulla aliquet enim tortor at auctor urna. Ipsum
          faucibus vitae aliquet nec ullamcorper sit amet. Lectus magna
          fringilla urna porttitor. Vitae congue mauris rhoncus aenean. Mattis
          vulputate enim nulla aliquet porttitor. Tellus pellentesque eu
          tincidunt tortor aliquam. Scelerisque felis imperdiet proin fermentum
          leo vel orci. Lacus vel facilisis volutpat est velit. Scelerisque
          purus semper eget duis at tellus at urna. Massa id neque aliquam
          vestibulum morbi. Suscipit adipiscing bibendum est ultricies integer.
        </p>
      </div>
      <div id="about-us" className="aboutUs">
        <h1>About Abode Group</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper
          risus in hendrerit gravida rutrum quisque non. Mi ipsum faucibus vitae
          aliquet nec. At erat pellentesque adipiscing commodo elit at. Elit at
          imperdiet dui accumsan sit amet nulla. Porttitor massa id neque
          aliquam vestibulum morbi blandit cursus. Nulla facilisi nullam
          vehicula ipsum a arcu. Eget egestas purus viverra accumsan in nisl
          nisi. Elit sed vulputate mi sit amet. Volutpat diam ut venenatis
          tellus in metus vulputate eu scelerisque. Scelerisque mauris
          pellentesque pulvinar pellentesque habitant morbi. Augue neque gravida
          in fermentum et sollicitudin ac orci phasellus. Aenean pharetra magna
          ac placerat vestibulum.
        </p>
        <p>
          Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Ut
          enim blandit volutpat maecenas volutpat blandit aliquam. Scelerisque
          in dictum non consectetur a. Dignissim convallis aenean et tortor.
          Tellus orci ac auctor augue mauris augue neque gravida in. Fringilla
          phasellus faucibus scelerisque eleifend donec. Justo eget magna
          fermentum iaculis eu. Pharetra diam sit amet nisl suscipit adipiscing
          bibendum est. Morbi non arcu risus quis varius quam. Est velit egestas
          dui id ornare. Et egestas quis ipsum suspendisse ultrices gravida
          dictum fusce ut. Venenatis tellus in metus vulputate eu scelerisque
          felis imperdiet proin. Feugiat sed lectus vestibulum mattis
          ullamcorper velit. Egestas integer eget aliquet nibh praesent
          tristique magna sit. Est sit amet facilisis magna etiam tempor. Mi
          bibendum neque egestas congue quisque egestas diam in. Purus viverra
          accumsan in nisl nisi scelerisque eu ultrices. Sed ullamcorper morbi
          tincidunt ornare massa eget egestas purus viverra. Nulla malesuada
          pellentesque elit eget gravida. Nibh mauris cursus mattis molestie.
        </p>
      </div>
    </>
  );
};

export default Landing;
