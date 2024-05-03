import { Box, Container, Grid, Typography } from "@mui/material";
import "./OrderManage.scss";

const OrderManage = () => {
  return (
    <Container className="order-container">
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <Box component="img" width="100%" height="100%" src={"order.png"} />
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography variant="" className="order-slogan">
            Boost operational efficiency with our order <br /> management screen
          </Typography>
          <Box className="order-title">
            <Typography variant="h4">Streamlined Order Management</Typography>
          </Box>
          <Box className="order-detail">
            <Box>
              <Typography variant="p">
                <strong>Order Placement:</strong> Allows users to create new
                orders quickly and easily.
              </Typography>
            </Box>

            <br />
            <Box>
              <Typography variant="p">
                <strong>Item Selection:</strong> Provides a comprehensive list
                of menu items or products for customers to choose from.
              </Typography>
            </Box>

            <br />
            <Box>
              <Typography variant="p">
                <strong>Modifiers and Add-ons:</strong> Supports modifiers like
                extra cheese, side dishes, or special requests that can be added
                to orders.
              </Typography>
            </Box>

            <br />
            <Box>
              <Typography variant="p">
                <strong>Order Summary:</strong> Displays a summary of the order,
                including items, quantities, prices, and any modifications.
              </Typography>
            </Box>

            <br />
            <Box>
              <Typography variant="p">
                <strong>Order Editing:</strong> Allows for editing or modifying
                orders before they are finalized and processed.
              </Typography>
            </Box>

            <br />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OrderManage;
