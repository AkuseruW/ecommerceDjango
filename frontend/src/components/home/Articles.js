import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Link } from "react-router-dom";
// import CardActions from '@mui/material/CardActions';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import FavoriteIcon from '@mui/icons-material/Favorite';


export default function Article({ article }) {


    return (
        <>
        <Link to={`article/${article.slug}`}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="194"
                    image={article.image}
                    alt={article.name}
                    className="card-image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {article.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {article.price} &euro;
                    </Typography>
                </CardContent>
                {/* <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                </CardActions> */}
            </Card>
        </Link>

        </>
    );
}