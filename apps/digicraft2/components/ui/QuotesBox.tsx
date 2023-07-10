import * as React from 'react'
import {H3, P} from './Typography'
import {useLocalStorage} from '../../lib/localStorageContext'
import {Button} from './Form'
import {useEffect, useState} from 'react'
import {Quote, quotes} from '../../db/quotes'
import {random} from '../../lib/math'
import {HR, Spacer} from './Layout'
import {Box} from './Box'

export default function QuotesBox() {

	const {brightness} = useLocalStorage()

	const [rndQuote, setRndQuote] = useState({line: '', answers: []} as Quote)

	useEffect(() => {
		setRndQuote(quotes[random(0, quotes.length)])
	}, [])


	function next() {
		setRndQuote(quotes[random(0, quotes.length)])
	}

	return (
		<Box>
			<H3 first style={{}}>Hinweis</H3>
			{rndQuote.line}
			<Spacer height={10} />
			<Button value={rndQuote.answers[0]} onClick={next} style={{width: '100%'}}/>
		</Box>
	)
}