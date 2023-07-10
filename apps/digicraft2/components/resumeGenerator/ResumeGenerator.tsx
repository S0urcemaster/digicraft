import * as React from 'react'
import Assistant from './Assistant'
import {useState} from 'react'
import {ResumeContextProvider} from './resumeContext'
import {Button} from '../ui/Form'
import Preview from './Preview'
import {Spacer} from '../ui/Layout'
import PreviewContextProvider from './preview/previewContext'
import ProfilePreview from './ProfilePreview'


export default function ResumeGenerator(props: {}) {

	const [previewVisible, setPreviewVisible] = useState(false)
	const [profilePreviewVisible, setProfilePreviewVisible] = useState(false)

	return (
		<>
			<ResumeContextProvider>
				<Button value={'Preview'} onClick={() => setPreviewVisible(true)} />
				<Button value={'Beraterprofil Preview'} onClick={() => setProfilePreviewVisible(true)} />
				<Spacer height={20} />
				<Assistant />
				<PreviewContextProvider>
					<Preview visible={previewVisible} hide={() => setPreviewVisible(false)} pageCount={5} />
				</PreviewContextProvider>
				<PreviewContextProvider>
					<ProfilePreview visible={profilePreviewVisible} hide={() => setProfilePreviewVisible(false)} pageCount={4} />
				</PreviewContextProvider>
			</ResumeContextProvider>
		</>
	)
}