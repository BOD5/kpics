import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		[theme.breakpoints.up('xs')] :{
			maxWidth: 450,
		},
		[theme.breakpoints.down('xs')]:{
			maxWidth: 'full',
			padding: 0,
		}
	},
}));

const TournamentCard = (props) => {
	const classes = useStyles();

	const tournamentInfo = props.tournamentInfo;

	return (
		<Container className={classes.root}>
			<Card >
				<CardActionArea>
					<CardMedia
						component="img"
						alt="Contemplative Reptile"
						height="140"
						image={tournamentInfo.image}
						title="Contemplative Reptile"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{tournamentInfo.title}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							{tournamentInfo.caption}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary">
						Registration
					</Button>
					<Button size="small" color="primary">
						Learn More
					</Button>
				</CardActions>
			</Card>
			<Divider/>
		</Container>
	);
};

TournamentCard.propTypes = {
	tournamentInfo: PropTypes.object
};

export default TournamentCard;