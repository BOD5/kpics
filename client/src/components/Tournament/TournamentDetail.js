import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import ImageStepper from '../additional/ImageStepper';

const AutoplaySwipeableViews = autoPlay(SwipeableViews);

const imgArr = [
	{
		label: 'San Francisco – Oakland Bay Bridge, United States',
		imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
	},
	{
		label: 'Bird',
		imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
	},
	{
		label: 'Bali, Indonesia',
		imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
	},
	{
		label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
		imgPath:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
	},
	{
		label: 'Goč, Serbia',
		imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
	},
];

const TournamentDetail = (props) => {
	const tournament = props.tournament;
	return (
		<div>
			<ImageStepper images={imgArr} />
			<div>
				<Typography>
					{tournament.title}
				</Typography>
			</div>
			<div>
				<Typography>
					{tournament.caption}
				</Typography>
			</div>
			<div>
				<Typography>
					Дати проведення
				</Typography>
			</div>
			<div>
				<Typography>
					Призи
				</Typography>
			</div>
			<div>
				<Button>
					Зареєструватись	
				</Button>
			</div>
			<div>
				<Typography>
					Команди
				</Typography>
			</div>
			<div>
				<Typography>
					Турнірна таблиця
				</Typography>
			</div>
		</div>
	);
};

TournamentDetail.propTypes = {
	tournament: PropTypes.object
};

export default TournamentDetail;