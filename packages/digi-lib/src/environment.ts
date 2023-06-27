import chroma from 'chroma-js'

export function colorWithContrast(color: string, contrast: number) {
	console.log("logsntr", "color", chroma(color).luminance(contrast))
	return chroma(color).luminance(Math.abs(1 -contrast))
}