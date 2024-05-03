import { Box, Button, Container, Grid, Typography } from "@mui/material";
import "./Demo.scss";

const Demo = () => {
  return (
    <Box className="demo-container">
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box className="demo-left">
              <Typography variant="h6">
                Unlock the potential of <br /> Rderly&apos;s POS system tailored{" "}
                <br /> to your business
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className="demo-right">
              <Typography variant="p">
                Schedule a personalized demo now to witness <br /> firsthand how
                our features can revolutionize <br /> your operations and
                delight your customers
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box className="demo-btn-box">
          <Button variant="">Get a Demo</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Demo;
