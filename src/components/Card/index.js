import Link from "next/link";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export const MyCard = ({ character }) => {
  const classes = useStyles();

  return (
    <Link href={`/characters/${character.id}`}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="200"
            width="345"
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            title="Contemplative Reptile"
          />
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="h5" component="h2">
              {character.name}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              noWrap={true}
              display="block"
            >
              {character.description
                ? character.description
                : "Unfortunately do not exists a description for this character"}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};
