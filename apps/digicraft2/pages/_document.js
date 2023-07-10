import {Html, Head, Main, NextScript} from 'next/document'
import React from 'react'
import Comment from '../components/ui/Comment'
// import axios from 'axios';

// axios.interceptors.response.use(
// 	(response) => {
// 		// Erfolgreiche Antworten hier verarbeiten
// 		return response;
// 	},
// 	(error) => {
// 		// Fehlerantwort hier verarbeiten
// 		if (error.response) {
// 			// Fehlerantwort vom Server erhalten
// 			// Unterdrücke den Fehler-Log, wenn die Antwort einen Statuscode von 401 hat
// 			if (error.response.status === 401) {
// 				// Fehlermeldung unterdrücken
// 				console.log('Unterdrücke Axios-Fehlermeldung.');
// 				return Promise.reject(error);
// 			}
// 			// Wenn der Statuscode nicht 401 ist, gebe den Fehler weiter
// 			return Promise.reject(error);
// 		} else if (error.request) {
// 			// Keine Antwort vom Server erhalten
// 			console.log(error.request);
// 			return Promise.reject(error);
// 		} else {
// 			// Etwas ist schief gelaufen
// 			console.log('Error', error.message);
// 			return Promise.reject(error);
// 		}
// 	}
// );

export default function Document() {

	return (
		<Html lang={'de'}>
			<Head>
				<link rel="icon" href="/favicon.ico"/>
				{/*<title>Digi Craft</title> "should not be used" warning*/}
				<meta name="author" content="Sebastian Teister"/>
				<meta name="copyright" content="Sebastian Teister"/>
				<meta httpEquiv="expires" content="86400"/>
				<meta name="page-topic" content="Forschung Technik"/>
				<meta name="page-type" content="Private Homepage"/>
				<meta httpEquiv="content-language" content="de"/>
				<Comment text={''} />
			</Head>
			<body>
			<Main/>
			<NextScript/>
			</body>
		</Html>
	)
}