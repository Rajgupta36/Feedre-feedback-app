import * as React from 'react';
import img from '../assets/aa.jpg';
import {alpha, Box, Container, Stack, Typography, Grid} from '@mui/material';
import {DropDownButton, FeedbackCard} from './index.js';
import {TypeAnimation} from 'react-type-animation';
import {useSelector} from 'react-redux';
import axios from 'axios';
import Excel from './Excel.jsx';

export default function Hero() {
	const role = useSelector((state) => state.currentUser?.user?.role);
	const user = useSelector((state) => state.currentUser?.user);
	const accessToken = useSelector((state) => state.currentUser?.accessToken);
	const [feedbacks, setFeedbacks] = React.useState([]);

	React.useEffect(() => {
		const getUserFeedbacks = async () => {
			const res = await axios.get(
				'http://localhost:3000/feedback/getuserfeedbacks',
				{
					withCredentials: true,
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				}
			);
			setFeedbacks(res?.data?.data);
			console.log('Feedback data', res?.data?.data);
		};
		getUserFeedbacks();
	}, [accessToken]);

	return (
		<Box
			id="hero"
			sx={{
				width: '100%',
				backgroundImage: `url('/path/to/your/background/image.jpg')`, // Change the background image URL here
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<Container sx={{py: 0}}>
				<Grid container spacing={0}>
					<div className="h-[50vh] w-full sm:h-[81vh] sm:w-[43%] flex flex-col  justify-center  items-start p-5 ">
						<p className={`md:ml-[8vh]`}>
							<h1
								className={`font-bold  text-orange-700 text-4xl mt-2 sm:text-5xl px-2`}
							>
								{' '}
								Feed<span className="text-gray-500">
									RE
								</span>{' '}
							</h1>
							<h1 className="font-bold w-[100%] sm:w-[100%] mt-4 p-2 sm:text-xl">
								Welcome to Feedre! Your feedback is valuable to
								us. This platform allows you to submit feedback
								on various aspects, helping us improve our
								services. Join us in shaping a better
								experience!
							</h1>
							<TypeAnimation
								sequence={[
									' Better Experiences ',
									2000,
									'  Improvement',
									2000,
									' Building Trust',
									2000,
									' More Engagement    ',
									2000,
								]}
								wrapper="span"
								speed={50}
								style={{
									fontSize: ' 2rem',
									display: 'inline-block',
									paddingLeft: '5px',
								}}
								repeat={Infinity}
							/>
						</p>
						{/* <button className='bg-blue-700 rounded-md text-white  px-4 py-1 mt-5 '>Get Started </button> */}
					</div>
					{/* <Grid item xs={12} sm={9}>
						<Box sx={{textAlign: 'center', py: 9, px: 20}}>
							<Typography variant="h4" color="primary">
								Welcome to{' '}
								<span style={{color: 'orange'}}>Feed</span>
								<span style={{color: 'gray'}}>RE</span>
							</Typography>
							<Typography variant="body1" sx={{mt: 3}}>
								Your Voice Matters! This platform bridges the
								gap between students and departments, allowing
								seamless feedback submission and in-depth
								analysis. Join us in shaping a better academic
								experience!
							</Typography>
						</Box>
					</Grid> */}
					<Grid item xs={12} sm={6}>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								height: '100%',
							}}
						>
							<Stack
								direction={{xs: 'column', sm: 'row'}}
								alignSelf="center"
								spacing={1}
								sx={{pt: 2, width: {xs: '100%', sm: 'auto'}}}
							>
								{role !== 'admin' && (
									<DropDownButton
										variant="contained"
										mainBtn="Your Feedback Menu "
										btn1="Product Feedback"
										btn2="Student Feedback"
										btn3="Employee Feedback"
										link1="productfeedback"
										link2="studentfeedback"
										link3="employeefeedback"
									/>
								)}
							</Stack>
						</Box>
					</Grid>
				</Grid>
			</Container>
			<Box
				sx={{
					display: 'flex',
					flexDirection: {xs: 'column-reverse', sm: 'row'},
					height: {xs: '85vh', sm: '100vh'},
					padding: 3,
				}}
			>
				<Box
					sx={{
						width: {xs: '100%', sm: '55%'},
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						padding: {xs: 1, sm: 5},
					}}
				>
					<Typography
						variant="h2"
						color="primary.main"
						sx={{fontWeight: 'bold', py: 2}}
					>
						Analyzed Feedbacks
						<span className="text-orange-700">Feed</span>
						<span className="text-gray-500">RE</span>
					</Typography>
					<Typography
						variant="body1"
						sx={{fontWeight: 'bold', mt: 2}}
					>
						Elevate your feedback experience with our dynamic
						dashboard, offering a centralized hub for accessing key
						metrics, real-time updates, and actionable insights.
						Seamlessly manage courses and track feedback with ease,
						gaining valuable insights at a glance. Monitor student
						progress, oversee course management, and analyze
						feedback trends effortlessly for an enhanced user
						experience and streamlined operations.
					</Typography>
				</Box>
				<Box
					sx={{
						width: {xs: '100%', sm: '45%'},
						height: {xs: '50vh', sm: '100vh'},
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						padding: 3,
					}}
				>
					<img
						src={img}
						alt="Hero"
						style={{
							width: '100%',
							height: 'auto',
							borderRadius: '10px',
						}}
					/>
				</Box>
			</Box>
			<Container sx={{py: 8}}>
				{/* <Stack
					spacing={2}
					sx={{width: {xs: '100%', sm: '70%'}, textAlign: 'center'}}
				>
					<Typography
						variant="h2"
						sx={{
							fontSize: 'clamp(3.5rem, 10vw, 4rem)',
						}}
					>
						<Typewriter
							onInit={(typewriter) => {
								typewriter
									.typeString('Your Voice')
									.pauseFor(2000)
									.start();
							}}
						/>
					</Typography>
					<Typography
						variant="h2"
						sx={{
							fontSize: 'clamp(3rem, 10vw, 4rem)',
							color: (theme) =>
								theme.palette.mode === 'light'
									? 'primary.main'
									: 'primary.light',
						}}
					>
						<Typewriter
							onInit={(typewriter) => {
								typewriter
									.typeString('Our Improvement')
									.pauseFor(2000)
									.start();
							}}
						/>
					</Typography>

				</Stack> */}
				{user && (
					<Box
						id="image"
						sx={(theme) => ({
							mt: {xs: 8, sm: 10},
							width: '100%',
							height: {xs: 200, sm: 700},
							backgroundImage:
								theme.palette.mode === 'light'
									? 'url("/static/images/templates/templates-images/hero-light.png")'
									: 'url("/static/images/templates/templates-images/hero-dark.png")',
							backgroundSize: 'cover',
							borderRadius: '10px',
							outline: `1px solid ${alpha(
								theme.palette.divider,
								0.5
							)}`,
							boxShadow: `0 0 24px 12px ${alpha(
								theme.palette.mode === 'light'
									? '#9CCCFC'
									: '#033363',
								0.2
							)}`,
						})}
					>
						<Box sx={{width: '100%', textAlign: 'center', my: 10}}>
							<Typography variant="h4">
								Submitted Feedbacks
							</Typography>
						</Box>
						<Grid container spacing={3} sx={{p: 5}}>
							{feedbacks.map((feedback) => (
								<Grid
									item
									xs={12}
									sm={6}
									md={4}
									key={feedback._id}
								>
									<FeedbackCard
										fullName={user?.fullName}
										avatar={user?.avatar}
										comments={feedback?.comments}
										type={feedback?.type}
										ratings={feedback?.ratings}
									/>
								</Grid>
							))}
						</Grid>
					</Box>
				)}
			</Container>
			{/* Insert the Excel component here */}
			<Excel />
		</Box>
	);
}
