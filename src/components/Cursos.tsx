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
    },
    imageServices: {
        borderRadius: '5%',
    },
    buttonServices: {
        background: '#FFC800',
        color: 'black',
        position: 'absolute',
        bottom: 0,
        marginBottom: '15px',
        marginLeft: '-550px',
        width: '200px',
        height: '50px',
        borderRadius: '50px',
        '&:hover': {
            background: '#E6B400', // Color de fondo cuando el cursor está sobre el botón
        },
    },
    centerCard: {
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        marginBottom: '200px',
        maxHeight: '600px'

    },
    card: {
        border: '2px solid #ffffff',
        boxShadow: '5px 1px 15px #ffffff',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',

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
                    <Card sx={{ maxWidth: 1500, maxHeight: 1500 }} className={classesServices.card}>
                        <CardMedia
                            sx={{ height: 500, width: 1000 }}
                            image={props.images[0]}
                            title="chikun"
                            className={classesServices.imageServices}
                        />
                        <CardContent>
                            <Typography variant='h6' color="black" noWrap={false}>
                                En este curso vamos a profundizar en los conocimientos de los antiguos taoístas para poder generar una armonización desde uno mismo.No vamos a buscar afuera, si no que adentro.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size='small' color='secondary' className={classesServices.buttonServices}>
                                <Typography variant='subtitle1' fontWeight='bold'>Reservar Turno</Typography>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={12} xl={12} className={classesServices.centerCard}>
                    <Card sx={{ maxWidth: 1500, maxHeight: 1500 }} className={classesServices.card}>
                        <CardMedia
                            sx={{ height: 500, width: 1000 }}
                            image={props.images[1]}
                            title="chikun"
                            className={classesServices.imageServices}
                        />
                        <CardContent>
                            <Typography variant='h6' color="black" noWrap={false}>
                                En este curso vamos a profundizar en los conocimientos de los antiguos taoístas para poder generar una armonización desde uno mismo.No vamos a buscar afuera, si no que adentro.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size='small' color='secondary' className={classesServices.buttonServices} ><Typography variant='subtitle1' fontWeight='bold'>Reservar Turno</Typography></Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={12} xl={12} className={classesServices.centerCard}>
                    <Card sx={{ maxWidth: 1500, maxHeight: 1500 }} className={classesServices.card}>
                        <CardMedia
                            sx={{ height: 500, width: 1000 }}
                            image={props.images[2]}
                            title="chikun"
                            className={classesServices.imageServices}
                        />
                        <CardContent>
                            <Typography variant='h6' color="black" noWrap={false}>
                                En este curso vamos a profundizar en los conocimientos de los antiguos taoístas para poder generar una armonización desde uno mismo.No vamos a buscar afuera, si no que adentro.
                            </Typography>
                        </CardContent>
                        <CardActions >
                            {/* <Button size="medium" href='https://www.udemy.com/course/mindfulness-taoista/?referralCode=017D1149FAFE5F5C3D3C#instructor-1'>Empezar</Button> */}
                            <Button size='small' color='secondary' className={classesServices.buttonServices} href='https://www.udemy.com/course/mindfulness-taoista/?referralCode=017D1149FAFE5F5C3D3C#instructor-1' ><Typography variant='subtitle1' fontWeight='bold'>Reservar Turno</Typography></Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    )
}