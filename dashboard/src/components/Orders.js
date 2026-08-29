import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/allOrders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data))
      .catch((err) => console.error("Error fetching orders:", err));
  }, []);

  return (
    <div className="orders-container" style={{flex: 1, padding: "30px 45px" }}>
      {allOrders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to="/" className="btn">Get started</Link>
        </div>
      ) : (
        <div className="orders-section">
          {/* Header matching "Positions (2)" typography */}
          <h3 
            className="title" 
            style={{ 
              fontSize: "18px", 
              fontWeight: "400", 
              color: "#424242", 
              margin: "0 0 25px 0" 
            }}
          >
            Orders ({allOrders.length})
          </h3>

          <table 
            className="table" 
            style={{ 
              width: "100%", 
              borderCollapse: "collapse",
              fontFamily: "Inter, sans-serif"
            }}
          >
            <thead>
              <tr style={{ borderBottom: "1px solid #eee" }}>
                <th style={{ color: "#9b9b9b", fontWeight: "400", fontSize: "12px", padding: "12px 15px", textAlign: "left" }}>Instrument</th>
                <th style={{ color: "#9b9b9b", fontWeight: "400", fontSize: "12px", padding: "12px 15px", textAlign: "right" }}>Qty.</th>
                <th style={{ color: "#9b9b9b", fontWeight: "400", fontSize: "12px", padding: "12px 15px", textAlign: "right" }}>Price</th>
                <th style={{ color: "#9b9b9b", fontWeight: "400", fontSize: "12px", padding: "12px 15px", textAlign: "right" }}>Mode</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((order, index) => {
                const isBuy = order.mode === "BUY";
                return (
                  <tr 
                    key={order._id || index} 
                    style={{ borderBottom: "1px solid #eeeeee" }}
                  >
                    {/* Stock Symbol */}
                    <td style={{ color: "#424242", fontSize: "13px", padding: "14px 15px", textAlign: "left" }}>
                      {order.name}
                    </td>
                    {/* Quantity */}
                    <td style={{ color: "#424242", fontSize: "13px", padding: "14px 15px", textAlign: "right" }}>
                      {order.qty}
                    </td>
                    {/* Price Decimal Format */}
                    <td style={{ color: "#424242", fontSize: "13px", padding: "14px 15px", textAlign: "right" }}>
                      {Number(order.price).toFixed(2)}
                    </td>
                    {/* Action Mode Styling matching P&L text style instead of using background blocks */}
                    <td 
                      style={{ 
                        fontSize: "13px", 
                        fontWeight: "500", 
                        padding: "14px 15px", 
                        textAlign: "right",
                        color: isBuy ? "#4caf50" : "#df514c"
                      }}
                    >
                      {order.mode}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;