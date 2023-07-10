import * as React from 'react'
import {H1} from '../ui/Typography'
import {ReactNode, useEffect, useState} from 'react'
import {getSourceFile} from '../api/sourceFile'
import Highlight from 'react-highlight'
import {useLocalStorage} from '../../lib/localStorageContext'
import {globals} from '../../lib/globals'
import {Spacer} from '../ui/Layout'
import {projects} from './projects'

type File = {
	name: string
	description: string|ReactNode
}

export type Project = {
	name: string
	folder: string
	files: File[]
}


function Link(props: {file: File, click: Function}) {

	return (
		<div onClick={() => props.click(props.file)} style={{cursor: 'pointer'}}>{props.file.name}</div>
	)
}

export default function Source(props: { project: string }) {

	const [project, setProject] = useState<Project>(projects[props.project])
	const [file, setFile] = useState(projects[props.project].files[0])
	const [code, setCode] = useState('')

	const {brightness} = useLocalStorage()

	useEffect(() => {
		getFile()
	}, [])

	useEffect(() => {
		const importCss = async () => {
			if (brightness === globals.brightnessKeys[0] || brightness === globals.brightnessKeys[1]) {
				// @ts-ignore
				import('highlight.js/styles/hybrid.css')
				return
			}
			// @ts-ignore
			import('highlight.js/styles/tomorrow.css')
		}
		importCss()
	}, [brightness])

	useEffect(() => {
	}, [code])

	useEffect(() => {
		file && getFile()
	}, [file])

	async function getFile() {
		const code = await getSourceFile(project.folder, file.name) as string
		const newStr = code.split('\n').map(line => line.replace(/\t/g, '   ')).join('\n')
		setCode(newStr)
	}

	function clickFile(file: File) {
		setFile(file)
	}


	return (
		<>
			<H1>{project.name} Source Code</H1>
			<div style={{display: 'grid', gridTemplateColumns: '9fr 3fr'}}>
				<div style={{display: 'flex', columnGap: 20, rowGap: 5, flexWrap: 'wrap'}}>
					{project && project.files.map((f, idx) => (
						<div style={{background: file === f ? globals.brightness[brightness].line : globals.brightness[brightness].boxBackground, padding: 2}} key={idx}>
							<Link file={f} click={clickFile} key={idx} />
						</div>
					))}
				</div>
			</div>
			<Spacer height={20} />
			<div style={{display: 'grid', gridTemplateColumns: '9fr 3fr'}}>
				<div style={{overflow: 'auto', margin: '0 10px 0 0', background: '#444444!important'}}>
					<Highlight className="TypeScript">
						{code}
					</Highlight>
				</div>
				<div style={{margin: '0 0 0 10px'}}>
					{project.files.find(f => file.name === f.name)?.description}
				</div>
			</div>
		</>
	)
}