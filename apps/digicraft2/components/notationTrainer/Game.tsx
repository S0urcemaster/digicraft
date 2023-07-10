import * as React from 'react'
import Board from './Board'
import {useEffect, useRef, useState} from 'react'
import {Spacer} from '../ui/Layout'
import Switch from '../ui/Switch'
import Select from '../ui/Select'
import Line from './Line'
import {errorPenalty, LineStats, useGameState} from './gameContext'
import {IconButton, TextInput} from '../ui/Form'
import {B} from '../ui/Typography'
import {toMinutes, transcriptKeyValues} from './lib'
import {series, transcripts} from './notation'
import {icons} from '../ui/Icon'
import {useLocalStorage} from '../../lib/localStorageContext'

export default function Game() {

	const {
		lineName, setLineName, flip, toggleFlipped, flipEach, toggleFlipEach,
		elapsed, textMove, setTextMove, textMoveOn, toggleTextMoveOn, showMoves, toggleShowMoves,
		lineStats, errors, restart
	} = useGameState()

	const {storageLoaded} = useLocalStorage()

	const [tab, setTab] = useState('trainer')

	const [stats, setStats] = useState<LineStats | undefined>(undefined)

	const textInputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		if(textMoveOn) {
			focusInput()
		}
	}, [])

	useEffect(() => {
		focusInput()
	}, [textMoveOn])

	useEffect(() => {
		if (lineStats) {
			setStats(lineStats)
		}
	}, [lineStats])

	function focusInput() {
		if (textMoveOn) {
			textInputRef.current!.focus()
		}
	}

	function updateLineName(name: string) {
		setLineName(name)
		focusInput()
	}

	return (
		<div style={{display: storageLoaded ? 'flex' : 'none', background: '#ccc', color: '#000'}}>
			<Board/>
			<div style={{padding: '15px 10px 5px 15px', width: '100%', position: 'relative'}}>
				<div style={{
					display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid gray',
					padding: '0 0 10px 0', margin: '0 0 10px 0',
				}}>
					<B>Chess Notation Trainer</B>
				</div>
				{tab === 'trainer' ?
					<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
						<div>
							<div style={{display: 'flex', alignItems: 'center'}}>
								<TextInput value={textMove} onChange={event => setTextMove(event.target.value)}
											  style={{width: 50}} placeholder={'e2-e4'} disabled={!textMoveOn} ref={textInputRef}/>
								<Spacer width={40} />
								<div style={{display: 'flex', alignItems: 'center'}}>
									<Switch checked={textMoveOn} onChange={() => toggleTextMoveOn()}
											  style={{margin: '0 0 0 0'}}/>
									<Spacer width={5}/>
									<span style={{margin: '0 0 0 0'}}>Textmodus</span>
								</div>
							</div>
							<Spacer height={15}/>
							<B>{lineName && transcripts[lineName!].title}</B>
							<Spacer height={10}/>
							<Line/>
							<div style={{
								position: 'absolute', bottom: 20, display: 'grid', gridTemplateColumns: '1fr 3fr',
								gap: 5, columnGap: 20, width: 250,
							}}>
								<div style={{paddingTop: 7}}><B>Zeit:</B></div>
								<div style={{display: 'flex', justifyContent: 'space-between'}}>
									<div style={{paddingTop: 7}}><B>{elapsed ? toMinutes(elapsed) : '0'}</B></div>
									<IconButton name={icons.Rotate} size={15} onClick={restart} style={{padding: '0 0 2px 0'}} />
								</div>
								<div>Fehler</div>
								<div>{errors}</div>
								<div>Zeitstrafe</div>
								<div>{errors * errorPenalty}</div>
								<Spacer height={10} />
								<Spacer height={10} />
								<div style={{whiteSpace: 'nowrap'}}>Beste Zeit:</div>
								<div>{stats ? toMinutes(stats.time) : 0}</div>
							</div>
						</div>
						<div style={{padding: '0px 0px 5px 15px'}}>
							<Select size={13} value={lineName!} onChange={(value: string) => updateLineName(value)}
									  options={series.lines.map(l => [l.name, transcripts[l.name].title])} style={{width: '100%'}}/>
							<Spacer height={10}/>
							<div style={{position: 'absolute', bottom: 20}}>
								<B>Textmodus</B>
								<Spacer height={5}/>
								<div style={{display: 'flex', alignItems: 'center'}}>
									<Switch checked={showMoves} onChange={toggleShowMoves}/>
									<Spacer width={10}/>
									<span style={{whiteSpace: 'nowrap'}}>Züge anzeigen</span>
								</div>
								<Spacer height={10}/>
								<B>Allgemein</B>
								<Spacer height={5}/>
								<div style={{display: 'flex', alignItems: 'center'}}>
									<Switch checked={flip} onChange={toggleFlipped}/>
									<Spacer width={10}/>
									<span style={{whiteSpace: 'nowrap'}}>Brett drehen</span>
								</div>
								<div style={{display: 'flex', alignItems: 'center'}}>
									<Switch checked={flipEach} onChange={toggleFlipEach}/>
									<Spacer width={10}/>
									<span style={{whiteSpace: 'nowrap'}}>Nach jedem Zug drehen</span>
								</div>
							</div>
						</div>
					</div>
					:
					<></>
				}
			</div>
		</div>
	)
}