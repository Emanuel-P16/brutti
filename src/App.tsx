import { Grid, ThemeProvider, Typography, createTheme, styled } from '@mui/material';
import NavBar from "./components/NavBar";
import { primaryColorPalette, secondaryColorPalette } from "./color-palette";
const Container = styled('div')(({ theme }) => ({
  background: theme.palette.primary.light,
  color: theme.palette.primary.contrastText,
  padding: '4vw 12vw',
}));

export default function App() {

  const theme = createTheme(
    {
      palette: {
        primary: {
          main: primaryColorPalette[500],
        },
        secondary: {
          main: secondaryColorPalette[500],
        }
      }
    }
  )
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Container>
        <Grid
          container
          direction="column"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={12}>
            <Typography variant="h6" align="center" gutterBottom={true}>
            ¿Deseas transformar tu realidad y descubrir un camino hacia tu verdadera expresión del corazón y el bienestar? ¡Te ayudo a explorar las prácticas orientales del Tai Chi 
            y el Qi Gong! Estas disciplinas milenarias son una puerta hacia la transformación interna y el equilibrio en todos los aspectos de la vida.
            </Typography>
          </Grid>
          {/* <Grid item xs={12}>
            <Typography variant="body1" align="center" gutterBottom={true}>
              <b>I’m Rasha and i am here to help you create a fashion style that reflects the unique you.</b>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" align="center" gutterBottom={true}>
              Whether through a wardrobe detox, store visits with me, or an online personal shopping experience, my tailored
              services will help you discover your true fashion self while meeting your budget and time needs. Take a look
              around my site, and see what I can do for you today.
            </Typography>
          </Grid> */}
        </Grid>
      </Container>
    </ThemeProvider>
  )
}