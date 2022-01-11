import BgImage from "../../img/bg.jpg";

function Hero() {
	return (
		<div className='masterhead'>
			<div
				style={{
					backgroundImage: `url(${BgImage})`,
					backgroundRepeat: "no-repeat",
					height: "100%",
					maxHeight: "600px",
					backgroundPosition: "center",
					backgroundSize: "cover",
					position: "relative",
				}}
				className='hero-image'
			></div>
			<div className='overlay'>
				<div className='hero-text'>
					stop the wait and make an investment today
					<div className='quote'>no more procasination</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
