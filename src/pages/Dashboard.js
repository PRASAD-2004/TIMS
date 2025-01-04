import React, { useState, useEffect } from "react";

import MetricsCard from "./MetrucsDisplay";

import StockTable from "./StockTable";

const Dashboard = () => {

    const [inventoryData, setInventoryData] = useState([]);

    const [metrics, setMetrics] = useState({

        totalStock: 0,

        lowStockCount: 0,

        totalProducts: 0,

        totalSuppliers: 0,

    });

    useEffect(() => {

        const fetchData = async () => {

            const data = [

                { ProductName: "Cisco ISR 1101", StockLevel: 500, ReorderPoint: 150, SupplierName: "Cisco" },

                { ProductName: "HP 5406zl", StockLevel: 300, ReorderPoint: 100, SupplierName: "HP" },

                { ProductName: "DOCSIS 3.1 Modem", StockLevel: 200, ReorderPoint: 50, SupplierName: "Netgear" },

                { ProductName: "Cellular Duplexer Rx", StockLevel: 200, ReorderPoint: 50, SupplierName: "Broadcom" },

                { ProductName: "SBB100 Splitter", StockLevel: 400, ReorderPoint: 75, SupplierName: "BELL" },

            ];

            setInventoryData(data);

            const totalStock = data.reduce((sum, item) => sum + item.StockLevel, 0);

            const lowStockCount = data.filter((item) => item.StockLevel < item.ReorderPoint).length;

            const totalProducts = data.length;

            const totalSuppliers = new Set(data.map((item) => item.SupplierName)).size;

            setMetrics({ totalStock, lowStockCount, totalProducts, totalSuppliers });

        };

        fetchData();

    }, []);

    return (
        <div>
            <MetricsCard metrics={metrics} />
            <StockTable data={inventoryData} />
        </div>

    );

};

export default Dashboard;