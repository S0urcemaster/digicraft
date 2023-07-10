import jb_beam from '/public/ads/jb_beam.svg'
import ts_lettermark_white from '/public/ads/ts-lettermark-white.svg'
import nextjs from '/public/ads/next.png'
import react from '/public/ads/react.png'
import express from '/public/ads/express.jpg'

import technoscout from '/public/ads/technoscout_ad.jpg'
import passwortgenerator from '/public/ads/passwortgenerator.jpg'
import chessNotation from '/public/ads/chessnotation.jpg'

export type Ad = {
	alt: string
	src: any
	href: string
	width: number
	height: number
	marginBottom: number
}

export const adsLeft:Array<Ad> = [
	{src: jb_beam, href: '', alt: 'Jetbrains Logo', width: 180, height: 180, marginBottom: 30},
	{src: ts_lettermark_white,  href: '', alt: 'TypeScript Logo',width: 180, height: 180, marginBottom: 60},
	{src: react,  href: '', alt: 'React Logo',width: 180, height: 180, marginBottom: 60},
	{src: nextjs,  href: '', alt: 'Next.js Logo',width: 180, height: 180, marginBottom: 40},
	{src: express,  href: '', alt: 'Express.js',width: 180, height: 180, marginBottom: 60},
	// {src: ,  href: '', alt: '',width: 180, height: 180, marginBottom: 60},
]

export const adsRight:Array<Ad> = [
	{src: technoscout, href: '', alt: 'Technoscout Ad Logo', width: 180, height: 180, marginBottom: 60},
	{src: passwortgenerator,  href: '', alt: 'Long Pass Maker Logo',width: 180, height: 180, marginBottom: 60},
	{src: chessNotation,  href: '', alt: 'Chess Notation Trainer Logo',width: 180, height: 180, marginBottom: 60},
	// {src: ,  href: '', alt: '',width: 180, height: 180, marginBottom: 60},
]
