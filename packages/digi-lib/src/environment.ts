import chroma from 'chroma-js'

export function colorWithContrast(color: string, contrast: number) {
	return chroma(color).luminance(Math.abs(1 -contrast))
}