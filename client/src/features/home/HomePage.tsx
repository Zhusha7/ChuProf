import {Box, Paper, Typography} from "@mui/material";

function HomePage() {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p={5}
        >
            <Paper elevation={3} sx={{p: 4, px: 10}}>
                <Typography variant="h1" sx={{
                    fontWeight: "bold",
                    color: "primary.main",
                    mb: 4,
                }}>
                    Добро пожаловать!
                </Typography>
                <Typography
                    variant="h5"
                    justifySelf="center"
                    sx={{
                        mb: 6,
                        color: "text.secondary",
                    }}
                >
                    Я — Екатерина Чулкова, лицензированный психотерапевт, помогаю людям находить ясность, внутреннюю устойчивость и душевное спокойствие.
                    Провожу индивидуальные консультации онлайн и лично, в зависимости от ваших предпочтений.
                </Typography>
            </Paper>
        </Box>
    );
}

export default HomePage;