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

const AutoplaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles(theme => ({
	root: {
		width: 'full',
		flexGrow: 1,
	},
	header: {
		display: 'flex',
		alignItems: 'center',
		height: 50,
		paddingLeft: theme.spacing(4),
		backgroundColor: theme.palette.background.default,
	},
	img:{
		height: 255,
		maxWidth: 400,
		overflow: 'hidden',
		display: 'block',
		width: '100%',
	}
}));

const ImageStepper = (props) => {
	const imgArr = props.images;
	const classes = useStyles();
	const theme = useTheme();
	const [activeStep, setActiveStep] = React.useState(0);
	const maxSteps = imgArr.length;

	const handleNext =  () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack =  () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStepChange = (step) => {
		setActiveStep(step);
	};

	return (
		<div className={classes.root}>
			<Paper square elevation={0} className={classes.header}>
				<Typography>{imgArr[activeStep].label}</Typography>
			</Paper>
			<AutoplaySwipeableViews
				axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
				index={activeStep}
				onChangeIndex={handleStepChange}
				enableMouseEvents
			>
				{imgArr.map((step, index) => (
					<div key={step.label}>
						{Math.abs(activeStep - index) <= 2 ? (
							<img
								className={classes.img}
								src={step.imgPath}
								alt={step.label}
							/>
						): null}
					</div>
				))}
			</AutoplaySwipeableViews>
			<MobileStepper
				steps={maxSteps}
				position='static'
				variant='dots'
				activeStep={activeStep}
				nextButton={
					<Button
						size='small'
						onClick={handleNext}
						disabled={activeStep === maxSteps - 1}
					>
						Next
						{theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
					</Button>
				}
				backButton={
					<Button
						size='small'
						onClick={handleBack}
						disabled={activeStep === 0}
					>
						Prev
						{theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
					</Button> 	
				}
			>					
			</MobileStepper>	
		</div>
	);
};

ImageStepper.propTypes = {
	images: PropTypes.array,
};

export default ImageStepper;