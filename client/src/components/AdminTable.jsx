import React from 'react'
import { Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';


export default function AdminTable(props) {
    return (
        <TableContainer component={Paper} >

            <Table>
                <TableHead sx={{ bgcolor: "black.main" }}>
                    <TableRow >
                        <TableCell align="center" >
                            <Typography variant="table_header">Customers</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant="table_header">Food Ordered</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant="table_header">Delivery Schedule</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant="table_header">Addresses</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant="table_header">Status</Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.type}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
