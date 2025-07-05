import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import HomePage from "../../features/home/HomePage.tsx";
import Navbar from "./Navbar.tsx";

function App() {
    const theme = createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: '#7B904B', // Sage green - calming and natural
                light: '#9CAF69',
                dark: '#5C6E37',
            },
            secondary: {
                main: '#E8C5B0', // Warm peach - soft and welcoming
                light: '#F2D4C2',
                dark: '#C4A08E',
            },
            background: {
                default: '#FDFBF7', // Warm off-white
                paper: '#FFFFFF',
            },
            text: {
                primary: '#2D2D2D', // Soft black for better readability
                secondary: '#5F5F5F',
            },
        },
        typography: {
            fontFamily: [
                'Inter',
                'system-ui',
                '-apple-system',
                'sans-serif'
            ].join(','),
            h1: {
                fontWeight: 600,
                fontSize: '2.5rem',
                lineHeight: 1.3,
                color: '#2D2D2D',
            },
            h2: {
                fontWeight: 500,
                fontSize: '2rem',
                lineHeight: 1.4,
            },
            body1: {
                fontSize: '1rem',
                lineHeight: 1.6,
                letterSpacing: '0.00938em',
            },
        },
        shape: {
            borderRadius: 8,
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: '25px',
                        textTransform: 'none',
                        padding: '8px 24px',
                        fontSize: '1rem',
                    },
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
                        borderRadius: '12px',
                    },
                },
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Navbar/>
            <HomePage/>
        </ThemeProvider>
    )
}

export default App
