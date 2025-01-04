import React from "react";
 
const StockTable = ({ data }) => {

  return (
<table

      style={{

        width: "80%",

        margin: "20px auto",

        borderCollapse: "collapse",

        textAlign: "left",

      }}

      border="1"
>
<thead>
<tr style={{ background: "#f5f5f5" }}>
<th style={{ padding: "10px" }}>Product Name</th>
<th style={{ padding: "10px" }}>Stock Level</th>
<th style={{ padding: "10px" }}>Reorder Point</th>
<th style={{ padding: "10px" }}>Supplier</th>
<th style={{ padding: "10px" }}>Status</th>
</tr>
</thead>
<tbody>

        {data.map((item, index) => (
<tr key={index}>
<td style={{ padding: "10px" }}>{item.ProductName}</td>
<td style={{ padding: "10px" }}>{item.StockLevel}</td>
<td style={{ padding: "10px" }}>{item.ReorderPoint}</td>
<td style={{ padding: "10px" }}>{item.SupplierName}</td>
<td

              style={{

                padding: "10px",

                color: item.StockLevel < item.ReorderPoint ? "red" : "green",

              }}
>

              {item.StockLevel < item.ReorderPoint ? "Low Stock" : "Sufficient"}
</td>
</tr>

        ))}
</tbody>
</table>

  );

};
 
export default StockTable;