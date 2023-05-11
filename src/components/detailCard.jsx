import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Data from "./Data";
import { useParams } from "react-router-dom";
export default function ImgMediaCard() {
  const { id } = useParams();

  return (
    <div className="personaldetail">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={Data[id].image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Name : {Data[id].first_name} {Data[id].last_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Dob : {Data[id].dob}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Gender: {Data[id].gender}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Email : {Data[id].email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Country : {Data[id].country}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
