import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family';
import Member from './member';

ReactDOM.render(
	<div>
		<Family lastName='Silva'>
			<Member name='João1' />
			<Member name='Maria1' />
			<Member name='Jośe1' />
			<Member name='Pedro1' />
		</Family>
	</div>,
	document.getElementById('app')
)