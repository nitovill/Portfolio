import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";

const Portfolio = () => {
  return (
    <Grid
      container
      spacing={3}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item xs={6}>
        <Card>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/ATsC3wqbLN4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Trakker
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Miembro del equipo de desarrollo de una SPA de hotel que permite
              reservar, publicar y gestionar el alquiler de inmuebles, entre
              otras cosas. • React, Redux, CSS puro, Material Ui, MercadoPago,
              Node.Js, Mongoose, MongoDB, Firebase, SCRUM, GitHub, Typescript,
              etc.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/yHqlZTYlLCQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Hey Bulldog!
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Desarrollo individual de una SPA de razas de perros, consume datos
              de una API (api.thedogapi.com) a través de un Back End
              desarrollado por mí agregando funcionalidades a la API original. •
              React, Redux, CSS puro, Node.Js, Mongoose, MongoDB.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
