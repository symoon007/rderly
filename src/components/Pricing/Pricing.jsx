import {
  Box,
  Button,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import "./Pricing.scss";

const Pricing = () => {
  return (
    <Container className="pricing-container">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="" className="pricing">
            Pricing
          </Typography>
          <Box className="title">
            <Typography variant="h3">
              By the way, it&apos;s <br /> practically free
            </Typography>
          </Box>
          <Box>
            <Typography variant="p" className="pricing-detail">
              You pay a 2.9% + 30¢ credit card fee for <br /> each transaction,
              which we forward to <br /> our payment processing partner, Stripe
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} className="card-content">
          <CardContent className="pricing-card">
            <Typography fontWeight={600} variant="h5">
              Free
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            <Box component="div" className="price-data">
              <Typography
                variant="h2"
                sx={{ fontWeight: 800, margin: "45px 0" }}
              >
                $0<span className="month">/mo</span>
              </Typography>
             
            </Box>
            <Box className="create-btn">
              <Button variant="contained">Create Your Account</Button>
            </Box>

            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              5%
            </Typography>
            <Typography variant="p">
              Transaction fee paid by your customers
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Pricing;
