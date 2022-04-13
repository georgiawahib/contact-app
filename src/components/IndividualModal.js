import * as React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function IndividualModal({ open, setOpen, user }) {
  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(!open)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            sx={{ mb: 1.5 }}
            variant="h3"
            component="h2"
          >
            {user.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            @{user.username} | {user.phone}
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Box>
                <b>Address</b>
              </Box>
            </Grid>
            <Grid item xs={9}>
              <Box>
                {user.address.suite} {user.address.street}, {user.address.city}{" "}
                {user.address.zipcode}
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box>
                <b>Email</b>
              </Box>
            </Grid>
            <Grid item xs={9}>
              <Box>{user.email}</Box>
            </Grid>
            <Grid item xs={3}>
              <Box>
                <b>Website</b>
              </Box>
            </Grid>
            <Grid item xs={9}>
              <Box>{user.website}</Box>
            </Grid>
            <Grid item xs={3}>
              <Box>
                <b>Workplace</b>
              </Box>
            </Grid>
            <Grid item xs={9}>
              <Box>
                {user.company.name} | <i>{user.company.catchPhrase}</i>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
}

export default IndividualModal;
