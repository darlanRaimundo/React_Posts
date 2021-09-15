import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export const PostCard = ({ title, cover, body, id }) => (
    <Card>
        <CardActionArea>
            <CardMedia
            component="img"
            image={cover}
            alt={title}                
            />
            <CardContent>
                <Typography 
                gutterBottom 
                variant="h5" 
                component="h2" 
                >
                    {title}
                </Typography>

                <Typography 
                variant="body1" 
                color="textSecondary" 
                component="p"
                >
                    {body}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>

)