import { CircularProgress, Grid, Snackbar } from "@mui/material";
import { ListItem, Paper, Typography } from "@mui/material";
// import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import Footer4 from "../components/Footer";
import Header3 from "../components/Navbar";

import AddPaypalButton1 from "./AddPaypalButton1";

import { useNavigate } from "react-router-dom";

function OrderSummary() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("profile"));
  const payment = JSON.parse(localStorage.getItem("cartItems"));
  const userInfos = JSON.parse(localStorage.getItem("registration"));
  console.log(payment);

  const {
    firstName,
    lastName,
    _id,
    amount,
    delegate,
    city,
    country,
    correctEmail,
    whatsApp,
    paymentMethode,
  } = userInfos;

  useEffect(() => {
    if (!user || !userInfos) {
      navigate("/login");
    }
  }, [userInfos, navigate, user]);

  return (
    <>
      <Header3 />

      <div className="container">
        <Paper>
          <Grid container>
            <Grid
              key={_id}
              item
              lg={8}
              md={4}
              xs={12}
              component="div"
              style={{ border: "1px solid whiteSmoke" }}
            >
              <ListItem>
                {" "}
                <Typography variant="h5">
                  Passenger Details and payment
                </Typography>
              </ListItem>
              <ListItem>
                Full Name: {firstName} {lastName}
              </ListItem>
              <ListItem>Country: {country}</ListItem>
              <ListItem>City : {city}</ListItem>
              <ListItem>Email: {correctEmail}</ListItem>
              <ListItem>WhatsApp/Phone: {whatsApp}</ListItem>
              <ListItem>Delegate: {delegate}</ListItem>
              <ListItem>AMount $: {amount}</ListItem>
              <ListItem>
                <strong>Payment Methode:</strong> {paymentMethode}
              </ListItem>
            </Grid>

            <Grid
              item
              lg={4}
              md={4}
              xs={12}
              component="div"
              style={{ border: "1px solid whiteSmoke" }}
            >
              <ListItem>
                <Typography variant="h5">Sammary Info</Typography>
              </ListItem>
              <ListItem>Tax : 0$</ListItem>
              <ListItem> Amount : 5$</ListItem>
              <ListItem>
                <p>
                  <strong>Total Amount:</strong> ${amount}
                </p>
              </ListItem>
              <ListItem>
                <AddPaypalButton1 />
              </ListItem>
            </Grid>
          </Grid>
        </Paper>
      </div>
      <Footer4 />
    </>
  );
}

export default OrderSummary;
