const BASE_URL = 'http://localhost:3000/api/revalidate';

const trigger = async () => {
	try {
		const response = await fetch(
			`${BASE_URL}?tag=blog&secret=${process.env.NEXT_PUBLIC_MY_SECRET_TOKEN}`
		);
		const json = await response.json();
		return json;
	} catch (error) {
		if (error instanceof Error) console.log(error.stack);
	}
};

const revalidationService = {
	trigger
};

export default revalidationService;
