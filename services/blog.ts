import { BlogDataSchema, BlogSchema, RawDataSchema } from '@/models/zod-schema';
import { Blog } from '@/types';

const BASE_URL = 'https://frontend-case-api.sbdev.nl/api/posts';
const token = process.env.NEXT_PUBLIC_API_TOKEN;

type GetBlogsParams = {
	page?: number;
	perPage?: number;
	sortBy?: 'created_at' | 'title';
	sortDirection?: 'asc' | 'desc';
	searchPhrase?: string;
	categoryId?: number;
};

const getRawData = async (id: string | number | undefined) => {
	try {
		const response = await fetch(
			`${BASE_URL}?page=${id}&perPage=8&sortBy=created_at&sortDirection=desc`,
			{
				headers: {
					token: token!
				}
			}
		);

		const json = await response.json();
		const parsedData = RawDataSchema.parse(json);
		return parsedData;
	} catch (error) {
		if (error instanceof Error) console.log(error.stack);
	}
};

const getAllWithParams = async ({
	page,
	perPage,
	sortBy,
	sortDirection,
	searchPhrase,
	categoryId
}: GetBlogsParams) => {
	try {
		const response = await fetch(
			`${BASE_URL}?page=${page}&perPage=${perPage}&sortBy=${sortBy}&sortDirection=${sortDirection}&searchPhrase=${searchPhrase}&categoryId=${categoryId}`,
			{
				headers: {
					token: token!
				}
			}
		);

		const json = await response.json();
		const parsedData = BlogDataSchema.parse(json.data);
		return parsedData;
	} catch (error) {
		if (error instanceof Error) console.log(error.stack);
	}
};

const getAll = async () => {
	try {
		const response = await fetch(
			`${BASE_URL}?page=1&perPage=8&sortBy=created_at&sortDirection=desc`,
			{
				headers: {
					token: token!
				}
			}
		);

		const json = await response.json();
		const parsedData = BlogDataSchema.parse(json.data);
		return parsedData;
	} catch (error) {
		if (error instanceof Error) console.log(error.stack);
	}
};

const getAllInfiniteLoading = async (dynamicUrl: string) => {
	try {
		const response = await fetch(dynamicUrl, {
			headers: {
				token: token!
			}
		});

		const json = await response.json();
		const parsedData = BlogDataSchema.parse(json.data);
		return parsedData;
	} catch (error) {
		if (error instanceof Error) console.log(error.stack);
	}
};

const add = async (formData: FormData) => {
	try {
		const response = await fetch(BASE_URL, {
			method: 'POST',
			headers: {
				token: token!
			},
			body: formData
		});

		const newBlog: Blog = await response.json();
		const parsedNewBlog = BlogSchema.parse(newBlog);
		return parsedNewBlog;
	} catch (error) {
		if (error instanceof Error) console.log(error.stack);
	}
};

const blogServices = {
	getRawData,
	getAllWithParams,
	getAll,
	getAllInfiniteLoading,
	add,
	BASE_URL,
	token
};

export default blogServices;
