import { Button, Card, CardActions, Grid, Link, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const useStylesContact = makeStyles(() => ({
    contactContainer: {
        '@media (max-width: 1250px)': {
            flexDirection: 'row'
        }
    },
    contactService: {
        padding: '50px',

    },
    contactCard: {
        border: 'none',
        boxShadow: 'none'
    },
    contactButton: {
        background: '#FFC800',
        border: 'solid 2px #FFC800',
        color: 'black',
        borderRadius: '3%',
        marginTop: '20px',
        '&:hover': {
            background: '#E6B400', // Color de fondo cuando el cursor está sobre el botón
        },
    },
    socialsButton: {
        color: 'black',
        // backgroundColor: 'black'
        '&:hover': {
            color: '#FFC800'
        }
    }
}))
export default function Taichi() {

    const contactStyles = useStylesContact();
    return (
        <Grid container>
            <Grid container direction={"column"} className={contactStyles.contactContainer}>
                <Grid item xs={12} md={12} xl={12} className={contactStyles.contactService}>
                    <Card className={contactStyles.contactCard}>
                        <Typography variant="h5" fontWeight={'bold'}>
                            Bruno Brutti

                        </Typography>
                        <Typography variant="h6" >

                            «Un viaje de 1000 millas comienza con el primer paso». Lao Zi

                        </Typography>
                        <Button size={'large'} color="primary" className={contactStyles.contactButton}>
                            <Typography>
                                Contáctame
                            </Typography>
                        </Button>
                    </Card>
                </Grid>
                <Grid item xs={12} md={12} xl={12} className={contactStyles.contactService}>
                    <Card className={contactStyles.contactCard}>
                        <Typography variant='h5' fontWeight={'bold'}>
                            Contacto
                        </Typography>
                        <Typography>
                            Email de contacto:
                        </Typography>
                        <Link href='mailto:bruttibrunoo@gmail.com' underline="none" color="inherit" fontWeight={'bold'}>
                            bruttibrunoo@gmail.com
                        </Link>
                        <CardActions>
                            <Button size="large" className={contactStyles.socialsButton}>
                                <Link href="#" underline="none" color="inherit">
                                    <InstagramIcon />
                                </Link>
                            </Button>
                            <Button size="large" className={contactStyles.socialsButton}>
                                <Link href="#" underline="none" color="inherit">
                                    <FacebookIcon />
                                </Link>
                            </Button>
                            <Button size="large" className={contactStyles.socialsButton}>
                                <Link href="#" underline="none" color="inherit">
                                    <WhatsAppIcon />
                                </Link>
                            </Button>

                        </CardActions>
                    </Card>
                </Grid>
            </Grid>

        </Grid>
    )
}