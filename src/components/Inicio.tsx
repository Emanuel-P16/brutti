import { Box, Grid, Typography } from "@mui/material";
import styled from 'styled-components'

const HomeImg = styled.img`
 /* max-width: 1900px; */
  width: 100%;
  /* height: auto; */
  height: 100vh;
  display: block;
  /* margin-top:6rem; */
   /* opacity: 0;
  transition: 1s; */
  /* &.loaded {
    opacity: 1; 
  } */
   @media (max-width: 600px) {
    margin-top: 3rem; /* Puedes cambiar este valor según tus necesidades */
    width: 150%;
  }  
  `;
const HomeContainer = styled.div`
    position: relative;
    display: inline-block;
    width:80%;
    margin-top: 6rem;
    @media (max-width: 600px){
        width: 100%;
    }
  `
const TextContainer = styled.div`
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000000;
  font-weight:bold;
  padding-left: 60rem;
  padding-bottom:10rem;

  @media (max-width: 600px){
    padding-left: 0rem;
    padding-bottom: 0rem;
    text-align: center;
  }
`
interface Props {
    homeImages: string[];
}
export default function Inicio(props: Props) {
    return (
        // <Grid container spacing={3} sx={{paddingTop:15}}>
        //     <Grid item xs={8}>
        //         <HomeImg
        //             src={props.homeImages[0]}
        //         />
        //     </Grid>
        //     <Grid item xs={4} sx={{alignSelf:'center'}}>
        //         <Typography variant="h1" sx={{textAlign:'center'}}>
        //             Medicina
        //         </Typography>
        //         <Typography variant="h1" sx={{textAlign:'center'}}>
        //             Tradicional China
        //         </Typography>
        //     </Grid>
        // </Grid>
        // <Box position="relative" display="inline-block">
        //     {/* Contenedor de la imagen */}
        //     <HomeImg
        //         src={props.homeImages[0]} // Reemplaza "ruta_de_la_imagen.jpg" con la URL o ruta de tu imagen
        //         alt="Imagen de fondo"
        //     />
        //     {/* Contenedor del texto superpuesto */}
        //     <Box
        //         position="absolute"
        //         top={0}
        //         left={0}
        //         width="100%"
        //         height="100%"
        //         display="flex"
        //         justifyContent="center"
        //         alignItems="center"
        //         color="#000000" // Color del texto (puedes personalizarlo)
        //         fontWeight="bold" // Puedes ajustar el fontWeight según tus necesidades
        //     >
        //         <Typography variant="h1" sx={{marginLeft:150}}>
        //             Tu texto superpuesto {/* Texto que se superpondrá */}
        //         </Typography>
        //     </Box>
        // </Box>
        <HomeContainer>
            <HomeImg
                src={props.homeImages[0]} // Reemplaza "ruta_de_la_imagen.jpg" con la URL o ruta de tu imagen
                alt="Imagen de fondo"
            />
            <TextContainer>
                <Typography variant="h1" sx={{fontSize:60 ,letterSpacing:5}} >
                    Medicina 
                </Typography>
                <Typography variant="h1" sx={{fontSize:60 ,letterSpacing:5}}>
                Tradicional China
                </Typography>
            </TextContainer>
        </HomeContainer>
    )
}