import * as dotenv from 'dotenv'

dotenv.config()

import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

main()

export async function main() {
	const chatCompletion = await getGroqChatCompletion();
	// Print the completion returned by the LLM.
	console.log(chatCompletion.choices[0]?.message?.content || "");
}

export async function getGroqChatCompletion() {

	return groq.chat.completions.create({
		messages: [
			{
				role: "user",
				content: "Produce Text worth 3000 token",
			},
		],
		model: "llama3-8b-8192",
	});
}
