import * as React from 'react'
import { Button, IconButton } from '../ui/Form'
import { CSSProperties, ReactNode, useRef, useState } from 'react'
import { icons } from '../ui/Icon'
import Page from './preview/Page'
import { useResumeContext } from './resumeContext'
import PageLeft from './preview/PageLeft'
import PageRight from './preview/PageRight'
import Header from './preview/Header'
import { Spacer } from '../ui/Layout'
import Image from 'next/image'
import photo from '../../public/self.jpg'
import { Employment, Training, Project, Certificate } from './types'
import { arrowSymbols, htmlSymbols, punctuationSymbols } from '../../db/htmlSymbols'
import { usePreviewContext } from './preview/previewContext'

const fontSize = 14
const headingSize = 16
const titleSize = 14
const subTitleSize = 14

export const colors = {
	brightColor: '#384b70',
	brightBrighterColor: '#7f899d',
	brightBrighterBrighterColor: '#a1a9b7',
	brightBackground: '#f3f4ff',
	darkColor: '#f3f4ff',
	darkDarkerColor: '#d9d9ec',
	darkBackground: '#384b70',
	brightEmColor: '#10161f',

}

function Name(props: { children: ReactNode }) {
	return (
		<div style={{fontSize: 28, fontWeight: 'bold', color: colors.brightColor}}>{props.children}</div>
	)
}

function Profession(props: { children: ReactNode }) {
	return (
		<div style={{fontSize: 20, color: colors.brightBrighterColor}}>{props.children}</div>
	)
}

function ProfessionReason(props: { children: ReactNode }) {
	return (
		<div style={{fontSize: fontSize}}>{props.children}</div>
	)
}

function Picture(props: { children: ReactNode }) {
	return (
		<div style={{
			height: 250,
			width: '4fr',
			background: '#b6b6b6',
			overflow: 'hidden',
			position: 'relative',
			marginTop: -22
		}}>
			<Image src={photo} alt={'your photo'} height={250}
					 style={{
						 position: 'absolute',
						 top: '50%',
						 left: '50%',
						 transform: 'translate(-50%, -50%)',
						 filter: 'brightness(1.2)'
					 }}/>
		</div>
	)
}

function Heading(props: { children: ReactNode, style?: CSSProperties }) {
	return (
		<div style={{fontSize: headingSize, textAlign: 'left', marginTop: 10, ...props.style}}>
			<b>{props.children}</b>
			<hr style={{background: colors.brightBrighterColor, margin: 0, marginTop: 3}}/>
		</div>
	)
}

function SubHeading(props: { children: ReactNode }) {
	return (
		<div style={{fontSize: fontSize - 2, margin: '3px 0 2px 0', textAlign: 'left'}}><b>{props.children}</b></div>
	)
}

function Line(props: { children: ReactNode }) {
	return (
		<div style={{fontSize: fontSize, textAlign: 'left'}}>{props.children}</div>
	)
}

function Title(props: { children: ReactNode, style?: CSSProperties }) {
	return (
		<div style={{fontSize: titleSize, fontWeight: 'bold', paddingBottom: '1px', ...props.style}}>
			{props.children}
		</div>
	)
}

function Subtitle(props: { children: ReactNode }) {
	return (
		<div style={{fontSize: subTitleSize, fontStyle: 'normal', marginLeft: 30, color: colors.brightEmColor}}>
			{props.children}
		</div>
	)
}

function List(props: { list: [string | ReactNode, string[]][] }) {
	return (
		<div style={{margin: '0 0px 0 30px'}}>
			{props.list.map((item, idx) => (
				<>
					<ListItem key={idx} text={item[0]} tasks={item[1]}/>
					{idx < props.list.length - 1 ? <Spacer height={5}/> : null}
				</>
			))}
		</div>
	)
}

function ListItem(props: { text: string | ReactNode, tasks: string[] }) {
	return (
		<div style={{fontSize: fontSize - 1, display: 'grid', gridTemplateColumns: '10px auto 100px'}}>
			<div style={{margin: '0 10px 0 0'}}>{punctuationSymbols.flowerPunktuationMark.text}</div>
			<div style={{marginRight: 5}}>{props.text}</div>
			<div style={{
				display: 'flex',
				flexWrap: 'wrap',
				columnGap: 5,
				float: 'right',
				justifyContent: 'right',
				alignItems: 'flex-start',
				marginBottom: -5,
			}}>
				{props.tasks.map((task, idx) => (
					<div style={{
						fontSize: fontSize - 3,
						background: '#f2fbff',
						color: 'black',
						padding: '1px 1px 1px 1px',
						margin: idx < props.tasks.length - 1 ? '0 0 0px 0' : '0 0 0 0',
						lineHeight: '0.9rem',
					}}>{task}</div>
				))}
			</div>
			{/*&diams; {props.children}*/}
		</div>
	)
}

function Employment(props: { employment: Employment }) {
	const emp = props.employment
	return (
		<div style={{display: 'grid', gridTemplateColumns: '1fr', columnGap: 20, marginTop: 8}}>
			<div>
				<div style={{
					display: 'flex',
					padding: '1px 0 0 0',
					justifyContent: 'space-between',
					backgroundColor: colors.brightColor,
					marginRight: '-20px',
					marginLeft: '-20px',
					borderRadius: '10px 0 0 10px'
				}}>
					<Title style={{color: colors.darkColor, paddingLeft: 35}}>{emp.title}</Title>
					<div style={{
						textAlign: 'center',
						color: '#fff',
						fontSize: 12,
						fontWeight: 'bold',
						marginRight: 20,
						paddingTop: 1,
					}}>{emp.dateFrom} &ndash; {emp.dateTo}</div>
				</div>
				<Spacer height={10}/>
				<Subtitle>{emp.companyName}, {emp.companyCity}</Subtitle>
				<Spacer height={10}/>
				<List list={emp.tasks}></List>
			</div>
		</div>
	)
}

function OtherEmployment(props: { employment: Employment }) {
	const emp = props.employment
	return (
		<div style={{display: 'grid', gridTemplateColumns: '1fr', columnGap: 20}}>
			<div>
				<div style={{
					display: 'flex',
					padding: '1px 0 0 0',
					justifyContent: 'space-between',
					backgroundColor: colors.brightColor,
					marginRight: '-20px',
					marginLeft: '-20px',
					borderRadius: '10px 0 0 10px'
				}}>
					<Title style={{color: colors.darkColor, paddingLeft: 35}}>{emp.title}</Title>
					<div style={{
						textAlign: 'center',
						color: '#fff',
						fontSize: 12,
						fontWeight: 'bold',
						marginRight: 20,
						paddingTop: 1,
					}}>{emp.dateFrom} &ndash; {emp.dateTo}</div>
				</div>
				<Spacer height={5}/>
				<Subtitle>{emp.companyName}, {emp.companyCity}</Subtitle>
			</div>
		</div>
	)
}

function Project(props: { project: Project }) {
	const pro = props.project
	return (
		<div style={{display: 'grid', gridTemplateColumns: '1fr', columnGap: 20}}>
			<div>
				<div style={{
					display: 'flex',
					padding: '1px 0 0 0',
					justifyContent: 'space-between',
					backgroundColor: colors.brightColor,
					marginRight: '-20px',
					marginLeft: '-20px',
					borderRadius: '10px 0 0 10px'
				}}>
					<Title style={{color: colors.darkColor, paddingLeft: 35}}>{pro.title}</Title>
					<div style={{
						textAlign: 'center',
						color: '#fff',
						fontSize: 12,
						fontWeight: 'bold',
						marginRight: 20,
						paddingTop: 1,
					}}>{pro.dateFrom} &ndash; {pro.dateTo}</div>
				</div>
				<Spacer height={10}/>
				<Subtitle>{pro.companyName}</Subtitle>
				<Spacer height={10}/>
				<List list={pro.tasks}></List>
			</div>
		</div>
	)
}

function Training(props: { training: Training }) {
	const emp = props.training
	return (
		<div style={{display: 'grid', gridTemplateColumns: '1fr', columnGap: 20}}>
			<div>
				<div style={{
					display: 'flex',
					padding: '1px 0 0 0',
					justifyContent: 'space-between',
					backgroundColor: colors.brightColor,
					marginRight: '-20px',
					marginLeft: '-20px',
					borderRadius: '10px 0 0 10px'
				}}>
					<Title style={{color: colors.darkColor, paddingLeft: 35}}>{emp.title}</Title>
					<div style={{
						textAlign: 'center',
						color: '#fff',
						fontSize: 12,
						fontWeight: 'bold',
						marginRight: 20,
						paddingTop: 1,
					}}>{emp.dateFrom} &ndash; {emp.dateTo}</div>
				</div>
				<Spacer height={10}/>
				<Subtitle>{emp.schoolName}, {emp.schoolCity}</Subtitle>
				<Spacer height={10}/>
				<List list={emp.tasks}></List>
			</div>
		</div>
	)
}

function Certificate(props: { certificate: Certificate }) {
	const emp = props.certificate
	return (
		<div style={{display: 'grid', gridTemplateColumns: '3fr', columnGap: 20}}>
			<div>
				<div style={{
					display: 'flex',
					padding: '1px 0 0 0',
					justifyContent: 'space-between',
					backgroundColor: colors.brightColor,
					marginRight: '-20px',
					marginLeft: '-20px',
					borderRadius: '10px 0 0 10px'
				}}>
					<Title style={{color: colors.darkColor, paddingLeft: 35}}>{emp.title}</Title>
					<div style={{
						textAlign: 'center',
						color: '#fff',
						fontSize: 12,
						fontWeight: 'bold',
						marginRight: 20,
						paddingTop: 1,
					}}>{emp.date}</div>
				</div>
				<Spacer height={5}/>
				<Subtitle>{emp.schoolName}, {emp.schoolCity}</Subtitle>
			</div>
		</div>
	)
}

function Stars(props: { title: string, stars: number, left?: boolean, size?: number, style?: CSSProperties }) {

	function getStars() {
		const stars = []
		for (let i = 0; i < 5; i++) {
			if (i < props.stars) {
				stars.push(<div>{htmlSymbols.blackStar.text}</div>)
			} else {
				stars.push(<div>{htmlSymbols.whiteStar.text}</div>)
			}
		}
		return (
			<>
				{stars.map((star, idx) => (
					<div key={idx} style={{fontSize: props.size}}>{star}</div>
				))}
			</>

		)
	}

	return (
		<>
			{props.left ?
				<div style={{display: 'grid', gridTemplateColumns: '1fr 4fr', margin: '0 0 2px 0', columnGap: 3}}>
					<div style={{display: 'flex', alignItems: 'start', marginTop: -2, marginRight: 8}}>
						{getStars()}
					</div>
					<div style={{fontSize: fontSize, textAlign: 'left', ...props.style}}>{props.title}</div>
				</div>
				:
				<div style={{display: 'grid', gridTemplateColumns: '4fr 1fr', margin: '0 0 2px 0', columnGap: 3}}>
					<div style={{fontSize: fontSize, textAlign: 'left', ...props.style}}>{props.title}</div>
					<div style={{display: 'flex', alignItems: 'start', marginTop: -2}}>
						{getStars()}
					</div>
				</div>
			}
		</>
	)
}

export default function Preview(props: { visible: boolean, hide: () => void, pageCount: number }) {

	const contentHeight = props.pageCount * 297 + 90

	const [padding, setPadding] = useState([20, 20, 20, 20])
	const {resume} = useResumeContext()
	const {printRef, print} = usePreviewContext()

	function Employments(props: { from: number, to: number }) {
		return (
			<>
				{resume?.employments.slice(props.from, props.to).map((emp, idx) => (
					<>
						<Employment key={idx} employment={emp}/>
						{idx < props.to -1 ? <Spacer height={15}/> : null}
					</>
				))}
			</>
		)
	}

	function OtherEmployments(props: { from: number, to: number }) {
		return (
			<>
				{resume?.otherEmployments.slice(props.from, props.to).map((emp, idx) => (
					<>
						<OtherEmployment key={idx} employment={emp}/>
						{idx < props.to - 1 ? <Spacer height={20}/> : null}
					</>
				))}
			</>
		)
	}

	function Projects(props: { from: number, to: number }) {
		return (
			<>
				{resume?.projects.slice(props.from, props.to).map((emp, idx) => (
					<>
						<Project key={idx} project={emp}/>
						{idx < props.to -1 ? <Spacer height={20}/> : null}
					</>
				))}
			</>
		)
	}

	function Trainings(props: { from: number, to: number }) {
		return (
			<>
				{resume?.trainings.slice(props.from, props.to).map((emp, idx) => (
					<>
						<Training key={idx} training={emp}/>
						{idx < props.to - 1 ? <Spacer height={10}/> : null}
					</>
				))}
			</>
		)
	}

	function Certificates(props: { from: number, to: number }) {
		return (
			<>
				{resume?.certificates.slice(props.from, props.to).map((emp, idx) => (
					<>
						<Certificate key={idx} certificate={emp}/>
						{idx < props.to - 1 ? <Spacer height={10}/> : null}
					</>
				))}
			</>
		)
	}

	function A(props: { href: string, children: ReactNode, style?: CSSProperties }) {
		return (
			<a href={props.href} style={props.style}>{props.children}</a>
		)
	}

	return (
		<div style={{
			position: 'absolute', left: 0, top: 0, width: '100%', height: contentHeight -10 + 'mm',
			display: props.visible ? 'block' : 'none', background: 'lightgrey', zIndex: 3,
			fontFamily: 'Arial', color: colors.brightColor
		}}>
			<div style={{width: '100%', textAlign: 'right', margin: '15px 10px 20px 0'}} className={'no-print'}>
				<Button value={'Drucken'} onClick={print}/>
				<IconButton name={icons.X} size={25} onClick={props.hide}/>
			</div>
			<div ref={printRef}>
				<Page padding={padding}>
					<Header style={{overflow: 'hidden'}}>
						<div style={{display: 'grid', gridTemplateColumns: '9fr 4fr', height: '100%', overflow: 'hidden'}}>
							<div style={{margin: '10px 0 0 19px'}}>
								<Name>{resume?.personalData.name}</Name>
								<Spacer height={3}/>
								<Profession>{resume?.professionData.title}</Profession>
							</div>
							<div style={{display: 'grid', gridTemplateRows: '1fr 1fr'}}>
								<div style={{
									textAlign: 'right',
									margin: '12px 18px 0 0',
									color: colors.brightBrighterColor,
									fontSize: 14
								}}>V 23.7.7
								</div>
								<div style={{
									backgroundColor: colors.brightColor,
									color: colors.darkColor,
									padding: '0 0 0 7px',
									borderRadius: '5px 0 0 0',
									margin: '0 0 0 0',
									display: 'flex',
									justifyContent: 'space-between'
								}}>
									<div style={{fontSize: 18, padding: '7px 0 0 2px', fontWeight: 'bold'}}>
										Lebenslauf
									</div>
									{/*<div style={{backgroundColor: '#434a69', color: '#eef', padding: '5px 20px 0 7px', borderRadius: '5px 0 0 0', margin: '0 0 0 0px', fontSize: 12, fontWeight: 'bold', textAlign: 'right'}}>*/}
									{/*	19.06.2023*/}
									{/*</div>*/}
								</div>
							</div>
						</div>
					</Header>
					<div style={{display: 'grid', gridTemplateColumns: '9fr 4fr'}}>
						<PageLeft firstPage>
							<Heading style={{color: colors.brightBrighterColor, marginTop: 0}}>News</Heading>
							<Spacer height={12}/>
							<ProfessionReason>{resume?.professionData.professionReasonText}</ProfessionReason>
							<Spacer height={15}/>
							<Heading style={{color: colors.brightBrighterColor}}>IT Positionen</Heading>
							<Spacer height={6}/>
							<Employments from={0} to={3}/>
							<Spacer height={20}/>
						</PageLeft>
						<PageRight>
							<div style={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								height: '100%',
								textAlign: 'center',
								color: '#eef',
							}}>
								<div>
									<Picture> </Picture>
									<Spacer height={10}/>
									<Heading>Persönliche Daten</Heading>
									<Spacer height={5}/>
									<SubHeading><a href={'https://digi-craft.de/apps/radio'} target={'_blank'} style={{
										color: '#fff',
										textDecoration: 'none'
									}}>{arrowSymbols.heavyRoundTippedRightArrow.text} Coding Demos</a></SubHeading>
									<Spacer height={5}/>
									<SubHeading><a href={'mailto:sebastian-teister@outlook.de'} target={'_blank'} style={{
										color: '#fff',
										textDecoration: 'none',
									}}>{arrowSymbols.heavyRoundTippedRightArrow.text} Email</a></SubHeading>
									<Spacer height={5}/>
									<SubHeading>Telefon</SubHeading>
									<Line>{resume?.personalData.telephone}</Line>
									<Spacer height={10}/>
									<SubHeading>Anschrift</SubHeading>
									<Line>{resume?.personalData.street}</Line>
									<Line>{resume?.personalData.city}</Line>
									<Spacer height={10}/>
									<SubHeading>Persönlichkeit</SubHeading>
									<Line><a target={'_blank'}
										href={'https://www.16personalities.com/de/intp-personlichkeit'}
										style={{color: '#fff'}}>{resume?.personalData.personality}</a> (Logiker)</Line>
									<Spacer height={10}/>
									<SubHeading>Social Media</SubHeading>
									<div style={{display: 'flex', columnGap: 15}}>
										{resume?.personalData.urls.map((url, idx) => (
											<Line><a href={url[1]} style={{color: '#fff'}} target={'_blank'}>{url[0]}</a></Line>
										))}
									</div>
									<Spacer height={10}/>
									<SubHeading><a href={'https://github.com/S0urcemaster'} target={'_blank'} style={{
										color: '#fff',
										textDecoration: 'none'
									}}>{arrowSymbols.heavyRoundTippedRightArrow.text} Public Repos</a></SubHeading>
									<Spacer height={10}/>
									<Heading>Stärken</Heading>
									<Spacer height={10}/>
									<Line>Logik</Line>
									<Spacer height={3}/>
									<Line>Intuition</Line>
									<Spacer height={3}/>
									<Line>Abstraktionsvermögen</Line>
									<Spacer height={10}/>
									<Heading>Sprachen</Heading>
									<Spacer height={10}/>
									<Stars title={'Deutsch'} stars={5}/>
									<Stars title={'Englisch'} stars={4}/>
									<Spacer height={15}/>
									<div style={{color: 'rgba(238,238,255,0.66)'}}>
										<Heading style={{fontSize: '14px'}}>Legende</Heading>
										<Spacer height={10}/>
										<Stars left title={'Einen Tag damit gearbeitet'} stars={1} size={10}
												 style={{fontSize: '12px'}}/>
										<Stars left title={'Solide Grundkenntnisse'} stars={2} size={10}
												 style={{fontSize: '12px'}}/>
										<Stars left title={'In einem oder mehr Projekten eingesetzt'} stars={3} size={10}
												 style={{fontSize: '12px'}}/>
										<Stars left title={'Umfassende Kenntnisse aus mehreren Projekten'} stars={4} size={10}
												 style={{fontSize: '12px'}}/>
										<Stars left title={'Routinier'} stars={5} size={10} style={{fontSize: '12px'}}/>
									</div>
								</div>
								<div style={{display: 'flex', justifyContent: 'center', columnGap: 10}}>
									<div style={{textDecoration: 'underline'}}>1</div>
									<div>2</div>
									<div>3</div>
									<div>4</div>
									<div>5</div>
								</div>
							</div>
						</PageRight>
					</div>
				</Page>
				<Spacer height={30} className={'no-print'}/>
				<Page padding={padding}>
					<div style={{display: 'grid', gridTemplateColumns: '9fr 4fr'}}>
						<PageLeft>
							<Spacer height={0}/>
							<Employments from={3} to={10}/>
						</PageLeft>
						<PageRight>
							<div style={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								height: '100%',
								textAlign: 'center',
							}}>
								<div>
									<Spacer height={10}/>
									<Heading>Betriebssysteme</Heading>
									<Spacer height={10}/>
									<Stars title={'Windows'} stars={5}/>
									<Stars title={'Linux'} stars={2}/>
									<Spacer height={10}/>
									<Heading>Vorgehensmodelle</Heading>
									<Spacer height={10}/>
									<Stars title={'XP'} stars={4}/>
									<Stars title={'Scrum'} stars={3}/>
									<Spacer height={10}/>
									<Heading>Programmier-paradigmen</Heading>
									<Spacer height={10}/>
									<Stars title={'OOP'} stars={4}/>
									<Stars title={'Funktionale Programmierung'} stars={4}/>
									<Stars title={'Komponenten-orientierte Programmierung'} stars={4}/>
									<Stars title={'Abstraktion /Generalisierung'} stars={4}/>
									<Stars title={'Parallele Programmierung'} stars={4}/>
									<Stars title={'Model-Driven-Development'} stars={3}/>
									<Spacer height={10}/>
									<Heading>React-Paradigmen</Heading>
									<Spacer height={10}/>
									<Stars title={'State / Ref'} stars={5}/>
									<Stars title={'Context'} stars={4}/>
									<Stars title={'Custom Hooks'} stars={4}/>
									<Stars title={'Reducer'} stars={4}/>
									<Stars title={'Higher Order Components'} stars={1}/>
									<Spacer height={10}/>
									<Heading>Programmiersprachen nach Aktualität</Heading>
									<Spacer height={10}/>
									<Stars title={'TypeScript'} stars={4}/>
									<Stars title={'JavaScript'} stars={4}/>
									<Stars title={'HTML'} stars={4}/>
									<Stars title={'CSS'} stars={4}/>
									<Stars title={'SVG'} stars={4}/>
									<Stars title={'Go'} stars={4}/>
									<Stars title={'Python'} stars={2}/>
									<Stars title={'C++'} stars={2}/>
									<Stars title={'PHP'} stars={4}/>
									<Stars title={'SQL'} stars={4}/>
									<Stars title={'Java'} stars={4}/>
									<Stars title={'Lua'} stars={3}/>
									<Stars title={'C#'} stars={2}/>
									<Stars title={'Scala'} stars={2}/>
									<Stars title={'Turbo Pascal'} stars={3}/>
									<Stars title={'Assembler'} stars={2}/>
									<Stars title={'Basic'} stars={2}/>
									<Spacer height={10}/>
								</div>
								<div style={{display: 'flex', justifyContent: 'center', columnGap: 10}}>
									<div>1</div>
									<div style={{textDecoration: 'underline'}}>2</div>
									<div>3</div>
									<div>4</div>
									<div>5</div>
								</div>
							</div>
						</PageRight>
					</div>
				</Page>
				<Spacer height={30} className={'no-print'}/>
				<Page padding={padding}>
					<div style={{display: 'grid', gridTemplateColumns: '9fr 4fr'}}>
						<PageLeft>
							<Employments from={10} to={11}/>
							<Spacer height={10}/>
							<Heading style={{color: colors.brightBrighterColor}}>Eigene Projekte</Heading>
							<Spacer height={16}/>
							<Projects from={0} to={8}/>
						</PageLeft>
						<PageRight>
							<div style={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								height: '100%',
								textAlign: 'center',
							}}>
								<div>
									<Spacer height={5}/>
									<Heading>Frameworks nach Aktualität</Heading>
									<Spacer height={10}/>
									<Stars title={'React.js'} stars={4}/>
									<Stars title={'Next.js'} stars={4}/>
									<Stars title={'Stencil.js'} stars={3}/>
									<Stars title={'Express.js'} stars={2}/>
									<Stars title={'GraphQL'} stars={3}/>
									<Stars title={'Vue.js'} stars={4}/>
									<Stars title={'VueX'} stars={3}/>
									<Stars title={'Contao CMS'} stars={3}/>
									<Stars title={'Laravel'} stars={4}/>
									<Stars title={'Electron'} stars={3}/>
									<Stars title={'Web Audio API'} stars={2}/>
									<Stars title={'Ant Design'} stars={4}/>
									<Stars title={'Servlets'} stars={4}/>
									<Stars title={'Spring'} stars={2}/>
									<Stars title={'Java3D'} stars={3}/>
									<Stars title={'JavaEE'} stars={3}/>
									<Stars title={'JPA/Hibernate'} stars={4}/>
									<Stars title={'JUnit'} stars={4}/>
									<Stars title={'JMS'} stars={3}/>
									<Stars title={'JSP'} stars={3}/>
									<Stars title={'Struts'} stars={3}/>
									<Spacer height={10}/>
									<Heading>Tools</Heading>
									<Spacer height={10}/>
									<Stars title={'PNPM Workspaces'} stars={3}/>
									<Stars title={'NX'} stars={1}/>
									<Stars title={'Turborepo'} stars={1}/>
									<Stars title={'Storybook'} stars={1}/>
									<Stars title={'Figma'} stars={1}/>
									<Stars title={'Git'} stars={4}/>
									<Stars title={'AWS S3'} stars={1}/>
									<Stars title={'Facebook API'} stars={3}/>
									<Stars title={'LinkedIn API'} stars={3}/>
									<Stars title={'Google Cloud Fuctions'} stars={3}/>
									<Stars title={'Google BigQuery'} stars={3}/>
									<Stars title={'Contao CMS'} stars={3}/>
									<Stars title={'Tomcat'} stars={3}/>
									<Stars title={'Bea Application Server'} stars={1}/>
									<Spacer height={10}/>
									<Heading>Datenbanken</Heading>
									<Spacer height={10}/>
									<Stars title={'Postgre SQL'} stars={4}/>
									<Stars title={'MongoDB'} stars={1}/>
									<Stars title={'MySQL/MariaDB'} stars={4}/>
									<Stars title={'SQL Server'} stars={2}/>
									<Stars title={'Oracle'} stars={1}/>
								</div>
								<div style={{display: 'flex', justifyContent: 'center', columnGap: 10}}>
									<div>1</div>
									<div>2</div>
									<div style={{textDecoration: 'underline'}}>3</div>
									<div>4</div>
									<div>5</div>
								</div>
							</div>
						</PageRight>
					</div>
				</Page>
				<Spacer height={30} className={'no-print'}/>
				<Page padding={padding}>
					<div style={{display: 'grid', gridTemplateColumns: '9fr 4fr'}}>
						<PageLeft>
							<Heading style={{color: colors.brightBrighterColor}}>Andere Positionen</Heading>
							<Spacer height={20}/>
							<OtherEmployments from={0} to={6} />
							<Spacer height={30}/>
							<Heading style={{color: colors.brightBrighterColor}}>Ausbildungen und Kurse</Heading>
							<Spacer height={20}/>
							<Trainings from={0} to={6}/>
						</PageLeft>
						<PageRight>
							<div style={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								height: '100%',
								textAlign: 'center',
							}}>
								<div>
									<Spacer height={5}/>
									<Heading>Kenntnisse Anwendungen</Heading>
									<Spacer height={10}/>
									<Stars title={'Jetbrains IDEA'} stars={5}/>
									<Stars title={'Putty'} stars={4}/>
									<Stars title={'WinSCP'} stars={4}/>
									<Stars title={'PM2'} stars={3}/>
									<Stars title={'Apache HTTP Server'} stars={2}/>
									<Stars title={'Postman'} stars={4}/>
									<Stars title={'MS/Libre Office'} stars={2}/>
									<Stars title={'Visual Studio Code'} stars={2}/>
									<Stars title={'Delphi'} stars={3}/>
									<Spacer height={10}/>
									<Heading>Sonstiges</Heading>
									<Spacer height={10}/>
									<Stars title={'10-Finger-Schreiben (Neo-Layout)'} stars={5}/>
									<Stars title={'Google Workspace'} stars={3}/>
								</div>
								<div style={{display: 'flex', justifyContent: 'center', columnGap: 10}}>
									<div>1</div>
									<div>2</div>
									<div>3</div>
									<div style={{textDecoration: 'underline'}}>4</div>
									<div>5</div>
								</div>
							</div>
						</PageRight>
					</div>
				</Page>
				<Spacer height={30} className={'no-print'}/>
				<Page padding={padding}>
					<div style={{display: 'grid', gridTemplateColumns: '9fr 4fr'}}>
						<PageLeft>
							<Heading style={{color: colors.brightBrighterColor}}>Zertifikate</Heading>
							<Spacer height={20}/>
							<Certificates from={0} to={9} />
							<Spacer height={15}/>
							<Heading style={{color: colors.brightBrighterColor}}>Interessen</Heading>
							<Spacer height={10}/>
							<div style={{display: 'flex', flexWrap: 'wrap'}}>
								{resume?.interests.map((i, idx) => (
									<div style={{flex: '1 1 40%'}}>
										<div style={{fontSize: fontSize, display: 'grid', gridTemplateColumns: '10px auto 70px'}}>
											<div
												style={{margin: '0 10px 5px 0'}}>{punctuationSymbols.flowerPunktuationMark.text}</div>
											<div style={{marginRight: 5}}>{i}</div>
										</div>
									</div>
								))}
							</div>
							<Spacer height={20}/>
							<div style={{color: colors.brightBrighterColor, fontSize: 12}}>
								<Spacer height={5}/>
								<div>
									* Beinhaltet Projektarbeit / Weiterbildung und Bewerbung / Akquise.
								</div>
								<div>
									** Zeiten der Arbeitslosigkeit zur Vereinfachung zusammengefasst.
								</div>
							</div>
							<Spacer height={20}/>
						</PageLeft>
						<PageRight>
							<div style={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								height: '100%',
								textAlign: 'center',
							}}>
								<div></div>
								<div style={{display: 'flex', justifyContent: 'center', columnGap: 10}}>
									<div>1</div>
									<div>2</div>
									<div>3</div>
									<div>4</div>
									<div style={{textDecoration: 'underline'}}>5</div>
								</div>
							</div>
						</PageRight>
					</div>
				</Page>
			</div>
		</div>
	)
}