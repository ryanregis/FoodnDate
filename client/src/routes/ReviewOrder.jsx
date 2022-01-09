import React from 'react'

import { Box, Paper, Typography } from '@mui/material'
import theme from '../Theme';
import { OrderDetails } from '../components';

export default function ReviewOrder() {
    return (
        <Box py={5}>
            <Paper sx={{width: "clamp(300px, 50%, 800px)", mx:"auto"}}>
                <OrderDetails type="review" />
            </Paper>
        </Box>
    )
}
