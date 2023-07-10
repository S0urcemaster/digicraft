import * as React from 'react'
import {Button, IconButton} from '../ui/Form'
import {ReactNode, useRef, useState} from 'react'
import {icons} from '../ui/Icon'
import Page from './preview/Page'
import {useResumeContext} from './resumeContext'
import PageLeft from './preview/PageLeft'
import PageRight from './preview/PageRight'
import Header from './preview/Header'
import {Spacer} from '../ui/Layout'
import Image from 'next/image'
import photo from '../../public/self.jpg'
import {Employment, Training, Project, Certificate} from './types'
import {htmlSymbols, punctuationSymbols} from '../../db/htmlSymbols'
import {usePreviewContext} from './preview/previewContext'

const fontSize = 14
const headingSize = 18
const titleSize = 16
const subTitleSize = 14

function Name(props: { children: ReactNode }) {
	return (
		<div style={{fontSize: 32, fontWeight: 'bold'}}>{props.children}</div>
	)
}

function Profession(props: { children: ReactNode }) {
	return (
		<div style={{fontSize: 20}}>{props.children}</div>
	)
}

function ProfessionReason(props: { children: ReactNode }) {
	return (
		<div style={{fontSize: fontSize}}>{props.children}</div>
	)
}

function Picture(props: { children: ReactNode }) {
	return (
		<div style={{height: 250, width: '4fr', background: '#b6b6b6', overflow: 'hidden', position: 'relative'}}>
			<Image src={photo} alt={'your photo'} height={250}
					 style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}/>
		</div>
	)
}

function Heading(props: { children: ReactNode }) {
	return (
		<div style={{fontSize: headingSize, textAlign: 'left'}}>
			<b>{props.children}</b>
			<hr style={{background: '#d0d0d0', margin: 0, marginTop: 3}}/>
		</div>
	)
}

function SubHeading(props: { children: ReactNode }) {
	return (
		<div style={{fontSize: fontSize, margin: '0 0 3px 0', textAlign: 'left'}}><b>{props.children}</b></div>
	)
}

function Line(props: { children: ReactNode }) {
	return (
		<div style={{fontSize: fontSize, textAlign: 'left'}}>{props.children}</div>
	)
}

function Title(props: { children: ReactNode }) {
	return (
		<div style={{fontSize: titleSize, fontWeight: 'bold'}}>
			{props.children}
		</div>
	)
}

function Subtitle(props: { children: ReactNode }) {
	return (
		<div style={{fontSize: subTitleSize, fontStyle: 'italic'}}>
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
						fontSize: fontSize - 1,
						background: '#eaeaea',
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
		<div style={{display: 'grid', gridTemplateColumns: '1fr 9fr', columnGap: 20}}>
			<div style={{padding: '1px 0 0 0'}}>
				<div style={{textAlign: 'center', paddingBottom: 3}}>{emp.dateFrom} &ndash;</div>
				<div>{emp.dateTo}</div>
			</div>
			<div>
				<Title>{emp.title}</Title>
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
		<div style={{display: 'grid', gridTemplateColumns: '4fr 9fr', columnGap: 20}}>
			<div style={{padding: '1px 0 0 0'}}>
				<div style={{textAlign: 'left', paddingBottom: 3}}>{emp.dateFrom} &ndash; {emp.dateTo}</div>
			</div>
			<div>
				<Title>{emp.title}</Title>
				<Spacer height={5}/>
				<Subtitle>{emp.companyName}, {emp.companyCity}</Subtitle>
			</div>
		</div>
	)
}

function Project(props: { project: Project }) {
	const pro = props.project
	return (
		<div style={{display: 'grid', gridTemplateColumns: '1fr 9fr', columnGap: 20}}>
			<div style={{padding: '1px 0 0 0'}}>
				<div style={{textAlign: 'center', paddingBottom: 3}}>{pro.dateFrom} &ndash;</div>
				<div>{pro.dateTo}</div>
			</div>
			<div>
				<Title>{pro.title}</Title>
				<Spacer height={10}/>
				<Subtitle>{pro.companyName}, {pro.companyCity}</Subtitle>
				<Spacer height={10}/>
				<List list={pro.tasks}></List>
			</div>
		</div>
	)
}

function Training(props: { training: Training }) {
	const emp = props.training
	return (
		<div style={{display: 'grid', gridTemplateColumns: '1fr 9fr', columnGap: 20}}>
			<div style={{padding: '1px 0 0 0'}}>
				<div style={{textAlign: 'center', paddingBottom: 3}}>{emp.dateFrom} &ndash;</div>
				<div>{emp.dateTo}</div>
			</div>
			<div>
				<Title>{emp.title}</Title>
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
		<div style={{display: 'grid', gridTemplateColumns: '3fr 9fr', columnGap: 20}}>
			<div style={{padding: '1px 0 0 0'}}>
				<div style={{textAlign: 'left', paddingBottom: 3}}>{emp.date}</div>
			</div>
			<div>
				<Title>{emp.title}</Title>
				<Spacer height={5}/>
				<Subtitle>{emp.schoolName}, {emp.schoolCity}</Subtitle>
			</div>
		</div>
	)
}

function Stars(props: { title: string, stars: number, left?: boolean }) {

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
					<div key={idx}>{star}</div>
				))}
			</>

		)
	}
	return (
		<>
			{props.left ?
				<div style={{display: 'grid', gridTemplateColumns: '1fr 4fr', margin: '0 0 2px 0', columnGap: 3}}>
					<div style={{display: 'flex', alignItems: 'start', marginTop: -2}}>
						{getStars()}
					</div>
					<div style={{fontSize: fontSize}}>{props.title}</div>
				</div>
				:
				<div style={{display: 'grid', gridTemplateColumns: '4fr 1fr', margin: '0 0 2px 0', columnGap: 3}}>
					<div style={{fontSize: fontSize, textAlign: 'left'}}>{props.title}</div>
					<div style={{display: 'flex', alignItems: 'start', marginTop: -2}}>
						{getStars()}
					</div>
				</div>
			}
		</>
	)
}

export default function ProfilePreview(props: { visible: boolean, hide: () => void, pageCount: number }) {

	const contentHeight = props.pageCount * 297 + 100

	const [padding, setPadding] = useState([20, 20, 20, 20])
	const {resume} = useResumeContext()
	const {printRef, print} = usePreviewContext()

	function Employments(props: { from: number, to: number }) {
		return (
			<>
				{resume?.employments.slice(props.from, props.to).map((emp, idx) => (
					<>
						<Employment key={idx} employment={emp}/>
						{idx < resume?.employments.length - 1 ? <Spacer height={15}/> : null}
					</>
				))}
			</>
		)
	}

	function OtherEmployments(props: {}) {
		return (
			<>
				{resume?.otherEmployments.map((emp, idx) => (
					<>
						<OtherEmployment key={idx} employment={emp}/>
						{idx < resume?.employments.length - 1 ? <Spacer height={10}/> : null}
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
						{idx < resume?.projects.length - 1 ? <Spacer height={10}/> : null}
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
						{idx < resume?.trainings.length - 1 ? <Spacer height={10}/> : null}
					</>
				))}
			</>
		)
	}

	function Certificates(props: {}) {
		return (
			<>
				{resume?.certificates.map((emp, idx) => (
					<>
						<Certificate key={idx} certificate={emp}/>
						{idx < resume?.certificates.length - 1 ? <Spacer height={10}/> : null}
					</>
				))}
			</>
		)
	}

	function A(props: {href: string, children: ReactNode}) {
		return (
			<a href={props.href}>{props.children}</a>
		)
	}

	return (
		<div style={{
			position: 'absolute', left: 0, top: 0, width: '100%', height: contentHeight + 'mm',
			display: props.visible ? 'block' : 'none', background: 'lightgrey', zIndex: 3,
			fontFamily: 'Arial', color: 'black',
		}}>
			<div style={{width: '100%', textAlign: 'right', margin: '15px 10px 20px 0'}} className={'no-print'}>
				<Button value={'Drucken'} onClick={print}/>
				<IconButton name={icons.X} size={25} onClick={props.hide}/>
			</div>
			<div ref={printRef}>
				<Page padding={padding}>
					<div style={{display: 'grid', gridTemplateColumns: '9fr 4fr'}}>
						<PageLeft firstPage>
							<ProfessionReason>{resume?.professionData.professionReasonText}</ProfessionReason>
							<Spacer height={15}/>
							<Heading>Berufserfahrung als Softwareentwickler</Heading>
							<Spacer height={12}/>
							<Employments from={0} to={4}/>
							<Spacer height={20}/>
						</PageLeft>
						<PageRight firstPage>
							<div style={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								height: '100%',
								textAlign: 'center',
							}}>
								<div>
									<Picture> </Picture>
									<Spacer height={10}/>
									<Heading>Persönliche Daten</Heading>
									<Spacer height={10}/>
									<SubHeading>React Webseite</SubHeading>
									<Line><A href={resume?.personalData.website!}>{resume?.personalData.website}</A></Line>
									<Spacer height={10}/>
									<SubHeading>Email</SubHeading>
									<Line><a href={'mailto:sebastian-teister@outlook.de'}>{resume?.personalData.email}</a></Line>
									<Spacer height={10}/>
									<SubHeading>Telefon</SubHeading>
									<Line>{resume?.personalData.telephone}</Line>
									<Spacer height={10}/>
									<SubHeading>Anschrift</SubHeading>
									<Line>{resume?.personalData.street}</Line>
									<Line>{resume?.personalData.city}</Line>
									<Spacer height={10}/>
									<SubHeading>Persönlichkeit</SubHeading>
									<Line><a
										href={'https://www.16personalities.com/de/intp-personlichkeit'}>{resume?.personalData.personality}</a></Line>
									<Spacer height={10}/>
									<SubHeading>Social Media</SubHeading>
									<div style={{display: 'flex', columnGap: 15}}>
										{resume?.personalData.urls.map((url, idx) => (
											<Line><a href={url[1]}>{url[0]}</a></Line>
										))}
									</div>
									<Spacer height={15}/>
									<Heading>Stärken</Heading>
									<Spacer height={10}/>
									<Line>Logik</Line>
									<Spacer height={3}/>
									<Line>Intuition</Line>
									<Spacer height={3}/>
									<Line>Abstraktionsvermögen</Line>
									<Spacer height={15}/>
									<Heading>Sprachen</Heading>
									<Spacer height={10}/>
									<Stars title={'Deutsch'} stars={5}/>
									<Stars title={'Englisch'} stars={4}/>
								</div>
								<div style={{display: 'flex', justifyContent: 'center', columnGap: 10}}>
									<div style={{textDecoration: 'underline'}}>1</div>
									<div>2</div>
									<div>3</div>
									<div>4</div>
								</div>
							</div>
						</PageRight>
					</div>
				</Page>
				<Spacer height={30} className={'no-print'}/>
				<Page padding={padding}>
					<div style={{display: 'grid', gridTemplateColumns: '9fr 4fr'}}>
						<PageLeft>
							<Spacer height={10}/>
							<Employments from={4} to={6}/>
							<Spacer height={5}/>
							<Heading>Weitere Berufserfahrung</Heading>
							<Spacer height={10}/>
							<OtherEmployments/>
							<Spacer height={25}/>
							<Heading>Eigene Projekte</Heading>
							<Spacer height={10}/>
							<Projects from={0} to={2}/>
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
									<Heading>Programmier-paradigmen</Heading>
									<Spacer height={10}/>
									<Stars title={'OOP'} stars={5}/>
									<Stars title={'Funktionale Programmierung'} stars={4}/>
									<Stars title={'Komponenten-orientierte Programmierung'} stars={4}/>
									<Stars title={'Abstraktion /Generalisierung'} stars={4}/>
									<Stars title={'Parallele Programmierung'} stars={3}/>
									<Spacer height={10}/>
									<Heading>React-Paradigmen</Heading>
									<Spacer height={10}/>
									<Stars title={'State / Ref'} stars={5}/>
									<Stars title={'Context'} stars={4}/>
									<Stars title={'Custom Hooks'} stars={4}/>
									<Stars title={'Reducer'} stars={4}/>
									<Stars title={'Higher Order Components'} stars={2}/>
									<Spacer height={10}/>
									<Heading>Programmiersprachen nach Aktualität</Heading>
									<Spacer height={10}/>
									<Stars title={'TypeScript'} stars={4}/>
									<Stars title={'HTML'} stars={4}/>
									<Stars title={'CSS'} stars={4}/>
									<Stars title={'Go'} stars={4}/>
									<Stars title={'Python'} stars={2}/>
									<Stars title={'C++'} stars={2}/>
									<Stars title={'PHP'} stars={4}/>
									<Stars title={'SQL'} stars={3}/>
									<Stars title={'Java'} stars={4}/>
									<Stars title={'Lua'} stars={4}/>
									<Stars title={'C#'} stars={2}/>
									<Stars title={'Scala'} stars={1}/>
									<Stars title={'Delphi'} stars={2}/>
									<Stars title={'Assembler'} stars={1}/>
									<Spacer height={10}/>
								</div>
								<div style={{display: 'flex', justifyContent: 'center', columnGap: 10}}>
									<div>1</div>
									<div style={{textDecoration: 'underline'}}>2</div>
									<div>3</div>
									<div>4</div>
								</div>
							</div>
						</PageRight>
					</div>
				</Page>
				<Spacer height={30} className={'no-print'}/>
				<Page padding={padding}>
					<div style={{display: 'grid', gridTemplateColumns: '9fr 4fr'}}>
						<PageLeft>
							<Spacer height={10}/>
							<Projects from={2} to={8}/>
							<Spacer height={10}/>
							<Heading>Ausbildungen und Kurse</Heading>
							<Spacer height={10}/>
							<Trainings from={0} to={4}/>
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
									<Stars title={'Next.js'} stars={3}/>
									<Stars title={'Express.js'} stars={2}/>
									<Stars title={'GraphQL'} stars={3}/>
									<Stars title={'Vue.js'} stars={4}/>
									<Stars title={'VueX'} stars={3}/>
									<Stars title={'Contao CMS'} stars={3}/>
									<Stars title={'Laravel'} stars={4}/>
									<Stars title={'Electron'} stars={3}/>
									<Stars title={'Web Audio API'} stars={2}/>
									<Stars title={'Ant Design (Component Lib)'} stars={4}/>
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
									<Stars title={'Git'} stars={3}/>
									<Stars title={'Apache'} stars={3}/>
									<Stars title={'AWS S3'} stars={1}/>
									<Stars title={'Facebook API'} stars={3}/>
									<Stars title={'LinkedIn API'} stars={3}/>
									<Stars title={'Google Cloud Fuctions'} stars={4}/>
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
									<Stars title={'SQL Server'} stars={1}/>
								</div>
								<div style={{display: 'flex', justifyContent: 'center', columnGap: 10}}>
									<div>1</div>
									<div>2</div>
									<div style={{textDecoration: 'underline'}}>3</div>
									<div>4</div>
								</div>
							</div>
						</PageRight>
					</div>
				</Page>
				<Spacer height={30} className={'no-print'}/>
				<Page padding={padding}>
					<div style={{display: 'grid', gridTemplateColumns: '9fr 4fr'}}>
						<PageLeft>
							<Spacer height={10}/>
							<Trainings from={4} to={8}/>
							<Spacer height={10}/>
							<Heading>Zertifikate</Heading>
							<Spacer height={10}/>
							<Certificates/>
							<Spacer height={10}/>
							<Heading>Interessen</Heading>
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
							<Spacer height={10}/>
							<Heading>Legende</Heading>
							<Spacer height={10}/>
							<Stars left stars={1} title={'Kurzzeitig damit zu tun gehabt'} />
							<Stars left stars={2} title={'Grundlegende Kenntnisse'} />
							<Stars left stars={3} title={'Projekterfahrung'} />
							<Stars left stars={4} title={'Fortgeschrittene Kenntnisse'} />
							<Stars left stars={5} title={'Umfassendes Wissen und Übung'} />
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
									<Stars title={'Visual Studio Code'} stars={1}/>
									<Spacer height={10}/>
									<Heading>Sonstiges</Heading>
									<Spacer height={10}/>
									<Stars title={'10-Finger-Schreiben (Neo-Layout)'} stars={5}/>
								</div>
								<div style={{display: 'flex', justifyContent: 'center', columnGap: 10}}>
									<div>1</div>
									<div>2</div>
									<div>3</div>
									<div style={{textDecoration: 'underline'}}>4</div>
								</div>
							</div>
						</PageRight>
					</div>
				</Page>
			</div>
		</div>
	)
}