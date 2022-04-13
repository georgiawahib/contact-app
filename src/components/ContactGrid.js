import { useEffect, useState } from "react";
import ContactCard from "./ContactCard";
import axios from "axios";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function ContactGrid() {
  const [isLoading, setIsLoading] = useState(true);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setAllUsers(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      {!isLoading && (
        <Box sx={{ height: "80vh", overflow: "auto" }}>
          <Grid
            container
            spacing={3}
            justifyContent="space-around"
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {allUsers.map((user, index) => {
              return (
                <Grid item>
                  <ContactCard user={user} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      )}
    </>
  );
}

export default ContactGrid;
