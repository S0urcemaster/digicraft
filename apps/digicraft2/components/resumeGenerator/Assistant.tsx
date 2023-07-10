import * as React from 'react'
import PersonalData from './assistant/PersonalData'
import {useResumeContext} from './resumeContext'
import {useEffect} from 'react'
import {Button, IconButton} from '../ui/Form'
import {icons} from '../ui/Icon'
import {Box} from '../ui/Box'
import {Spacer} from '../ui/Layout'
import Page from './assistant/Page'

export default function Assistant(props: {}) {

	const {page, nextPage, prevPage} = useResumeContext()

	useEffect(() => {
	}, [page])

	return (
		<Box>
			{page}
			<Spacer height={20} />
			<div style={{display: 'flex', columnGap: 5}}>
				<Button value={'Zurück'} onClick={prevPage} />
				<Button value={'Speichern und weiter'} onClick={nextPage} />
				{/*<IconButton name={icons.AngleLeft} size={15} onClick={prevPage}/>*/}
				{/*<IconButton name={icons.AngleRight} size={15} onClick={nextPage}/>*/}
			</div>
		</Box>
	)
}