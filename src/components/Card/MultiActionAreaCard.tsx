import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions} from '@mui/material';
import image from "./contemplative-reptile.jpg"
import {postType} from "../../state/posts-reducer";
import {addCardTC} from "../../state/card-reducer";
import {useAppDispatch} from "../../state/store";
import {Link} from "react-router-dom";

type CardType = {
    item: postType
}
export default function MultiActionAreaCard({item}: CardType) {

    const dispatch = useAppDispatch()
    const addCard = (id: number) => {
        dispatch(addCardTC(id))
    }

    return (
        <Card sx={{maxWidth: 220, maxHeight: 280, margin: '10px'}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="90"
                    image={image}
                    alt="green iguana"
                />
                <CardContent sx={{height: "110px"}}>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.title.length > 9 ?
                            item.title.slice(0, 9).replace(/^./, item.title[0].toUpperCase()) + "..." :
                            item.title.replace(/^./, item.title[0].toUpperCase())
                        }
                    </Typography>
                    <Typography variant="body2" color="text.secondary">

                        {item.body.length > 9 ?
                            item.body.slice(0, 80).replace(/^./, item.body[0].toUpperCase()) + "..." :
                            item.body.replace(/^./, item.body[0].toUpperCase())
                        }
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link to="/home/card">
                    <Button size="small" color="primary" onClick={() => addCard(item.id)}>
                        Share
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
}