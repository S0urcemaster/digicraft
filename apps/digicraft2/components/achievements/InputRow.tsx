import * as React from 'react'
import {CSSProperties, useState} from 'react'
import {ImageButton, TextInput} from '../ui/Form'
import {Achievement, AchievementTypes, emptyAchievement, PraiseTypes} from './context'
import addSvg from '/public/fa/plus.svg'
import check from '/public/fa/check.svg'
import {Box} from '../ui/Box'

export default function InputRow(props: { achievement: Achievement, add: Function, save: Function, edit?: boolean, style?: CSSProperties }) {

	const [title, setTitle] = useState(props.achievement.title)
	const [details, setDetails] = useState(props.achievement.details)
	const [tipe, setType] = useState(props.achievement.tipe)
	const [praise, setPraise] = useState(props.achievement.praise)
	const [dateFrom, setDateFrom] = useState(props.achievement.dateFrom)
	const [dateUntil, setDateUntil] = useState(props.achievement.dateUntil)

	function getAchievement() {
		return {title, details, tipe, praise, dateFrom, dateUntil}
	}

	function add() {
		props.add(getAchievement())
		setTitle('')
		setDetails('')
		setType(AchievementTypes.completed)
		setPraise(PraiseTypes.small[0])
		setDateFrom(emptyAchievement().dateFrom)
		setDateUntil(emptyAchievement().dateUntil)
	}

	return (
		<Box style={{...props.style}}>
			<div style={{display: 'grid', gridTemplateColumns: '2fr repeat(4, 1fr) auto', columnGap: 10}}>
				<TextInput value={title} onChange={event => setTitle(event.target.value)}
							  placeholder={'Titel'} style={{height: 25}}/>
				<div style={{display: 'flex', alignItems: 'baseline'}}>
					<span style={{marginRight: 5}}>Typ:</span>
					<select style={{height: 32}} value={tipe} onChange={event => setType(event.target.value)}>
						{Object.values(AchievementTypes).map((t, idx) => (
							<option key={idx} value={t}>{t}</option>
						))}
					</select>
				</div>
				<div style={{display: 'flex', alignItems: 'baseline'}}>
					{tipe === AchievementTypes.completed ?
						<span style={{marginRight: 5}}>am:</span> :
						<span style={{marginRight: 5}}>vom:</span>
					}
					<input style={{height: 25}} type={'date'} value={dateFrom}
							 onChange={event => setDateFrom(event.target.value)}/>
				</div>
				<div style={{display: 'flex', alignItems: 'baseline'}}>
					{tipe === AchievementTypes.ongoing ?
						<span style={{marginRight: 5}}>bis:</span> : ''
					}
					<input style={{height: 25}} type={'date'} value={dateUntil}
							 disabled={tipe === AchievementTypes.completed}
							 onChange={event => setDateUntil(event.target.value)}/>
				</div>
				<div style={{display: 'flex', alignItems: 'baseline'}}>
					<span style={{marginRight: 5}}>Lob:</span>
					<select style={{height: 32}} value={praise} onChange={event => setPraise(event.target.value)}>
						{Object.values(PraiseTypes).map((p, idx) => (
							<option key={idx} value={p[0]}>{p[0]}</option>
						))}
					</select>
				</div>
				{props.edit ?
					<ImageButton onClick={() => props.save(getAchievement())} src={check} width={25} height={25} padding={3}/> :
					<ImageButton onClick={add} src={addSvg} width={25} height={25} padding={3}/>
				}
			</div>
			<TextInput value={details} onChange={event => setDetails(event.target.value)}
						  style={{height: 25, width: '100%', marginTop: 10}} placeholder={'Effekt'}/>
		</Box>

	)
}