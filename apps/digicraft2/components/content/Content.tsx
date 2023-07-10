import TopButton from '../ui/TopButton'
import {useRouter} from 'next/router'
import Ad from './Ad'
import {Ad as AdType} from '../../db/ads'
import {adsLeft, adsRight} from '../../db/ads'
import {routes} from '../../lib/routes'
import {CSSProperties, useEffect} from 'react'
import {useLocalStorage} from '../../lib/localStorageContext'
import {globals} from '../../lib/globals'
import TourBox from '../ui/TourBox'
import BrightnessBox from '../ui/BrightnessBox'
import {postVisit, Visit} from '../../lib/api'
import QuotesBox from '../ui/QuotesBox'
import {HR, Spacer} from '../ui/Layout'
import pattern from '../../public/pattern-light.svg'


export default function (props: { style?: CSSProperties, children: any }) {

	const router = useRouter()
	const {brightness} = useLocalStorage()

	useEffect(() => {
		if (router && router.route) {
			postVisit(router.route)
		}
	}, [router.route])

	function getAds(ads: Array<AdType>) {
		if (router.pathname === routes.apps.passwordMaker) {
			return ads.map((ad, id) => {
				return (
					<Ad key={id} src={ad.src} href={ad.href} alt={ad.alt} width={130}
						 style={{marginBottom: ad.marginBottom}}/>
				)
			})
		}
	}

	function getBrightness() {
		return globals.brightness[brightness]
	}

	return (
		<main style={{paddingTop: 0,
			// padding: '30px 30px 40px 30px',
			// backgroundImage: `url(${pattern})`,
			// backgroundRepeat: 'repeat',
			// background: globals.brightness[brightness].background, color: globals.brightness[brightness].color
		}}>
			{props.children}
		</main>
	)
}
