import {Achievement, AchievementTypes, PraiseTypes} from './context'
import {B, H1, H2, H3, P} from '../ui/Typography'
import {ImageButton} from '../ui/Form'
import trash from '/public/fa/trash.svg'
import pen from '/public/fa/pen.svg'
import {Box} from '../ui/Box'

export default function DisplayRow(props: {
	achievement: Achievement,
	deleteAchievement: Function, editAchievement: Function
}) {

	function Heading() {
		switch (props.achievement.praise) {
			case PraiseTypes.small[0]:
				return <P first><B>{props.achievement.title}</B></P>
			case PraiseTypes.moderate[0]:
				return <H3 first>{props.achievement.title}</H3>
			case PraiseTypes.high[0]:
				return <H2 first>{props.achievement.title}</H2>
			case PraiseTypes.veryHigh[0]:
				return <H1 first>{props.achievement.title}</H1>
		}
		return <></>
	}

	return (
		// <div style={{display: 'grid', gridTemplateColumns: '2fr repeat(3, 1fr)'}}>
		<Box>
			<div style={{display: 'flex', justifyContent: 'space-between'}}>
				<Heading/>
				<div style={{display: 'flex'}}>
					<P style={{margin: '0 10px 0 0'}}>
						{props.achievement.tipe === AchievementTypes.completed ? 'Erreicht am: ' : 'Vom: '}
						{new Date(Date.parse(props.achievement.dateFrom)).toLocaleDateString('de-DE')}
					</P>
					{props.achievement.tipe === AchievementTypes.ongoing ?
						<P style={{margin: '0 10px 0 0'}}>
							{props.achievement.tipe === AchievementTypes.ongoing ? 'Bis: ' : ''}
							{props.achievement.tipe === AchievementTypes.ongoing ?
								new Date(Date.parse(props.achievement.dateUntil)).toLocaleDateString('de-DE') : ''}
						</P> : ''}
					<ImageButton width={20} height={20} padding={2}
									 onClick={() => props.deleteAchievement(props.achievement)}
									 src={trash} style={{height: 30}}/>
					<ImageButton width={20} height={20} padding={2}
									 onClick={() => props.editAchievement(props.achievement)}
									 src={pen} style={{height: 30}}/>
				</div>
			</div>
			<P>{props.achievement.details}</P>
		</Box>
	)
}