import { CategoryDataSchema } from '@/models/zod-schema';

const BASE_URL = 'https://frontend-case-api.sbdev.nl/api/categories';
const token = process.env.NEXT_PUBLIC_API_TOKEN;

const getAll = async () => {
	try {
		const response = await fetch(BASE_URL, {
			headers: {
				token: token!
			}
		});

		const json = await response.json();
		const parsedData = CategoryDataSchema.parse(json);
		return parsedData;
	} catch (error) {
		if (error instanceof Error) console.log(error.stack);
	}
};

const categoryServices = {
	getAll,
	BASE_URL
};

export default categoryServices;
