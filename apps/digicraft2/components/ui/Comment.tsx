import * as React from 'react'

export default function Comment(props: {text: string}) {
	return <div dangerouslySetInnerHTML={{__html:`<!-- ${props.text} -->`}}></div>
}