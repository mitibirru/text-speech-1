import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

function Speech() {
	const [value, setValue] = useState('');
	const { speak } = useSpeechSynthesis();

	return (
		<div className="speech">
			<div className="group">
				<h2>Text To Speech Converter Using React Js</h2>
			</div>
			<div className="group">
				<textarea value={value} onChange={e => setValue(e.target.value)} rows="10" />
			</div>
			<div className="group">
				<button onClick={() => speak({ text: value })}>Speech</button>
			</div>
		</div>
	);
}

export default Speech;
