import { Environment } from '$houdini'

export default new Environment(async function ({ text, variables = {} }) {
	// send the request to the api
	const result = await this.fetch('https://api-eu-central-1.graphcms.com/v2/ckq7zh29xg0s401z6g34g75qi/master', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query: text,
			variables,
		}),
	})

	// parse the result as json
	return await result.json()
})
