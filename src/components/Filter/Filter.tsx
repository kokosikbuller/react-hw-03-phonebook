import React, { FC } from 'react';

interface Props {
	filter: string;
	changeFilter: (event: any) => void;
}

const Filter: FC<Props> = ({ filter, changeFilter }) => {
	return (
		<>
			<input
				type='text'
				title='Посик по имени'
				value={filter}
				onChange={changeFilter}
			/>
		</>
	);
};

export default Filter;
