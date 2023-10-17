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
        padding: '0 5rem'
    },
    imageServices: {
        borderRadius: '50%',
        position: 'absolute',
        marginTop: '-100px',
        border: '3px solid black'
    },
    buttonServices: {
        background: '#FFC800',
        color: 'black',
        position: 'absolute',
        bottom: 0,
        marginBottom: '-25px',
        marginLeft: '-100px',
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
        marginBottom: '200px'

    },
    card: {
        border: '2px solid #b3b3b3',
        boxShadow: '5px 1px 15px #cdcdcd',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',

    }
}))
export default function Servicios(props: Props) {

    const classesServices = useStylesServices();
    return (
        <Grid
            container
        >
            <Grid container direction={'row'} className={classesServices.centerSection}>
                <h1>Conozca los servicios que ofrezco</h1>
                <h2>Ofrezco clases en línea personalizadas que se adaptan a tu nivel y ubicación, sin importar dónde te encuentres.
                    Si ya tenés experiencia y buscas mejorar aún más, ¡no dudes en contactarnos para llevar tu bienestar al siguiente nivel!</h2>
            </Grid>
            <Grid container direction='row' style={{ marginTop: '100px' }}
            >
                <Grid item xs={12} md={12} xl={6} className={classesServices.centerCard}>
                    <Card sx={{ maxWidth: 500 }} className={classesServices.card}>
                        <CardMedia
                            sx={{ height: 300, width: 300 }}
                            component="img"
                            image={props.images[0]}
                            className={classesServices.imageServices}
                        />
                        <CardContent style={{ paddingTop: '220px' }}>
                            <Typography variant='h3' fontWeight='bold'>
                                Acupuntura
                            </Typography>
                            <Typography variant='subtitle1'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem molestiae laborum autem molestias? Asperiores expedita, ex eaque quo tempore distinctio cumque error recusandae sunt modi adipisci aut illo dolore rem.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size='small' color='secondary' className={classesServices.buttonServices} ><Typography variant='subtitle1' fontWeight='bold'>Reservar Turno</Typography></Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={12} xl={6} className={classesServices.centerCard}>
                    <Card sx={{ maxWidth: 500 }} className={classesServices.card}>
                        <CardMedia
                            sx={{ height: 300, width: 300 }}
                            component="img"
                            image={props.images[0]}
                            className={classesServices.imageServices}
                        />
                        <CardContent style={{ paddingTop: '220px' }}>
                            <Typography variant='h3' fontWeight='bold'>
                                Acupuntura
                            </Typography>
                            <Typography variant='subtitle1'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem molestiae laborum autem molestias? Asperiores expedita, ex eaque quo tempore distinctio cumque error recusandae sunt modi adipisci aut illo dolore rem.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size='small' color='secondary' className={classesServices.buttonServices} ><Typography variant='subtitle1' fontWeight='bold'>Reservar Turno</Typography></Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={12} xl={6} className={classesServices.centerCard}>
                    <Card sx={{ maxWidth: 500 }} className={classesServices.card}>
                        <CardMedia
                            sx={{ height: 300, width: 300 }}
                            component="img"
                            image={props.images[0]}
                            className={classesServices.imageServices}
                        />
                        <CardContent style={{ paddingTop: '220px' }}>
                            <Typography variant='h3' fontWeight='bold'>
                                Acupuntura
                            </Typography>
                            <Typography variant='subtitle1'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem molestiae laborum autem molestias? Asperiores expedita, ex eaque quo tempore distinctio cumque error recusandae sunt modi adipisci aut illo dolore rem.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size='small' color='secondary' className={classesServices.buttonServices} ><Typography variant='subtitle1' fontWeight='bold'>Reservar Turno</Typography></Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={12} xl={6} className={classesServices.centerCard}>
                    <Card sx={{ maxWidth: 500 }} className={classesServices.card}>
                        <CardMedia
                            sx={{ height: 300, width: 300 }}
                            component="img"
                            image={props.images[0]}
                            className={classesServices.imageServices}
                        />
                        <CardContent style={{ paddingTop: '220px' }}>
                            <Typography variant='h3' fontWeight='bold'>
                                Acupuntura
                            </Typography>
                            <Typography variant='subtitle1'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem molestiae laborum autem molestias? Asperiores expedita, ex eaque quo tempore distinctio cumque error recusandae sunt modi adipisci aut illo dolore rem.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size='small' color='secondary' className={classesServices.buttonServices} ><Typography variant='subtitle1' fontWeight='bold'>Reservar Turno</Typography></Button>
                        </CardActions>
                    </Card>
                </Grid>

            </Grid>
        </Grid>

    )
}