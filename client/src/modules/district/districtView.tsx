import React, { ReactElement } from 'react';
import { makeStyles } from '@material-ui/core';
import { EntityId } from '@reduxjs/toolkit';

import { useAppSelector } from '../../components/store';
import { Lot } from './lot';
import { selectDistrictById } from './districtSlice';

const useStyles = makeStyles({
	root: {
		width: '100%',
		height: '100%',
		display: 'flex',
		flexWrap: 'wrap',
		backgroundColor: 'grey',
	},
});

export interface DistrictViewProps {
	districtId: EntityId;
}

export function DistrictView(props: DistrictViewProps): ReactElement {
	const { districtId } = props;

	const classes = useStyles();

	const district = useAppSelector((state) =>
		selectDistrictById(state, districtId)
	);

	return (
		<div className={classes.root}>
			{district
				? district.lots.map((lot, index) => (
						<Lot
							key={`${district.name}-lot-${index}`}
							districtId={districtId}
							lot={lot}
							index={index}
						/>
				  ))
				: null}
		</div>
	);
}