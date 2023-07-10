import * as React from 'react'
import Meta, {metas} from '../../components/content/Meta'
import {H1, P} from '../../components/ui/Typography'
import {Box} from '../../components/ui/Box'
import {BR, HR} from '../../components/ui/Layout'
import ContentLayout from '../../components/content/ContentLayout'
import {default as BlogMenu} from '../../components/content/menu/Blog'

export default function ApplicationRedesign() {
	return (
		<ContentLayout leftWide left={
			<>
				<BlogMenu/>
			</>
		} right={
			<>
			</>
		}
		>
			<article>
				<Meta meta={metas.applicationRedesign}/>
				<H1>Application Redesign</H1>
				<Box>
					<P first>
						It's mostly becoming a prototype when you start coding an application with little knowledge of
						functional and/or technical requirements from a distinct complexity on.<BR />
						Meaning, when the complexity of junctions inside the source code become too much and/or the distances
						of logical chains' links become too far, it gets hard for the human brain to fluently work off these
						longer chains.
					</P>
					<P>
						So the aim must be for a well-designed software project, meaning the source code,
						to be as concise as possible. In iterative developments where the design is not clear until the
						last technical and architectural situation reveals, what mostly makes the iterative paradigm - which
						is good for building prototypes but small projects as well - to fail: the project becomes more and
						more clustered and the effectivity in development drops.
					</P>
					<P>
						Related to the project's size, further development and current state there needs to be calculation about
						an architectural redesign to make things better for the future. What that means is that all the scatter
						that evolved over development time will be integrated in a better fundamental software basis so that
						there are not so many exception from the base design - everything fits better together which
						in turn raises productivity to a normal level.
					</P>
					<P>
						Repeating processes in a software design over two or several source code files should be structured
						in a similar pattern so that the programmer right away knows how to implement new features when there
						are similar already present. <i>Applying patterns</i> is much much easier than <i>understanding</i> what's
						going on. Software design is in the way better when less thinking is required to know what's going on.
					</P>
				</Box>
			</article>
		</ContentLayout>
	)
}