import * as React from "react";
import Typography from "@mui/material/Typography";

function Heading() {
  return (
    <>
      <div>
        <Typography variant="h3" gutterBottom component="div">
          My Contacts
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Pick a contact to see more, begin typing in the search bar to search.
        </Typography>
      </div>
    </>
  );
}

export default Heading;
