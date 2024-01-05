import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { makeStyles } from '@mui/styles'

interface Props {
    images: string[];
}
const useStylesServices = makeStyles(() => ({
    centerSection: {
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        marginBottom: '5rem',
        padding: '0 5rem',
        '@media (max-width: 1250px)': {
            padding: '0 2rem'
        }
    },
    imageServices: {
        borderRadius: '5%',
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
export default function Cursos(props: Props) {
    const classesServices = useStylesServices();
    return (
        <Grid
            container
        >
            <Grid container direction='row' className={classesServices.centerSection}>
                <Grid item xs={12} md={12} xl={12} className={classesServices.centerCard}>
                    <Card sx={{ maxWidth: 1000, maxHeight: 1000 }} className={classesServices.card}>
                        <CardMedia
                            sx={{ height: 600, width: 1000 }}
                            image={props.images[0]}
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
                                        Arte marcial transmitido para la ascensión de la conciencia. Iniciantes en el camino del la virtud.
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
                <Grid item xs={12} md={12} xl={12} className={classesServices.centerCard}>
                    <Card sx={{ maxWidth: 1000, maxHeight: 1000 }} className={classesServices.card}>
                        <CardMedia
                            sx={{ height: 600, width: 1000 }}
                            image={props.images[1]}
                            title="chikun"
                            className={classesServices.imageServices}
                        />
                        <Grid container direction='row'>
                            <Grid item xs={12}>
                                <CardContent className={classesServices.cardContent}>
                                    <Typography variant='h3' color="black" noWrap={false} borderBottom={2}>
                                        Encontrá tu equilibrio con chi kun TAOISTA
                                    </Typography>
                                    <Typography variant='h6' color="black" noWrap={false}>
                                        Encontra tu propio equilibrio utilizando esta filosofofía
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Grid item xs={12} display={'flex'} justifyContent={'center'}>
                                <CardActions>
                                    <Button size='small' color='secondary' href='https://www.udemy.com/course/mindfulness-taoista/'  className={classesServices.buttonServices}>
                                        {/* className={classesServices.buttonServices}/ */}
                                        <Typography variant='subtitle1' fontWeight='bold'>¡Suscribite ahora!</Typography>
                                    </Button>
                                </CardActions>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item xs={12} md={12} xl={12} className={classesServices.centerCard}>
                    <Card sx={{ maxWidth: 1000, maxHeight: 1000 }} className={classesServices.card}>
                        <CardMedia
                            sx={{ height: 600, width: 1000 }}
                            image={props.images[2]}
                            title="chikun"
                            className={classesServices.imageServices}
                        />
                        <Grid container direction='row'>
                            <Grid item xs={12}>
                                <CardContent className={classesServices.cardContent}>
                                    <Typography variant='h3' color="black" noWrap={false} borderBottom={2}>
                                        Tai chi mental - Qi gong.
                                    </Typography>
                                    <Typography variant='h6' color="black" noWrap={false}>
                                        Meditación y conocimiento de la medicina taoísta
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Grid item xs={12} display={'flex'} justifyContent={'center'}>
                                <CardActions>
                                    <Button size='small' color='secondary' href='https://www.udemy.com/course/qi-gong-sanacion-de-los-5-organos/'  className={classesServices.buttonServices} >
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