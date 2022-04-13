import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function ContactCard({ user }) {
  return (
    <Card sx={{ minWidth: 300, textAlign: "center" }} varient="outlined">
      <CardContent>
        <Typography variant="h5" component="div">
          {user.name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          @{user.username}
        </Typography>
        <Typography variant="body2">
          {user.company.name}
          <br />
          {user.email}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default ContactCard;
