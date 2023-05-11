import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

export default function FormCard() {
  const formData = useSelector((state) => state.formData);

  return (
    <div className="personaldetail">
      <Card
        sx={{ maxWidth: 345 }}
        style={{
          backgroundColor: "#FDF5E6",
          padding: "5rem",
          borderRadius: "1rem",
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Name : {formData.name}
          </Typography>
          <Typography variant="body2" >
            Age : {formData.age}
          </Typography>
          <Typography variant="body2" >
            Gender: {formData.gender}
          </Typography>
          <Typography variant="body2" >
            Email : {formData.email}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
