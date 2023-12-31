import { Grid, ThemeProvider, createTheme, styled } from '@mui/material';
import { primaryColorPalette, secondaryColorPalette } from "./color-palette";
// import tc1 from './assets/tc1.jpg'
import Home from './assets/Home.jpg'
// import tc2 from './assets/tc2.jpg'
// import tc3 from './assets/tc3.jpg'
import curso1 from './assets/cursos/cursotaichi.jpg'
import curso2 from './assets/cursos/cursochikun.png'
import curso3 from './assets/cursos/cursoqigong.jpg'
import medicina1 from './assets/servicios/acupuntura.jpg'
import medicina2 from './assets/servicios/fitoterapia.jpg'
import medicina3 from './assets/servicios/qigong.jpg'
import medicina4 from './assets/servicios/tuina.jpg'
import homeVideo from './assets/videos/taichi.mp4'
import { Cursos,NavBar,  Contacto, Inicio, Servicios} from './components/index'
const Container = styled('div')(({ theme }) => ({
  background: theme.palette.primary.light,
  color: theme.palette.primary.contrastText,
  // padding: '5vw',
}));

export default function App() {

  // const images = [
  //   tc1
  // ]
  const homeImages =[
    Home
  ]
  const imagesCurses = [
    curso1,curso2,curso3
  ]
  const imagesMedicine = [
    medicina1,medicina2,medicina3,medicina4
  ]
  const theme = createTheme(
    {
      palette: {
        primary: {
          main: primaryColorPalette[500],
        },
        secondary: {
          main: secondaryColorPalette[500],
        },
      },
      typography: {
        button:{
          textTransform: 'none',
        },
        fontFamily: [
          // 'Dealoras'
        ].join(',')
      }
    }
  )
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Container>
        <Grid
          container
          spacing={3}
        >
          <Grid item xs={12}>
           <Inicio homeImages={homeImages} homeVideo={homeVideo}/>
          </Grid>
          {/* <Carrousel images={images} autoPlay={true} showButtons={true} /> */}
          {/* <Grid item xs={12} >
            <Typography variant="h6" align="center" gutterBottom={true}>
              ¿Deseas transformar tu realidad y descubrir un camino hacia tu verdadera expresión del corazón y el bienestar? ¡Te ayudo a explorar las prácticas orientales del Tai Chi
              y el Qi Gong! Estas disciplinas milenarias son una puerta hacia la transformación interna y el equilibrio en todos los aspectos de la vida.
            </Typography>
          </Grid> */}
          {/* <Grid item xs={12} id={'Taichi'}>
              <Taichi />
          </Grid> */}
          {/* <Grid item xs={12} id={'Medicina China'}>
              <Medicina images={imagesMedicine}/>
          </Grid> */}
          <Grid item xs={12} id={'Servicios'}>
              <Servicios images={imagesMedicine}/>
          </Grid>
          <Grid item xs={12} id={'Cursos Online'}>
              <Cursos images={imagesCurses}/>
          </Grid>
          <Grid item xs={12} id={'Contacto'}>
              <Contacto/>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  )
}