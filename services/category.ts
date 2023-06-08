import { BlogCategoriesSchema, BlogCategorySchema } from '@/zod-schema';
import { BlogCategories, BlogCategory } from '@/types';

const BASE_URL = 'https://frontend-case-api.sbdev.nl/api/categories';

const getCategories = async (): Promise<BlogCategories> => {
	const response = await fetch(BASE_URL);

	if (!response.ok) {
		throw new Error(`${response.status} ${response.statusText}`);
	}

	const categories = await response.json();

	// TODO: Check the good way of using the schema to check the data
	try {
		BlogCategoriesSchema.parse(categories);
	} catch (error) {
		throw new Error();
	}

	return categories;
};

// TODO: Check if/how I'm gonna use this function
