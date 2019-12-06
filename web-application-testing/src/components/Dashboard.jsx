import React, { useState } from 'react';

function Dashboard() {
	const [ ballValue, setBallValue ] = useState(0);
	const [ strikeValue, setStrikeValue ] = useState(0);

	const hit = () => {
		setStrikeValue(0);
		setBallValue(0);
	};

	const foul = () => {
		setStrikeValue(strikeValue + 1);
		if (strikeValue === 3) {
			return setStrikeValue(0);
		}
	};

	const strike = () => {
		setStrikeValue(strikeValue + 1);
		if (strikeValue === 3) {
			return setStrikeValue(0);
		}
	};

	const ball = () => {
		setBallValue(ballValue + 1);
		if (ballValue === 4) {
			return setBallValue(0);
		}
	};

	return (
		<div className='Dashboard'>
			<div className='Counter'>
				<div className='CounterPlate'>
					<h2 data-testid='ball__'>Ball</h2>
					<div className='Number'>{ballValue}</div>
				</div>

				<div className='CounterPlate'>
					<h2 data-testid='strike__'>Strike</h2>
					<div className='Number'>{strikeValue}</div>
				</div>
			</div>
			<section className='Buttons'>
				<button onClick={ball} className='Button' data-testid='_button_'>
					Ball
				</button>
				<button onClick={strike} className='Button' data-testid='_button_'>
					Strike
				</button>
				<button onClick={hit} className='Button' data-testid='_button_'>
					Hit
				</button>
				<button onClick={foul} className='Button' data-testid='_button_'>
					Foul
				</button>
			</section>
		</div>
	);
}

export default Dashboard;
