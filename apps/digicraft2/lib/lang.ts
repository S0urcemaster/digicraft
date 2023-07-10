
export function objectEmpty(obj: any) {
	return obj && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype
}

export const findKeyByValue = (object: Record<string, [string, number]>, value: string): string => {
	return Object.keys(object).find(key => object[key][0] === value) ?? ''
}

// export function updateObject<T extends object>(oldObject: T, newValues: Partial<T>): T {
// 	const keys = Object.keys(newValues) as Array<keyof T>
// 	const updatedObject = { ...oldObject }
// 	keys.forEach(key => {
// 		if (newValues[key] !== undefined) {
// 			updatedObject[key] = newValues[key] as T[keyof T]
// 		}
// 	})
// 	return updatedObject
// }

export function updateObject<T extends object>(oldObject: T, newValues: Partial<T>): T {
	return { ...oldObject, ...newValues };
}



