import React from "react";
 
const MetricsCard = ({ title, value }) => {

  return (
<div

      style={{

        border: "1px solid #ddd",

        padding: "20px",

        borderRadius: "8px",

        textAlign: "center",

        width: "20%",

        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",

      }}
>
<h3>{title}</h3>
<p style={{ fontSize: "24px", fontWeight: "bold" }}>{value}</p>
</div>

  );

};
 
export default MetricsCard;
 
