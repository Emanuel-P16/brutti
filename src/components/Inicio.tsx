import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles'

const useStylesServices = makeStyles(() => ({
    centerSection: {
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        marginBottom: '5rem',
        marginTop: '200px',
        padding: '0 5rem',
        '@media (max-width: 1250px)': {
            padding: '0 2rem'
        }
    },
    imageServices: {
        // borderRadius: '5%',
        // width: '500px',
        // position: 'fixed',
        '@media (max-width: 1250px)': {
            width: '300px',
            height: '350px'
        }
    },
    buttonServices: {
        background: '#FFC800',
        color: 'black',
        borderRadius: '5%',
        '&:hover': {
            background: '#E6B400', // Color de fondo cuando el cursor está sobre el botón
        },

    },
    centerCard: {
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        marginBottom: '200px',
        maxHeight: '1000px'

    },
    card: {
        border: '2px solid #ffffff',
        boxShadow: '5px 1px 15px #ffffff',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        margin: 'auto',
        '@media (max-width: 1250px)': {
            display: 'flex',
            flexDirection: 'column'
        }
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',

    }

}))
interface Props {
    homeImages: string[];
    homeVideo: string;
}
export default function Inicio(props: Props) {
    const classesServices = useStylesServices();
    return (
        <Grid
            container
        >
            <Grid container direction='row' className={classesServices.centerSection}>
                <Grid item xs={12} md={12} xl={12} className={classesServices.centerCard}>
                    {/* <Card sx={{ maxWidth: 1000, maxHeight: 1000 }} className={classesServices.card}> */}
                    <Card className={classesServices.card}>
                        <CardMedia
                            component='video'
                            controls
                            src={props.homeVideo}
                            title="chikun"
                            className={classesServices.imageServices}
                        />
                        <Grid container direction='row'>
                            <Grid item xs={12}>
                                <CardContent className={classesServices.cardContent}>
                                    <Typography variant='h3' color="black" noWrap={false} borderBottom={2}>
                                        Tai chi (INICIACIÓN)
                                    </Typography>
                                    <Typography variant='h6' color="black" noWrap={false}>
                                        En este curso te enseñare a entrar en la sutileza de un mundo que existe pero que jamás fue entrenado, un conocimiento transmitido desde milenios donde los hombres eran sabios, en donde encontraras una herramienta para tu despertar interior.
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Grid item xs={12} display={'flex'} justifyContent={'center'}>
                                <CardActions>
                                    <Button size='small' color='secondary' href='https://www.udemy.com/course/tai-chi-chuan-iniciatico/' className={classesServices.buttonServices}>
                                        {/* className={classesServices.buttonServices}/ */}
                                        <Typography variant='subtitle1' fontWeight='bold'>¡Suscribite ahora!</Typography>
                                    </Button>
                                </CardActions>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    )
}