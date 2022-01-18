import React, { useContext, useEffect, useState } from 'react'
import { Box, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableFooter, TableRow } from "@mui/material";
import { Link } from 'react-router-dom';
import axios from "axios";
import { UserContext } from '../context/UserContext';

const headers = [
    { title: "ID" }, { title: "Food Name" }, { title: "Quantity" }, { title: "Price" },
    { title: "Payment Method" }
];

export default function OrderTable(props) {
    const [orders, setOrders] = useState([]);
    const [tableData, setTableData] = useState([]);
    const user = useContext(UserContext);

    useEffect(() => {
        axios.post("/api/orders", { user_profile_id: user.userInfo[0].user_profile_id }).then((response) => {
            console.log(response);
            if (response.data.stat === "success") {
                setOrders(response.data.orders);
                props.viewOrders(orders);
            } else console.log(response.data.message);

        });
        props.viewOrders(orders);
    }, []);
    return (
        <TableContainer component={Box}>
            <Table>
                <TableHead>
                    <TableRow >
                        {
                            headers.map((h) => {
                                return <TableCell align="center" sx={{ color: "black.main" }}>
                                    <Typography variant="h6">
                                        {h.title}
                                    </Typography>
                                </TableCell>
                            })
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.length < 1 ?
                        <TableRow >
                            <TableCell align="center" colSpan={5}>
                                <Typography align="center">
                                    It seems you don't have any orders yet.
                                </Typography>
                            </TableCell>
                        </TableRow>

                        :

                        orders.map((orderItems) => {
                            return (
                                <TableRow key={orderItems.orders_id}>
                                    <TableCell align="center">{orderItems.orders_id}</TableCell>
                                    <TableCell align="center">{orderItems.food_name}</TableCell>
                                    <TableCell align="center">
                                        {orderItems.quantity}
                                    </TableCell>
                                    <TableCell align="center">
                                        {orderItems.price}
                                    </TableCell>
                                    <TableCell align="center">
                                        {orderItems.payment_type === "COD" ? "COD (Cash On Delivery)" : "e-Wallet (GCash)"}
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    }

                </TableBody>
            </Table>

        </TableContainer>
    )
}
