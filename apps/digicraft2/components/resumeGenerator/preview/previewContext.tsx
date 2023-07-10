import * as React from 'react'
import {createContext, createRef, ReactNode, RefObject, useContext, useEffect, useRef, useState} from 'react'

export type PreviewContext = {
	pageRef: RefObject<HTMLDivElement>
	printRef: RefObject<HTMLDivElement>
	print: () => void
	// pageRatio: number
	pageWidth: number
	pageHeight: number
	headerHeight: number
	setHeaderHeight: (height: number) => void
	contentHeight: number
}

const PreviewContext = createContext<PreviewContext>({} as PreviewContext)

export default function PreviewContextProvider(props: { children: ReactNode }) {

	const pageRatio = 297 /210

	const [headerHeight, setHeaderHeight] = useState(100)
	// const [contentHeight, setContentHeight] = useState()
	const [pageWidth, setPageWidth] = useState(210 *3.779528)
	const [pageHeight, setPageHeight] = useState(0)
	const [contentHeight, setContentHeight] = useState(0)

	const pageRef = useRef<HTMLDivElement>(null)
	const printRef = useRef<HTMLDivElement>(null)

	useEffect(() => {

	}, [])

	useEffect(() => {
		if(pageRef.current) {
			// pageWidth.current = pageRef.current.getBoundingClientRect().width
			setPageHeight(pageWidth *pageRatio)
			setContentHeight(pageHeight -headerHeight)
		}
	}, [pageRef.current])

	function print() {
		const newWindow = window.open('', '', 'height=500,width=500');
		newWindow!.document.write('<html><head><title>Drucken</title>');
		newWindow!.document.write(`<style>
a {
color: black
}

nav a {
font-size: 12pt;
white-space: nowrap;
}

nav a:link {
text-decoration: none;
}

a:link {
text-decoration: underline;
}

a:visited {
text-decoration: none;
}

a:hover {
text-decoration: none;
background: white;
}

a:active {
text-decoration: none;
}
@media print {
.no-print, .no-print * {
display: none !important;
}
}
</style>`);
		newWindow!.document.write('</head><body style="font-family:Arial; margin:0; padding:0">');
		newWindow!.document.write(printRef.current!.innerHTML);
		newWindow!.document.write('</body></html>');
		newWindow!.document.close();
		newWindow!.focus();
		// newWindow!.print();
		// newWindow!.close();
	}

	return (
		<PreviewContext.Provider value={{headerHeight, setHeaderHeight, pageHeight, pageWidth,
			contentHeight: contentHeight, pageRef, printRef, print
		}}>
			{props.children}
		</PreviewContext.Provider>
	)
}

export function usePreviewContext() {
	return useContext(PreviewContext)
}