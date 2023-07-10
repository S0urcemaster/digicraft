import * as React from 'react'
import {wordTypes} from './worddb'
import {ImageButton, TextInput} from '../ui/Form'
import {Spacer} from '../ui/Layout'
import rotate from '/public/fa/rotate.svg'
import angleUp from '/public/fa/angle-up.svg'
import angleDown from '/public/fa/angle-down.svg'
import plus from '/public/fa/plus.svg'
import minus from '/public/fa/minus.svg'
import {Row, useRows} from './pwdgenContext'

type Props = {
	row: Row
};

export default function PanelRow(props: Props) {

	const {insertRow, deleteRow, rowUp, rowDown, typeChanged, variationChanged, reload, setValue} = useRows()

	function changeType(tipe: string) {
		props.row.tipe = wordTypes[tipe]
		typeChanged(props.row.tipe)
	}

	return (
		<div style={{display: 'grid',
			gridTemplateColumns: '3fr minmax(0, 3fr) 40px 4fr 1fr 1fr 1.1fr', gap: '5px 10px', marginBottom: '3px'}}>
			<select value={props.row.tipe.singular} onChange={value => typeChanged(props.row, value.target.value)}>
				{Object.values(wordTypes).map((tipe, id: number) => {
					return (
						<option key={id} value={tipe.singular}>{tipe.translation}</option>
					)
				})}
			</select>
			{props.row.variation ?
				<select value={props.row.variation.dbName} onChange={value => variationChanged(props.row, value.target.value)}
						  style={{overflow:'hidden'}}
				>
					{props.row.variations?.map((variation: any, id: number) => (
						<option key={id} value={variation.dbName}>
							{variation.translation}
						</option>
					))}
				</select>
				:
				<div></div>
			}
			<ImageButton onClick={() => reload(props.row)} src={rotate} height={25} width={25} padding={5} />

			<TextInput value={props.row.value} style={{margin: '0 4px 0 7px', width: '100%'}}
						  onChange={value => setValue(props.row, value.target.value)} />

			<Spacer width={10} inline />

			<div style={{whiteSpace:'nowrap'}}>
				<ImageButton onClick={() => insertRow(props.row)} src={plus} height={25} width={25} padding={5} />
				<Spacer width={5} inline />
				<ImageButton onClick={() => deleteRow(props.row)} src={minus} height={25} width={25} padding={5} />
			</div>

			<div style={{whiteSpace:'nowrap'}}>
				<ImageButton onClick={() => rowUp(props.row)} src={angleUp} height={25} width={25} padding={5} />
				<Spacer width={5} inline />
				<ImageButton onClick={() => rowDown(props.row)} src={angleDown} height={25} width={25} padding={5} />
			</div>

		</div>
	)
}