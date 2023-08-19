
export function random (minimum: number, maximum: number) {
	return Math.floor(Math.random() * (maximum - minimum)) + minimum
}

export function numberRange(size: number, startAt = 0) {
	return Array.from(Array(size).keys()).map(i => i + startAt);
}

export function sumGauss(n: number): number {
	return (n *n +n) /2
}

export function toLocale(num: number, digits: number) {
	return num ? num.toLocaleString('de-DE', {minimumFractionDigits: digits, maximumFractionDigits: digits}) : 0
}