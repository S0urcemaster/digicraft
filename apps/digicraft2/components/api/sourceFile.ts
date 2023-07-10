import axios from 'axios'
import {globals} from '../../lib/globals'


export async function getSourceFile(app: string, file: string): Promise<any> {
	const res = await axios.get(`${globals.root}/source/${app}/${file}`)
	return res.data
}