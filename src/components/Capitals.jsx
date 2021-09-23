/** @format */

import React from 'react';

export default function Capitals(props) {
	return (
		<tr>
			<td>
				<strong>{props.min}</strong>
			</td>
			<td>
				<strong>{props.max}</strong>
			</td>
			<td>
				<strong>{props.city}</strong>
			</td>
		</tr>
	);
}
