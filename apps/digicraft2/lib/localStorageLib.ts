
export function stringDownload(content: string, filename: string) {
	const downloadAnchorNode = document.createElement('a')
	downloadAnchorNode.setAttribute("href", content)
	downloadAnchorNode.setAttribute("download", `${filename}`)
	document.body.appendChild(downloadAnchorNode)
	downloadAnchorNode.click()
	downloadAnchorNode.remove()
}

// export function stringUpload(): string {
// 	const uploadInput = document.createElement('input')
//
// }