function Navbar() {
	return (
		<div>
			<nav className='navbar'>
				<div className='branding'>
					<h1>
						CashToken <span>Assessment</span>
					</h1>
				</div>
				<div className='show-on-small-screen'>
					<a href='#'>About</a>
					<a href='#'>How it Works</a>
				</div>
				<div className='auth-section'>
					<button className='login'>login</button>
					<button className='create-account'>create accout</button>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
