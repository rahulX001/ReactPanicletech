import * as React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import chartimg from "./asset/chart.png";
import table from "./asset/table.png";
import formimg from "./asset/form.png";

import { NavLink } from "react-router-dom";

function ResponsiveAppBar() {
  return (
    <>
      <div className="MainContainer">
        <div className="subcontainer">
          <NavLink to="/chart" style={{ margin: "5%" }}>
            <Card className="childsubcontainer">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={chartimg}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Chart
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Data based on chart
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </NavLink>
          <NavLink to="/table" style={{ margin: "5%" }}>
            <Card className="childsubcontainer">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={table}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Table
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Data based on Table
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </NavLink>
          <NavLink to="/form" style={{ margin: "5%" }}>
            <Card className="childsubcontainer">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={formimg}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Form
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Data based on Form
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </NavLink>
        </div>
      </div>
    </>
  );
}
export default ResponsiveAppBar;
