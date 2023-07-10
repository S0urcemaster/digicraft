
export function arrayMove<T>(arr: T[], fromIndex: number, toIndex: number): T[] {
	const copy = [...arr]
	const element = copy[fromIndex]
	copy.splice(fromIndex, 1)
	copy.splice(toIndex, 0, element)
	return copy
}

export function arrayShiftElement<T>(arr: Array<T>, element: T, direction: 1 | -1): Array<T> {
	const idx = arr.indexOf(element)
	if(direction === 1) {
		if(idx <arr.length -1) {
			return arrayMove(arr, idx, idx +1)
		}
		return arr
	}
	else if (direction === -1) {
		if(idx >0) {
			return arrayMove(arr, idx, idx -1)
		}
		return arr
	}
	return []
}