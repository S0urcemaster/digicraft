import * as React from 'react'
// import {useLocalStorage} from '../../lib/hooks'
import {H2, H3} from '../ui/Typography'
import {Trait, traitFocus, traits as traitPresets} from '../../db/traits'
import {useEffect, useState} from 'react'

function ReportItem(props: {trait: Trait, update: Function}) {

	const [value, setValue] = useState(5)

	useEffect(() => {
		props.update(props.trait, value)
	}, [value])

	return (
		<div>
			<H3>{props.trait.name}</H3>
			<div style={{display: 'grid', gridTemplateColumns: '1fr 3fr 1fr'}}>
				<div>{props.trait.positives.join(', ')}</div>
				<input type={'range'} value={value} min={1} max={9} onChange={(event) => setValue(Number(event.target.value))} />
				<div style={{textAlign: 'right'}}>{props.trait.negatives.join(', ')}</div>
			</div>
		</div>
)
}

type SelfReport = {
	date: string
	value: [date: string, value: number]
}

export default function SelfReport(props: {}) {

	// const [storage, setStorage] = useLocalStorage()
	const [traits, setTraits] = useState(traitPresets)

	useEffect(() => {
		// setStorage({traits: [storage.traits.map(t => {
		// 	return [t.name, t.value]
		// 	})})
	}, [traits])

	function update(trait: Trait, value: number) {
		// traits.splice(traits.indexOf(trait), 1, trait)
		setTraits([...traits])
	}

	return (
		<>
			<H2>{traitFocus.body.join(', ')}</H2>
			{traits.filter(t => (t.focus === 'body')).map((trait, key) => (
				<ReportItem key={key} trait={trait} update={update} />
			))}
			<H2>{traitFocus.mind.join(', ')}</H2>
			{traits.filter(t => (t.focus === 'mind')).map((trait, key) => (
				<ReportItem key={key} trait={trait} update={update} />
			))}
			<H2>{traitFocus.soul.join(', ')}</H2>
			{traits.filter(t => (t.focus === 'soul')).map((trait, key) => (
				<ReportItem key={key} trait={trait} update={update} />
			))}
		</>
	)
}
