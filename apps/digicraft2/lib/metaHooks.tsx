import {useEffect, useRef, useState} from 'react'
import {Button, Checkbox} from '../components/ui/Form'
import * as React from 'react'
import {useLocalStorage} from './localStorageContext'

export function useStorageBackup() {

	const {download, upload} = useLocalStorage()

	const fileInputRef = useRef<HTMLInputElement>(null)

	function downloadClick() {
		fileInputRef.current!.click()
	}

	function downloadButton() {
		return (
			<>
				<Button value={'Download'} onClick={() => download()}/>
			</>
		)
	}

	function uploadButton() {
		return (
			<>
				<Button value={'Upload'} onClick={downloadClick} />
				<input type={'file'} style={{display: 'none'}}
						 onChange={event => upload(event.target.files && event.target.files[0])} ref={fileInputRef}/>
			</>
		)
	}

	return [downloadButton, uploadButton]
}

export function useShowExternalImages() {

	const {showExternalImages, setShowExternalImages} = useLocalStorage()

	const [checkboxTitle, setCheckboxTitle] = useState('')

	useEffect(() => {
		setCheckboxTitle(
			showExternalImages ?
				'Extern verlinkte Bilder werden immer angezeigt' :
				'Extern verlinkte Bilder werden nicht angezeigt',
		)
	}, [showExternalImages])

	function showCheckbox() {
		return (
			<Checkbox
				title={checkboxTitle}
				checked={showExternalImages ?? false}
				onChange={() => setShowExternalImages(!showExternalImages)}
				orientation={'right'}
			/>
		)
	}

	return [showCheckbox]
}