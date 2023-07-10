import * as React from 'react'
import {useLocalStorage} from '../../lib/localStorageContext'
import {B, H2} from '../ui/Typography'
import InputRow from './InputRow'
import {Achievement, AchievementTypes, emptyAchievement, PraiseTypes, SortOrder} from './context'
import DisplayRow from './DisplayRow'
import {HR} from '../ui/Layout'
import {useEffect, useState} from 'react'
import {findKeyByValue} from '../../lib/lang'
import {Box} from '../ui/Box'

export default function Achievements() {

	const {achievements, setAchievements} = useLocalStorage()
	const [editedAchievement, setEditedAchievement] = useState<Achievement|null>(null)
	const [order, setOrder] = useState(SortOrder.praise)

	useEffect(() => {
		if(achievements === null || achievements != null && achievements.length === 0) return
		switch(order) {
			case SortOrder.praise:
				orderByPraise()
				setAchievements([...achievements])
				break
			case SortOrder.date:
				orderByDate()
				setAchievements([...achievements])
				break
		}
	}, [order])

	function orderByPraise() {
		achievements.sort((a, b) => {
			const aa = findKeyByValue(PraiseTypes, a.praise) // todo damn
			const bb = findKeyByValue(PraiseTypes, b.praise)
			return PraiseTypes[bb][1] - PraiseTypes[aa][1]
		})
	}

	function orderByDate() {
		achievements.sort((a, b) => {
			if(a.tipe === AchievementTypes.completed) {
				if(b.tipe === AchievementTypes.completed) {
					return b.dateFrom.localeCompare(a.dateFrom)
				} else {
					return b.dateUntil.localeCompare(a.dateFrom)
				}
			} else {
				if(b.tipe === AchievementTypes.completed) {
					return b.dateFrom.localeCompare(a.dateUntil)
				} else {
					return b.dateUntil.localeCompare(a.dateUntil)
				}
			}
		})
	}

	function add(a: Achievement) {
		setAchievements([...achievements, a])
	}

	function save(niu: Achievement, old: Achievement) {
		achievements.splice(achievements.indexOf(old), 1, niu)
		setAchievements([...achievements])
		setEditedAchievement(null)
	}

	function deleteAchievement(achievement: Achievement) {
		achievements.splice(achievements.indexOf(achievement), 1)
		setAchievements([...achievements])
	}

	return (
		<div style={{background: '#e0e0e0', padding: 10}}>
			<B>Neuen Erfolg erstellen:</B>
			<InputRow achievement={emptyAchievement()} add={add} save={save} style={{paddingBottom: 10}}/>
			<div style={{display: 'flex', justifyContent: 'space-between', margin: '30px 0 20px 0'}}>
				<H2 first nohr>Deine Erfolge</H2>
				<div style={{display: 'flex', alignItems: 'baseline'}}>
					Sortierung:&nbsp;
					<select value={order} onChange={event => setOrder(event.target.value)} style={{height: 30}}>
						{Object.values(SortOrder).map((o, idx) => (
								<option key={idx} value={o}>{o}</option>
							),
						)}
					</select>
				</div>
			</div>
			{achievements && achievements.map((a, idx) => (
				<div key={idx}>
					{a === editedAchievement ?
						<InputRow achievement={a} add={add} edit={!!editedAchievement}
									 save={(niu: Achievement) => save(niu, a)}/> :
						<DisplayRow achievement={a} deleteAchievement={deleteAchievement}
										editAchievement={() => setEditedAchievement(a)}/>
					}
					{idx < achievements.length - 1 ? <HR/> : ''}
				</div>
			))}
		</div>
	)
}