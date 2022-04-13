import * as React from "react";
import Typography from "@mui/material/Typography";

function Heading() {
  return (
    <>
      <div>
        <Typography variant="h3" gutterBottom component="div">
          Contacts
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Click on a contact to find out more information
        </Typography>
      </div>
    </>
  );
}

export default Heading;
