/** @format */

import React from 'react';
import Capitals from './Capitals';

export default function Table() {
	return (
		<div>
			<table className='table'>
				<thead>
					<tr>
						<th>MIN</th>
						<th>MAX</th>
					</tr>
				</thead>
				<tbody>
					<Capitals city={"Americana"} max={20} min={10} />
					<Capitals city={"Americana"} max={20} min={10} />
					<Capitals city={"Americana"} max={20} min={10} />	
					<Capitals city={"Americana"} max={20} min={10} />
				</tbody>
			</table>
		</div>
	);
}
