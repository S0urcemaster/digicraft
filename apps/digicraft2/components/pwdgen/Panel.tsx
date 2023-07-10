import * as React from 'react'
import {presets} from './worddb'
import PanelRow from './PanelRow'
import {Row, useRows} from './pwdgenContext'
import {ImageButton, TextInput} from '../ui/Form'
import angleUp from '/public/fa/angle-up.svg'
import {useEffect, useState} from 'react'
import {RotatingLines} from 'react-loader-spinner'

type Props = {
	panelHeight: number
}

export default function Panel(props: Props) {

	const {rows, preset, changePreset, password, setPassword, loading} = useRows()
	const [text, setText] = useState(password)


	useEffect(() => {
		setText(password)
	}, [password])

	return (
		<div style={{fontSize: '20px', background: '#bbbbbb', height: props.panelHeight +'px', padding: '5px 5px 5px 8px'}}>
			<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', paddingBottom: '10px', alignItems: 'baseline'}}>
				<div style={{textShadow: '1px 1px 2px gray'}}>Long Pass Maker</div>
				<div style={{display: 'flex', alignItems: 'baseline'}}>
					Entwurf&nbsp;
					<TextInput onChange={event => setText(event.target.value)} value={text} style={{width: '340px', height: '26px'}} />
					<ImageButton width={30} height={30} padding={5} onClick={() => setPassword(text)} src={angleUp} />
				</div>
				<div style={{display: 'flex', justifyContent: 'end'}}>
					Preset&nbsp;
					<select value={preset.name} onChange={event => changePreset(event.target.value)}>
						{presets.map((preset, id) => (
							<option key={id}>{preset.name}</option>
						))}
					</select>
				</div>
			</div>
			{loading ?
				<RotatingLines
					width = "80"
					strokeColor="black"
					strokeWidth="5"
					ariaLabel = 'three-dots-loading'
				/>
				:
				rows.map((row: Row, id: React.Key) => {
				return (
					<PanelRow key={id} row={row} />
				)
			})}
		</div>
	)
}