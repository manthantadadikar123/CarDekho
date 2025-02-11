import React, { useState } from "react";
import "./Wearup.css";

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState("2412 - 7512 - 3412 - 3456");
  const [cvv, setCvv] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("09");
  const [expiryYear, setExpiryYear] = useState("22");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <div className="header">
        <span>💳 AceCoinPay</span>
        <div className="timer">
          <span className="box1">0</span>
          <span className="box2">1</span>
          <span className="box3">:</span>
          <span className="box4">1</span>
          <span className="box5">9</span>
        </div>
      </div>

      <div className="form-container">
        <div className="left-section">
          <div className="input-group">
            <label className="label">Card Number</label>
            <label className="sub-label">Enter the 16-digit card number on the card</label>
            <input type="text" className="input-field" value={cardNumber} readOnly />
          </div>
        </div>


        <div className="right-section">
          <div className="cvv-expiry-container">
            <div className="input-group">
              <label className="label">CVV Number</label>
              <label className="sub-label">Enter the 3 or 4 digit number on the card</label>
              <input
                type="password"
                className="input-field-1"
                placeholder="Enter CVV"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </div>

           <div className="input-group expiry-group">
              <label className="label">Expiry Date</label>
              <label className="sub-label">Enter the expiry date</label>
              <div className="expiry-box">
                <input type="text" className="input-field expiry-field" value={expiryMonth} readOnly />
                /
                <input type="text" className="input-field expiry-field" value={expiryYear} readOnly />
              </div>
            </div>
          </div>

          <div className="input-group">
            <label className="label">Password</label>
            <label className="sub-label">Enter your dynamic password</label>
            <input
              type="password"
              className="input-field-1"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
      </div>

      <button className="button">Pay Now</button>
    </div>
  );
};

export default PaymentPage;