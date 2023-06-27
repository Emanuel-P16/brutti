import { Grid, ThemeProvider, Typography, createTheme, styled } from '@mui/material';
import { primaryColorPalette, secondaryColorPalette } from "./color-palette";
import tc1 from './assets/tc1.jpg'
import tc2 from './assets/tc2.jpg'
import tc3 from './assets/tc3.jpg'
import curso1 from './assets/curso1.jpg'
import medicina1 from './assets/medicinaChina1.jpg'
import medicina2 from './assets/medicinaChina2.jpg'
import { Cursos,Carrousel,NavBar, Medicina} from './components/index'
const Container = styled('div')(({ theme }) => ({
  background: theme.palette.primary.light,
  color: theme.palette.primary.contrastText,
  padding: '10vw',
}));

export default function App() {

  const images = [
    tc1, tc2, tc3
  ]
  const imagesCurses = [
    curso1
  ]
  const imagesMedicine = [
    medicina1,medicina2
  ]
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
          <Carrousel images={images} autoPlay={true} showButtons={true} />
          <Grid item xs={12} >
            <Typography variant="h6" align="center" gutterBottom={true}>
              ¿Deseas transformar tu realidad y descubrir un camino hacia tu verdadera expresión del corazón y el bienestar? ¡Te ayudo a explorar las prácticas orientales del Tai Chi
              y el Qi Gong! Estas disciplinas milenarias son una puerta hacia la transformación interna y el equilibrio en todos los aspectos de la vida.
            </Typography>
          </Grid>
          <Grid item xs={12} id={'Medicina China'}>
              <Medicina images={imagesMedicine}/>
          </Grid>
          <Grid item xs={12} id={'Cursos Online'}>
              <Cursos images={imagesCurses}/>
          </Grid>

        </Grid>
      </Container>
    </ThemeProvider>
  )
}