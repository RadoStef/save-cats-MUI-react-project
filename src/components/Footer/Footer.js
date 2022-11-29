import { Grid, List, ListItemText, Typography, Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <Box
      sx={{
        background: "#333333",
        color: "#d5d5d5",
        p: { xs: 4 },
        fontSize: 14,
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item lg={4} xs={12} sm={12} sx={{ pb: { xs: 4 } }}>
          <Typography variant="body1">ABOUT US</Typography>
          <Typography variant="caption2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
            quis id, error dolor nisi eos obcaecati explicabo aut, magnam
            doloremque, omnis vitae rem ducimus? Facere, blanditiis possimus
            sunt soluta veniam iste? Praesentium molestias incidunt consequatur
            quam at neque rerum nemo, quo eaque, nostrum labore, dignissimos
            modi cumque necessitatibus magnam quos.
          </Typography>
          <Box
            sx={{
              mt: 4,
            }}
          >
            <FacebookIcon sx={{ mr: 1 }} />
            <TwitterIcon sx={{ mr: 1 }} />
            <InstagramIcon />
          </Box>
        </Grid>
        <Grid item lg={2} xs={12} sm={6} sx={{ pb: { xs: 4, sm: 0 } }}>
          <Typography variant="body1">INFORMATION</Typography>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Lorem ipsum
              </Typography>
            </ListItemText>

            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Privacy &amp; Policy
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Terms &amp; Conditions
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item lg={2} xs={12} sm={6}>
          <Typography variant="body1">MY ACCOUNT</Typography>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Initiatives and projects
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Favourite animals
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                My Account
              </Typography>
            </ListItemText>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}