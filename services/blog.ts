import { DataSchema, BlogSchema } from '@/zod-schema';
import { Data, Blog } from '@/types';

const BASE_URL = 'https://frontend-case-api.sbdev.nl/api/posts';

type GetBlogsParams = {
	page?: number;
	perPage?: number;
	sortBy?: string;
	sortDirection?: 'asc' | 'desc';
	searchPhrase?: string;
	categoryId?: number;
};

const getBlogs = async ({
	page,
	perPage,
	sortBy,
	sortDirection,
	searchPhrase,
	categoryId
}: // TODO: Check the return type (Promise<Data> | Promise<Blog[]>)
GetBlogsParams): Promise<Data> => {
	const response = await fetch(
		`${BASE_URL}?page=${page}&perPage=${perPage}&sortBy=${sortBy}&sortDirection=${sortDirection}&searchPhrase=${searchPhrase}&categoryId=${categoryId}`
	);

	if (!response.ok) {
		throw new Error(`${response.status} ${response.statusText}`);
	}

	const data = await response.json();

	// TODO: Check the good way of using the schema to check the data
	try {
		DataSchema.parse(data);
	} catch (error) {
		throw new Error();
	}

	return data;
};

const addBlog = async (blog: Partial<Blog>): Promise<Blog> => {
	const response = await fetch(BASE_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(blog)
	});

	if (!response.ok) {
		throw new Error(`${response.status} ${response.statusText}`);
	}

	const newBlog = await response.json();

	// TODO: Check the good way of using the schema to check the data
	try {
		BlogSchema.parse(newBlog);
	} catch (error) {
		throw new Error();
	}

	return newBlog;
};

// TODO: Check if I need to implement an other fetching function for pagination
