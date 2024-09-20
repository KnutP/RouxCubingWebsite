import * as React from 'react';
import { Box, Typography, Paper } from '@mui/material';


export default function Home() {


    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Paper elevation={1}>
                <Box sx={{ width: '100%', mx: '15px', my: '20px' }}>
                    <Typography variant="h3">Roadmap to Sub-X</Typography>
                </Box>
            </Paper>
            <Typography variant="h6">TODO: make roadmap</Typography>
            20, 15, 12, 10, 8
            https://www.youtube.com/playlist?list=PLBHocHmPzgIh_ioQur_FmQ8vdRykjQJbn

        </Box>
    );
}