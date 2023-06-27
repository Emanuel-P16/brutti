import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

interface Props {
    images: string[];
}

export default function Cursos(props: Props) {
    return (
        <Grid
            container spacing={8}
        >
            <Grid item xs={4}>
                <Card sx={{ maxWidth: 600 }}>
                    <CardMedia
                        sx={{ height: 300, width: 600 }}
                        image={props.images[0]}
                        title="chikun"
                    />
                    <CardContent>
                        <Typography variant='h6' color="black" noWrap={false}>
                            En este curso vamos a profundizar en los conocimientos de los antiguos taoístas para poder generar una armonización desde uno mismo.No vamos a buscar afuera, si no que adentro.
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center' }}>
                        <Button size="medium" href='https://www.udemy.com/course/mindfulness-taoista/?referralCode=017D1149FAFE5F5C3D3C#instructor-1'>Empezar</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card sx={{ maxWidth: 600 }}>
                    <CardMedia
                        sx={{ height: 300, width: 600 }}
                        image={props.images[0]}
                        title="chikun"
                    />
                    <CardContent>
                        <Typography variant='h6' color="black" noWrap={false}>
                            En este curso vamos a profundizar en los conocimientos de los antiguos taoístas para poder generar una armonización desde uno mismo.No vamos a buscar afuera, si no que adentro.
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center' }}>
                        <Button size="medium" href='https://www.udemy.com/course/mindfulness-taoista/?referralCode=017D1149FAFE5F5C3D3C#instructor-1'>Empezar</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card sx={{ maxWidth: 600 }}>
                    <CardMedia
                        sx={{ height: 300, width: 600 }}
                        image={props.images[0]}
                        title="chikun"
                    />
                    <CardContent>
                        <Typography variant='h6' color="black" noWrap={false}>
                            En este curso vamos a profundizar en los conocimientos de los antiguos taoístas para poder generar una armonización desde uno mismo.No vamos a buscar afuera, si no que adentro.
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center' }}>
                        <Button size="medium" href='https://www.udemy.com/course/mindfulness-taoista/?referralCode=017D1149FAFE5F5C3D3C#instructor-1'>Empezar</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    )
}