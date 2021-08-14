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
              Member of the development team of a hotel SPA that allows to
              reserve, publish and manage the rental of properties, among other
              things. • React, Redux, CSS puro, Material Ui, MercadoPago,
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
              My first individual development of a SPA for dog breeds, consumes
              data from an API (api.thedogapi.com) through a Back End developed
              by me adding functionalities to the original API. • React, Redux,
              CSS puro, Node.Js, Mongoose, MongoDB.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
