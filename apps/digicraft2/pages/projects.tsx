import Item, {ProjectTech} from '../components/content/ProjectItem'
import {HR} from '../components/ui/Layout'
import projectItems from '../db/projects'
import {H1, H2, H3} from '../components/ui/Typography'
import {Box} from '../components/ui/Box'
import Head from 'next/head'
import Meta, {metas} from '../components/content/Meta'
import * as React from 'react'
import ContentLayout from '../components/content/ContentLayout'

const styles = {
	ul: {
		listStyleType: 'decimal',
	},
}

const reactSkills = [
	'useContext', 'useRef', 'useReducer', 'Custon Hooks', 'Higher Order Components',
]

export default function projects() {

	function getTechStack(): string[] {
		const set = new Set<string>()
		projectItems.forEach(i => {
			i.techStack.forEach(tech => {
				set.add(tech)
			})
		})
		return Array.from(set)
	}

	return (
		<>
			<Meta meta={metas.projects}/>
			<ContentLayout left={
				<>
				</>
			} right={
				<>
				</>
			}
			>
				<H1>Projekte</H1>
				<Box style={{paddingBottom: 10}}>
					<H3 first>React Skills</H3>
					<div style={{display: 'flex', rowGap: '10px', flexWrap: 'wrap'}}>
						{reactSkills.map((tech, idx) => (
							<ProjectTech tech={tech} key={idx}/>
						))}
					</div>
				</Box>
				<Box style={{paddingBottom: 10}}>
					<H3 first>Chronologischer Tech Stack (2023 - 2003):</H3>
					<div style={{display: 'flex', rowGap: '10px', flexWrap: 'wrap'}}>
						{getTechStack().map((tech, idx) => (
							<ProjectTech tech={tech} key={idx}/>
						))}
					</div>
				</Box>
				{projectItems.map((p, id) => {
					return (
						<div key={id}>
							<Item
								title={p.title}
								date={p.date}
								client={p.client}
								techStack={p.techStack}
							>
								<ul style={{listStylePosition: 'outside', ...styles.ul}}>
									{
										p.details.map((det, id) => {
											return (
												<li key={id}>{det}</li>
											)
										})
									}
								</ul>
							</Item>
							{/*<Spacer height={25}/>*/}
						</div>
					)
				})}
			</ContentLayout>
		</>
	)
}