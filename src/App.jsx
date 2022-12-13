import './App.css';

function App() {
	return (
		<div className='App'>
			<header>
				<h1 className='text-slate-900 dark:text-white'>Arbour</h1>
			</header>

			<ul className='mt-3'>
				<li>
					<a
						className='button is-outlined is-fullwidth is-white'
						target='_blank'
						href='https://open.spotify.com/artist/3pSfwb3p6BVPTYDkNdgxS2?si=1M3-SutNThyb310WW0UAvQ'
					>
						spotify
					</a>
				</li>
				<li>
					<a
						className='button is-outlined is-fullwidth is-white'
						target='_blank'
						href='https://music.apple.com/us/artist/arbour/1067870471'
					>
						apple music
					</a>
				</li>
				<li>
					<a
						className='button is-outlined is-fullwidth is-white'
						target='_blank'
						href='https://www.youtube.com/prod_arbour'
					>
						youtube
					</a>
				</li>
				<li>
					<a
						className='button is-outlined is-fullwidth is-white'
						target='_blank'
						href='https://www.instagram.com/prod_arbour/'
					>
						instagram
					</a>
				</li>
				<li>
					<a
						className='button is-outlined is-fullwidth is-white'
						target='_blank'
						href='https://twitter.com/prod_arbour'
					>
						twitter
					</a>
				</li>
				<li>
					<a
						className='button is-outlined is-fullwidth is-white'
						target='_blank'
						href='https://www.facebook.com/arbourofficial'
					>
						facebook
					</a>
				</li>
			</ul>
			<div className='footer-link'>
				<a href='https://www.hanswatkins.com'>Created by Hans Watkins</a>
			</div>
		</div>
	);
}

export default App;
