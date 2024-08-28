import * as React from 'react'
import { useDigiCraftContext } from '../../DigiCraftContext'
import { Button } from '@blueprintjs/core'
import { useState } from 'react'
import { useTextBudContext } from './TextBudContext'

export function TextBud() {

	const {state} = useDigiCraftContext()
	const {textBud, clipboard, tabNo, setTabNo, currentPrompt, setCurrentPrompt} = useTextBudContext()

	const [promptName, setPromptName] = useState('')
	const [system, setSystem] = useState('')
	const [user, setUser] = useState('')
	const [tool, setTool] = useState('')
	const [assistant, setAssistant] = useState('')

	function prompt() {

	}

	function save() {

	}

	return (
		<div id={'page'} style={{
			width: '100%',
			height: state.environment.clientHeight - 50,
			paddingTop: 10,
			background: 'rgba(60, 60, 70, 0.5)',
			overflow: 'scroll'
		}}>
			<div id={'layout'} style={{
				width: '100%', height: '100%', background: 'rgba(20, 30, 40, 0.5)',
				borderColor: 'rgba(70, 200, 250, 0.9)', borderWidth: 1, borderStyle: 'solid',
				display: 'grid', gridTemplateColumns: '1fr 400px 1fr'
			}}
			>
				<div id={'systemtextarea'} style={{
					width: '100%',
					height: '100%',
					borderColor: 'rgba(70, 200, 250, 0.9)',
					borderWidth: 1,
					borderStyle: 'solid',
					padding: '5px 10px 5px 10px',
				}}
				>
						<textarea style={{
							color: 'white',
							backgroundColor: 'rgba(0, 0, 0, 0)',
							textAlign: 'right',
							border: 'none',
							outline: 'none',
							resize: 'none',
							width: '100%',
							height: '100%',
						}}
									 placeholder={'System'} className={'textarea-no-scrollbar'}
									 value={currentPrompt().system} onChange={event => setCurrentPrompt({...currentPrompt(), system: event.target.value})}
						></textarea>
				</div>

				<div>
					<div id={'usertextarea'} style={{
						width: '100%',
						borderColor: 'rgba(70, 200, 250, 0.9)',
						borderWidth: 1,
						borderStyle: 'solid',
						padding: '5px 10px 5px 5px',
						height: 100,
					}}
					>
						<textarea style={{
							color: 'white', backgroundColor: 'rgba(0, 0, 0, 0)', textAlign: 'center',
							border: 'none',
							outline: 'none',
							resize: 'none',
							width: '100%',
							height: '100%',
						}}
									 placeholder={'User'} className={'textarea-no-scrollbar'}
									 value={currentPrompt().user} onChange={event => setCurrentPrompt({...currentPrompt(), user: event.target.value})}
						></textarea>
					</div>
					<div style={{
						width: '100%',
						padding: '5px 5px 0 5px'
					}}>
						<div id={'tabs'} style={{whiteSpace: 'nowrap'}}>
							{
								textBud.prompts.map((p, ix) => {
									return <button key={ix} style={{width: 30}} onClick={() => setTabNo(ix)}>{ix}</button>
								})
							}
						</div>

						<div id={'functions'} style={{padding: '5px 5px 0 2px'}}>
							<div style={{display: 'grid', gridTemplateColumns: '10fr 1fr'}}>
								<input type={'text'} value={currentPrompt().name} placeholder={'Name'} style={{width: '100%'}}
										 onChange={event => setCurrentPrompt({...currentPrompt(), name: event.target.value})}
								/>
								<div style={{whiteSpace: 'nowrap'}}>
									<select style={{maxWidth: 60}}>
										<option>Load</option>
										<option>Translate english</option>
										<option>Improve1</option>
										<option>Punctuation</option>
										<option>Synonyms</option>
									</select>
									<button style={{width: 60}}>Save</button>
									<button style={{width: 60}}>Delete</button>
									<button style={{width: 60}}>Clear</button>
								</div>
							</div>
							<div style={{}}>
								<div>Select</div>
								<button>Select System</button>
								<button>Select User</button>
								<button>Select Assistant</button>
							</div>
							{/*<div style={{}}>*/}
							{/*	<div>Text-Operations</div>*/}
							{/*	<button>Check</button>*/}
							{/*	<button>Grammar</button>*/}
							{/*	<button>Punctuation</button>*/}
							{/*	<button>Quick translate</button>*/}
							{/*	<button>Synonyms</button>*/}
							{/*</div>*/}
							<div style={{}}>
								<div>Model</div>
								<select>
									<option>LLaMA</option>
									<option>Bloom</option>
									<option>Falcon</option>
									<option>GPT</option>
									<option>Guanaco</option>
									<option>LaMDA</option>
								</select>
							</div>
							<div style={{}}>
								<div>Global</div>
								<button onClick={prompt}>Prompt</button>
								<button onClick={prompt}>Save</button>
							</div>
						</div>
					</div>

				</div>

				<div id={'assistant'} style={{
					width: '100%',
					height: '100%',
					borderColor: 'rgba(70, 200, 250, 0.9)',
					borderWidth: 1,
					borderStyle: 'solid',
					padding: '5px 10px 5px 5px',
				}}>
					<textarea style={{
						color: 'white',
						backgroundColor: 'rgba(0, 0, 0, 0)',
						textAlign: 'left',
						border: 'none',
						outline: 'none',
						resize: 'none',
						width: '100%',
						height: '100%',
					}} placeholder={'Assistant'} className={'textarea-no-scrollbar'}
								 value={currentPrompt().assistant} onChange={event => setCurrentPrompt({...currentPrompt(), assistant: event.target.value})}
					></textarea>
				</div>

			</div>
		</div>
	)
}