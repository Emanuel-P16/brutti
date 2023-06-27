import { Grid, Typography, styled } from '@mui/material';
import styledComponent from 'styled-components'


const MedImage = styledComponent.img`
 max-width: 500px;
  width: 100%;
  height: 50vh;
  padding: 10px;
  border-radius: 20px;
  `;

const StyledGridContainer = styled(Grid)({
    // height:'100vh'
})

interface Props{
    images: string[]
}
export default function Medicina(props: Props) {
    return (
        <StyledGridContainer container direction='row'spacing={2} justifyContent="center" alignItems="center" >
            <Grid item xs={12}>
                <Typography
                    variant="h1"
                    align='center'
                >
                    Medicina Tradicional China
                </Typography>
            </Grid>
            <Grid container item xs={12} justifyContent="center" alignItems="center">
                <MedImage
                    src={props.images[0]}
                />
                <MedImage
                    src={props.images[1]}
                    
                />
            </Grid>
            <Grid item xs={12}>
                <Typography
                    variant="h6"
                >
                    La medicina china, con su enfoque holístico y su larga historia de eficacia, ha sido utilizada durante siglos para tratar una amplia gama
                    de dolencias y promover la salud en general. Esta medicina tradicional se basa en la idea de equilibrio y armonía, y tiene como objetivo 
                    abordar tanto los síntomas físicos como los aspectos emocionales y mentales de una persona.Una de las técnicas más conocidas de la medicina china
                     es la acupuntura. Mediante la inserción de agujas finas en puntos específicos del cuerpo, se estimula el flujo de energía,
                    conocido como Qi. Esto ayuda a desbloquear los canales de energía y a restaurar el equilibrio, lo que puede aliviar el dolor, reducir el estrés y mejorar tu bienestar general.
                </Typography>
            </Grid>
        </StyledGridContainer>
    )
}