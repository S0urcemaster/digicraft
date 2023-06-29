
export function clog(name: string, ...data: any[]) {
	const now = new Date()

	console.log(now.toLocaleTimeString() +':' +now.getMilliseconds(), name, ...data)
}

export function cinfo(name: string, ...data: any[]) {
	const now = new Date()

	console.info(now.toLocaleTimeString() +':' +now.getMilliseconds(), name, ...data)
}

export function cdebug(name: string, ...data: any[]) {
	const now = new Date()

	console.debug(now.toLocaleTimeString() +':' +now.getMilliseconds(), name, ...data)
}
