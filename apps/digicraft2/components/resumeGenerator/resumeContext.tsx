import {createContext, ReactElement, ReactNode, useContext, useEffect, useState} from 'react'
import * as React from 'react'
import {useLocalStorage} from '../../lib/localStorageContext'
import {dummyResume, Resume} from './types'
import {default as PageComponent} from './assistant/Page'
import Image from 'next/image'
import {sntrResume} from './sntr'

export const pageTitles: string[] = [
	'Persönliche Angaben',
	'Berufliche Angaben',
]

export type ResumeContext = {
	resume?: Resume
	page: ReactElement
	pageId: number
	nextPage: () => void
	prevPage: () => void
}

const ResumeContext = createContext<ResumeContext>({} as ResumeContext)

export function ResumeContextProvider(props: { children: ReactNode }) {

	const [resume, setResume] = useState<Resume|undefined>()
	const [pageId, setPageId] = useState<number>(0)
	const [page, setPage] = useState<ReactElement>(getPage(0))

	const {resume: resumeStorage, setResume: setResumeStorage} = useLocalStorage()

	useEffect(() => {
		// setResume(resumeStorage)
		setResume(sntrResume)
	}, [])

	useEffect(() => {
		if(resume) {
			setPage(getPage(pageId))
		}
	}, [resume])

	useEffect(() => {
		if(resume) {
			setPage(getPage(pageId))
			setResumeStorage({...resume})
		}
	}, [pageId])

	function update(key: string, value: any) {
		setResume({...resume!, [key]: value})
	}

	function getPage(idx: number): ReactElement {
		if(resume) {
			switch(idx) {
				case 0: return <PageComponent data={{personalData: resume.personalData}} update={update} />
				case 1: return <PageComponent data={{professionData: resume.professionData}} update={update} />
			}
		}
		return <></>
	}

	function prevPage() {
		if(pageId >0) {
			setPageId(prev => pageId -1)
		}
	}

	function nextPage() {
		if(pageId <pageTitles.length ) {
			setPageId(prev => pageId )
		}
	}

	return (
		<ResumeContext.Provider value={{resume, page, pageId, nextPage, prevPage}}>
			{props.children}
		</ResumeContext.Provider>
	)
}

export function useResumeContext() {
	return useContext(ResumeContext)
}