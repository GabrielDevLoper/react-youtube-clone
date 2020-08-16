import React from "react";
import { Box, Typography, Toolbar, Grid } from "@material-ui/core";

// Componentes
import TopBar from "../../components/TopBar";
import SideBar from "../../components/SideBar";
import Content from "../../components/Content";
import { useStyles } from "./styles";

const videos = [
  {
    id: 1,
    channel: "Gabriel Santos",
    title: "ONÇA PINTADA UM DOS MAIS FORTES DOS FELINOS NO MUNDO",
    views: "800 mil visualizações",
    date: "há 2 horas",
    avatar: "/images/thumbs/avatar.jpg",
    thumb: "/images/thumbs/animals.jpg",
  },
  {
    id: 2,
    channel: "Gabriel Santos",
    title: "CIDADES PEQUENAS",
    views: "567 mil visualizações",
    date: "há 6 horas",
    avatar: "/images/thumbs/avatar.jpg",
    thumb: "/images/thumbs/cities.jpg",
  },
  {
    id: 3,
    channel: "Gabriel Santos",
    title: "CASAS MODESTAS E BONITAS",
    views: "254 mil visualizações",
    date: "há 1 semana",
    avatar: "/images/thumbs/avatar.jpg",
    thumb: "/images/thumbs/houses.jpg",
  },
  {
    id: 4,
    channel: "Gabriel Santos",
    title: "MOTO RÁPIDAS E AS MAIS CARAS DO MUNDO",
    views: "980 mil visualizações",
    date: "há 16 minutos",
    avatar: "/images/thumbs/avatar.jpg",
    thumb: "/images/thumbs/moto.jpg",
  },
  {
    id: 5,
    channel: "Gabriel Santos",
    title: "N.A.S.A DESCOBRE NOVO PLANETA COM ÁGUA",
    views: "999 mil visualizações",
    date: "há 5 horas",
    avatar: "/images/thumbs/avatar.jpg",
    thumb: "/images/thumbs/planetas.jpg",
  },
  {
    id: 6,
    channel: "Gabriel Santos",
    title: "CIDADES ENORMES",
    views: "800 mil visualizações",
    date: "há 2 horas",
    avatar: "/images/thumbs/avatar.jpg",
    thumb: "/images/thumbs/state.jpg",
  },
  {
    id: 7,
    channel: "Gabriel Santos",
    title: "CIDADES ENORMES",
    views: "800 mil visualizações",
    date: "há 2 horas",
    avatar: "/images/thumbs/avatar.jpg",
    thumb: "/images/thumbs/state.jpg",
  },
  {
    id: 8,
    channel: "Gabriel Santos",
    title: "CIDADES ENORMES",
    views: "800 mil visualizações",
    date: "há 2 horas",
    avatar: "/images/thumbs/avatar.jpg",
    thumb: "/images/thumbs/state.jpg",
  },
  {
    id: 9,
    channel: "Gabriel Santos",
    title: "CIDADES PEQUENAS",
    views: "567 mil visualizações",
    date: "há 6 horas",
    avatar: "/images/thumbs/avatar.jpg",
    thumb: "/images/thumbs/cities.jpg",
  },
  {
    id: 10,
    channel: "Gabriel Santos",
    title: "CASAS MODESTAS E BONITAS",
    views: "254 mil visualizações",
    date: "há 1 semana",
    avatar: "/images/thumbs/avatar.jpg",
    thumb: "/images/thumbs/houses.jpg",
  },
  {
    id: 11,
    channel: "Gabriel Santos",
    title: "MOTO RÁPIDAS E AS MAIS CARAS DO MUNDO",
    views: "980 mil visualizações",
    date: "há 16 minutos",
    avatar: "/images/thumbs/avatar.jpg",
    thumb: "/images/thumbs/moto.jpg",
  },
  {
    id: 12,
    channel: "Gabriel Santos",
    title: "N.A.S.A DESCOBRE NOVO PLANETA COM ÁGUA",
    views: "999 mil visualizações",
    date: "há 5 horas",
    avatar: "/images/thumbs/avatar.jpg",
    thumb: "/images/thumbs/planetas.jpg",
  },
];

function Home({ darkMode, setDarkMode }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TopBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Box display="flex">
        <SideBar />
        <Content>
          <Toolbar />
          <Typography
            variant="h5"
            color="textPrimary"
            style={{ fontWeight: 800, marginBottom: 15 }}
          >
            Recomendados
          </Typography>

          <Grid container spacing={2} className={classes.root}>
            {videos.map((video, index) => (
              <Grid key={video.id} item lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <img
                    style={{ width: "100%" }}
                    src={video.thumb}
                    alt={video.title}
                  />
                </Box>
                <Box>
                  <Typography
                    style={{ fontWeight: 600 }}
                    gutterBottom
                    variant="body1"
                    color="textPrimary"
                  >
                    {video.title}
                  </Typography>
                  <Typography
                    display="block"
                    variant="body2"
                    color="textPrimary"
                  >
                    {video.channel}
                  </Typography>
                  <Typography variant="body2" color="textPrimary">
                    {`${video.views} * ${video.date}`}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Content>
      </Box>
    </div>
  );
}

export default Home;
