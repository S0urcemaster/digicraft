// import {Pool} from 'pg'

export type Theme = {
	title: string
	background: string
	boxBackground: string
	color: string
	line: string
	buttonShadow: string
	menuHighlight: string
	sides: string
}

const colors = {
	black: 'black',
	darkDarkGray: '#555',
	aliceBlue: 'AliceBlue',
	seaShell: 'SeaShell',
	red: 'LightSalmon',
	green: 'PaleGreen',
	whiteSmoke: 'WhiteSmoke',
	darkGray: 'DarkGray',
	white: 'White',
	dev: 'LavenderBlush',
	transparent: 'rgba(0, 0, 0, 0)'
}

export const globals = {
	dev: process.env.NEXT_PUBLIC_DEV === 'true',
	root: process.env.NEXT_PUBLIC_DEV === 'true' ? 'http://localhost:3001' : '/apix',
	// digicraftPool: new Pool({
	// 	user: process.env.PGUSER,
	// 	password: process.env.PGPASSWORD,
	// 	host: process.env.PGHOST,
	// 	database: process.env.DIGICRAFT_DATABASE,
	// }),
	colors: colors,
	brightnessKeys: ['dark', 'darkLight', 'lightLight', 'light', 'blue'],
	brightness: <Record<string, Theme>> {
		light:      {title: 'Hell',
			background: '#fff', boxBackground: '#eee',
			color:      '#000', line:          '#bbb', buttonShadow: '#888',
			menuHighlight: '#fff', sides: 'rgba(206,206,206,0.3)'},

		lightLight: {title: 'Hell Medium',
			background: '#ccc', boxBackground: '#bbb',
			color:      '#000', line:          '#888', buttonShadow: '#666',
			menuHighlight: '#ccc', sides: 'rgba(152,152,152,0.3)'},

		darkLight:  {title: 'Dunkel Medium',
			background: '#444', boxBackground: '#666',
			color:      '#fff', line:          '#888', buttonShadow: '#888',
			menuHighlight: '#444', sides: 'rgba(133,133,133,0.3)'},

		dark: 	   {title: 'Dunkel',
			background: '#222', boxBackground: '#333',
			color:      '#ccc', line:          '#666', buttonShadow: '#555',
			menuHighlight: '#222', sides: 'rgba(91,91,91,0.23)'},

		blue:    {title: 'Blau',
			background: '#f7fcff', boxBackground: '#d2f1ff',
			color:      '#001a4b', line:          '#87c3ff', buttonShadow: '#89a4ff',
			menuHighlight: '#f7fcff', sides: 'rgba(90,211,255,0.24)'},
	}

}