export const UserRole = 'user'
export const AssistantRole = 'assistant'
export const SystemRole = 'system'

const example: Context = {
	name: 'example',
	sessionId: '',
	system: {},
	conversation: [],
	subContexts: [],
}

const example1: Context = {
	name: 'Code File',
	sessionId: 'a',
	system: {
		name: '',
		content: ''
	},
	conversation: [],
	subContexts: [],
}

export type Context = {
	name: string
	sessionId: string
	system: string | undefined
	conversation: string[]
	subContexts: Context[]
}

type Message = {
	role: 'user' | 'assistant' | 'system'
	name?: string
	content: string
}

type UserMessage = {
	content: string
}

type AssistantMessage = {
	content: string
}

type SystemMessage = {
	content: string
}

type Tool = {
	type: string
	function: {
		description: string
		name: string
		parameters?: { [key: string]: string }
	}
}

type CompletionRequest = {
	model: string
	messages: Message[]
	temperature?: number
	maxTokens?: number
	topP?: number
	stream?: boolean
	stop?: string
	seed?: number
	tools?: Tool[]
	toolChoice?: 'auto' | 'enabled' | 'disabled'
}

