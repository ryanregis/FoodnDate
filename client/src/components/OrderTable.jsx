import React from 'react'
import { Box, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableFooter, TableRow } from "@mui/material";
import { Link } from 'react-router-dom';

const headers = [
    { title: "ID" }, { title: "Order Status" }, 
    { title: "Delivery Service" }, { title: "Actions" }, { title: "Rating" }
];

export default function OrderTable(props) {
    return (
        <TableContainer component={Box}>
            <Table>
                <TableHead>
                    <TableRow >
                        {
                            headers.map((h) => {
                                return <TableCell align="center" sx={{ color: "black.main" }}>{h.title}</TableCell>
                            })
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow >
                        <TableCell align="center">
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            
        </TableContainer>
    )
}
