import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";

function Navbar() {
    return (
        <AppBar component={Box} position="fixed" sx={{
            flexGrow: 1,
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundImage: "linear-gradient(135deg,rgba(203, 255, 247, 0.66),rgba(180, 230, 254, 0.66))"
        }}>
            <Toolbar sx={{padding: "0 24px"}}>
            <Typography variant="h6">
                    Екатерина Чулкова
                </Typography>
                <Button color="primary"></Button>
                <Button color="primary">About</Button>
                <Button color="primary">Contact</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;