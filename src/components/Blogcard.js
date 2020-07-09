import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });

export default function Blogcard(props) {
    const {title, description, content, index, handleOpenEdit, handleDelete} = props;
//   const classes = useStyles();

  return (
    <Card style={{margin: 10}}>
      <CardContent>
        <Typography variant="h4" component="h2">
            {title}
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
        <Typography variant="body1" component="p">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{color: 'blue'}} onClick={e => handleOpenEdit(index)}>Edit</Button>
        <Button size="small" style={{color:"red"}} onClick={e => handleDelete(index)}>Delete</Button>
      </CardActions>
    </Card>
  );
}