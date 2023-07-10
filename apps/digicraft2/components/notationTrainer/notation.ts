import {LineStats, SeriesStats} from './gameContext'

type Script = {
	title: string, script: string
}

export type Categories = {
	title: string
	items: string[]
}

export const categories: Record<string, Categories> = {
	special: {
		title: 'Besondere Lines',
		items: ['narrenmatt']
	},
	baseOpenings: {
		title: 'Eröffnung Grundformen',
		items: ['italian', 'spanish']
	},
	italian: {
		title: 'Italienisch',
		items: ['italian', 'grecoAttack']
	}
}

export const openings = {
	flankOpenings: {
		title: 'Flankeneröffnungen'
	},
	semiOpen: {
		title: 'Halboffene Spiele',
	},
	open: {
		title: 'Offene Spiele',
	},
	closed: {
		title: 'Geschlossene und halbgeschlossene Spiele'
	},
	indianDefenses: {
		title: 'Indische Verteidigungen',
	},
	italian: {
		title: 'Italienisch',
		line: ['e2-e4', 'e7-e5', 'Sg1-f3', 'Sb8-c6', 'Lf1-c4', 'Lf8-c5'],
		variations: {
			main: {
				title: 'Hauptzug',
				line: ['c2-c3'],
				variations: {
					grecoAttack: {
						title: 'Greco Angriff',
						line: ['c2–c3', 'Sg8–f6', 'd2–d4', 'e5xd4', 'c3xd4 Lc5–b4+']
					},
				}
			},
			evansGambit: {
				title: 'Evan\'s Gambit',
				line: ['b4']
			},
			giuocoPianissimo: {
				title: 'Giuoco Pianissimo',
				line: ['d4']
			},
			maxLangeGambit: {
				title: 'Max Lange Gambit',
				line: ['0-0']
			},
			fourKnightsVariation: {
				title: 'Vier Springer Spiel',
				line: ['Sb1-c3', 'Sg8-f6']
			},
			italianGambit: {
				title: 'Italienisches Gambit',
				line: ['d2-d4']
			},
			jeromeGambit: {
				title: 'Jerome Gambit',
				line: ['Lc4xf7+', 'Ke8xf7', 'Sf3xe5', 'Sc6xe5']
			}

		}
	}
}

export const series = {
	name: 'dummy',
	lines: [
		// {name: 'test'},
		{name: 'italian'},
		{name: 'spanish'},
		{name: 'nimzoIndian'},
		{name: 'gruenfeldIndian'},
		{name: 'sicilianNajdorf'},
		{name: 'kingsIndianClassic'},
		{name: 'londonSystem'},
		{name: 'zapataAnand1988'},
		{name: 'immortalGame'},
		{name: 'evergreenGame'},
		{name: 'ukrainianImmortal'},
		{name: 'gameOfTheCentury'},
		{name: 'kasparowTopalov1999'},
	] as LineStats[]
}

//'c2–c3',Sg8–f6','d2–d4',e5xd4','c3xd4',Lc5–b4+
export const transcripts: Record<string, Script> = {
// 	test: {
// 		title: 'Test',
// 		script:
// `1. e2-e4 d7-d5
// 2. e4xd5`
// 	},
	italian: {
		title: 'Italienisch',
		script:
`1. e2-e4 e7-e5
2. Sg1-f3 Sb8-c6
3. Lf1-c4 Lf8-c5`
	},
	spanish: {
		title: 'Spanisch',
		script:
`1. e2-e4 e7-e5
2. Sg1-f3 Sb8-c6
3. Lf1-b5`
	},
	nimzoIndian: {
		title: 'Nimzo-Indisch',
		script:
`1. d2–d4 Sg8–f6
2. c2–c4 e7–e6 
3. Sb1–c3 Lf8–b4`
	},
	gruenfeldIndian: {
		title: 'Grünfeld-Indisch',
		script:
			`1. d2–d4 Sg8–f6
2. c2–c4 g7–g6
3. Sb1–c3 d7–d5`
	},
	sicilianNajdorf: {
		title: 'Najdorf Sizilianisch',
		script:
`1. e2–e4 c7–c5
2. Sg1–f3 d7–d6
3. d2–d4 c5xd4
4. Sf3xd4 Sg8–f6
5. Sb1–c3 a7–a6`
	},
	kingsIndianClassic: {
		title: 'Königsindisch, klassisch',
		script:
`1. d2–d4 Sg8–f6
2. c2–c4 g7–g6
3. Sb1–c3 Lf8–g7
4. e2–e4 d7–d6
5. Sg1–f3 0–0
6. Lf1–e2`
	},
	londonSystem: {
		title: 'Londoner System (Variante)',
		script:
`1. d2-d4 d7-d5
2. Sg1-f3 Sg8-f6
3. Lc1-f4 c7-c6
4. e2-e3 Lb8-f5
5. Sb1-d2 e7-e6
6. c2-c3`
	},
	zapataAnand1988: {
		title: 'Zapata - Anand 1988',
		script:
`1. e2-e4 e7-e5
2. Sg1-f3 Sg8-f6
3. Sf3xe5 d7-d6
4. Se5-f3 Sf6xe4
5. Sb1-c3 Lc3-f5
6. Dd1-e2`
	},
// 	grecoAttack: {
// 		title: 'Greco Angriff',
// 		script:
// `1. e2-e4 e7-e5
// 2. Sg1-f3 Sb8-c6
// 3. Lf1-c4 Lf8-c5
// 4. c2-c3 Sg8-f6
// 5. d2-d4 e5xd4
// 6. c3xd4 Lc5-b4+
// 7. Sb1-c3 0-0
// 8. c1-d2 h7-h6
// 9. Dd1-e2 g7-g6
// 10. 0-0-0`
// },
	immortalGame: {
		title: 'Unsterbliche Partie (Anderssen - Kieseritzky) 1851',
		script:
`1. e2–e4 e7–e5 
2. f2–f4 e5xf4
3. Lf1–c4 Dd8–h4+
4. Ke1–f1 b7–b5!?
5. Lc4xb5 Sg8–f6
6. Sg1–f3 Dh4–h6
7. d2–d3 Sf6–h5
8. Sf3–h4?! Dh6–g5
9. Sh4–f5 c7–c6?!
10. g2–g4?! Sh5–f6?!
11. Th1–g1! c6xb5?
12. h2–h4 Dg5–g6
13. h4–h5 Dg6–g5
14. Dd1–f3 Sf6–g8
15. Lc1xf4 Dg5–f6
16. Sb1–c3 Lf8–c5
17. Sc3–d5 Df6xb2
18. Lf4–d6?! Lc5xg1
19. e4–e5! Db2xa1+
20. Kf1–e2 Sb8–a6
21. Sf5xg7+ Ke8–d8
22. Df3–f6+ Sg8xf6
23. Ld6–e7#`
},
	evergreenGame: {
		title: 'Immergrüne Partie (Anderssen - Dufresne) 1852',
		script:
`1. e2–e4 e7–e5
2. Sg1–f3 Sb8–c6
3. Lf1–c4 Lf8–c5
4. b2–b4 Lc5xb4
5. c2–c3 Lb4–a5
6. d2–d4 e5xd4
7. 0–0 d4–d3
8. Dd1–b3 Dd8–f6
9. e4–e5 Df6–g6
10. Tf1–e1 Sg8–e7
11. Lc1–a3 b7–b5
12. Db3xb5 Ta8–b8
13. Db5–a4 La5–b6
14. Sb1–d2 Lc8–b7
15. Sd2–e4 Dg6–f5
16. Lc4xd3 Df5–h5
17. Se4–f6+ g7xf6
18. e5xf6 Th8–g8
19. Ta1–d1 Dh5xf3
20. Te1xe7+ Sc6xe7
21. Da4xd7+ Ke8xd7
22. Ld3–f5+ Kd7–e8
23. Lf5–d7+ Ke8–f8
24. La3xe7#`
},
	ukrainianImmortal: {
		title: 'Ukrainische Unsterbliche (Jefim Kortschmar - Jewsei Poljak) 1937',
		script:
`1. e2–e4 e7–e5 
2. Sg1–f3 Sb8–c6
3. Lf1–b5 d7–d6
4. d2–d4 Lc8–d7
5. Sb1–c3 Sg8–f6
6. 0–0 Sc6xd4
7. Lb5xd7+ Dd8xd7
8. Sf3xd4 e5xd4
9. Dd1xd4 Lf8–e7
10. Tf1–d1 0–0
11. e4–e5 Sf6–e8
12. Lc1–f4 a7–a5
13. Td1–d3 Ta8–a6
14. Ta1–e1 Dd7–f5
15. Sc3–d5 Le7–d8
16. e5xd6 Se8xd6
17. Td3–g3 f7–f6
18. Lf4–h6 Tf8–f7
19. Sd5–b4 a5xb4
20. Dd4xd6 Df5–d7
21. Dd6–d5 Kg8–f8
22. Tg3xg7 Dd7xd5
23. Tg7–g8+`
},
	gameOfTheCentury: {
		title: 'Partie des Jahrhunderts (Donald Byrne - Bobby Fischer) 1956',
		script:
`1. Sg1–f3 Sg8–f6
2. c2–c4 g7–g6
3. Sb1–c3 Lf8–g7
4. d2–d4 0–0
5. Lc1–f4 d7–d5
6. Dd1–b3 d5xc4
7. Db3xc4 c7–c6
8. e2–e4 Sb8–d7
9. Ta1–d1 Sd7–b6
10. Dc4–c5 Lc8–g4
11. Lf4–g5 Sb6–a4!
12. Dc5–a3 Sa4xc3
13. b2xc3 Sf6xe4
14. Lg5xe7 Dd8–b6
15. Lf1–c4 Se4xc3
16. Le7–c5 Tf8–e8+
17. Ke1–f1 Lg4–e6!
18. Lc5xb6 Le6xc4+
19. Kf1–g1 Sc3–e2+
20. Kg1–f1 Se2xd4+
21. Kf1–g1 Sd4–e2+
22. Kg1–f1 Se2–c3+
23. Kf1–g1 a7xb6
24. Da3–b4 Ta8–a4
25. Db4xb6 Sc3xd1
26. h2–h3 Ta4xa2
27. Kg1–h2 Sd1xf2
28. Th1–e1 Te8xe1
29. Db6–d8+ Lg7–f8
30. Sf3xe1 Lc4–d5
31. Se1–f3 Sf2–e4
32. Dd8–b8 b7–b5
33. h3–h4 h7–h5
34. Sf3–e5 Kg8–g7
35. Kh2–g1 Lf8–c5+
36. Kg1–f1 Se4–g3+
37. Kf1–e1 Lc5–b4+
38. Ke1–d1 Ld5–b3+
39. Kd1–c1 Sg3–e2+
40. Kc1–b1 Se2–c3+
41. Kb1–c1 Ta2–c2#`
},
	kasparowTopalov1999: {
		title: 'Kasparow – Topalow, Wijk aan Zee 1999',
		script:
`1. e2–e4 d7–d6
2. d2–d4 Sg8–f6
3. Sb1–c3 g7–g6
4. Lc1–e3 Lf8–g7
5. Dd1–d2 c7–c6
6. f2–f3 b7–b5
7. Sg1–e2 Sb8–d7
8. Le3–h6 Lg7xh6
9. Dd2xh6 Lc8–b7
10. a2–a3 e7–e5
11. 0–0–0 Dd8–e7
12. Kc1–b1 a7–a6
13. Se2–c1 0–0–0
14. Sc1–b3 e5xd4!
15. Td1xd4 c6–c5
16. Td4–d1 Sd7–b6!
17. g2–g3 Kc8–b8
18. Sb3–a5 Lb7–a8
19. Lf1–h3 d6–d5
20. Dh6–f4+ Kb8–a7
21. Th1–e1 d5–d4
22. Sc3–d5 Sb6xd5
23. e4xd5 De7–d6
24. Td1xd4!! c5xd4?
25. Te1–e7+! Ka7–b6
26. Df4xd4+ Kb6xa5
27. b2–b4+ Ka5–a4
28. Dd4–c3 Dd6xd5
29. Te7–a7! La8–b7
30. Ta7xb7 Dd5–c4
31. Dc3xf6 Ka4xa3?
32. Df6xa6+ Ka3xb4
33. c2–c3+! Kb4xc3
34. Da6–a1+ Kc3–d2
35. Da1–b2+ Kd2–d1
36. Lh3–f1!! Td8–d2
37. Tb7–d7! Td2xd7
38. Lf1xc4 b5xc4
39. Db2xh8 Td7–d3
40. Dh8–a8 c4–c3
41. Da8–a4+ Kd1–e1
42. f3–f4 f7–f5
43. Kb1–c1 Td3–d2
44. Da4–a7`
},

}