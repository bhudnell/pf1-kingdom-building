import React, { ReactElement } from 'react';
import {
	Checkbox,
	FormControlLabel,
	Grid,
	TextField,
	Tooltip,
	Typography,
} from '@material-ui/core';

import { useAppDispatch } from '../../components/store';
import { buildingAdded, buildingRemoved } from '../settlement';
import {
	District,
	nameUpdated,
	pavedUpdated,
	sewersUpdated,
} from './districtSlice';
import { DistrictTooltip } from './districtTooltip';
import { DistrictBorderGrid } from './districtBorderGrid';
import { BuildingDisplayType } from './buildingTypes';

export interface DistrictDetailsProps {
	district: District;
}

export function DistrictDetails(props: DistrictDetailsProps): ReactElement {
	const { district } = props;

	const dispatch = useAppDispatch();

	const usedLots = district.lotTypeList.filter((lotType) => lotType).length;

	function toggleChecked(
		building: BuildingDisplayType,
		checked: boolean
	): void {
		if (building === 'Paved Streets') {
			dispatch(pavedUpdated({ districtId: district.id, paved: checked }));
		} else if (building === 'Sewer System') {
			dispatch(sewersUpdated({ districtId: district.id, sewers: checked }));
		}

		if (checked) {
			dispatch(
				buildingAdded({ settlementId: district.settlementId, building })
			);
		} else {
			dispatch(
				buildingRemoved({ settlementId: district.settlementId, building })
			);
		}
	}

	return (
		<Grid container spacing={2} alignItems="center" justify="space-evenly">
			<Grid container item spacing={8} alignItems="center">
				<Grid item>
					<TextField
						value={district.name}
						onChange={(e) =>
							dispatch(
								nameUpdated({ districtId: district.id, name: e.target.value })
							)
						}
					/>
				</Grid>
				<Grid item>
					<Typography>Used Lots: {usedLots}</Typography>
				</Grid>
				<Grid item>
					<Typography>Free Lots: {36 - usedLots}</Typography>
				</Grid>
				<Grid item>
					<Tooltip title={<DistrictTooltip displayType="Sewer System" />}>
						<FormControlLabel
							control={
								<Checkbox
									checked={district.paved}
									onChange={(e) =>
										toggleChecked('Paved Streets', e.target.checked)
									}
								/>
							}
							label="Paved Streets"
						/>
					</Tooltip>
				</Grid>
				<Grid item>
					<Tooltip title={<DistrictTooltip displayType="Sewer System" />}>
						<FormControlLabel
							control={
								<Checkbox
									checked={district.sewers}
									onChange={(e) =>
										toggleChecked('Sewer System', e.target.checked)
									}
								/>
							}
							label="Sewer System"
						/>
					</Tooltip>
				</Grid>
			</Grid>
			<DistrictBorderGrid district={district} name="North" direction="north" />
			<DistrictBorderGrid district={district} name="South" direction="south" />
			<DistrictBorderGrid district={district} name="East" direction="east" />
			<DistrictBorderGrid district={district} name="West" direction="west" />
		</Grid>
	);
}
