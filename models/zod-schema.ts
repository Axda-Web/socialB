import { z } from 'zod';

export const BlogSchema = z.object({
	id: z.number(),
	created_at: z.string(),
	updated_at: z.string(),
	title: z.string(),
	content: z.string(),
	category_id: z.number(),
	img_url: z.string(),
	category: z.object({
		id: z.number(),
		name: z.string(),
		created_at: z.string().nullable(),
		updated_at: z.string().nullable()
	})
});

export const BlogDataSchema = z.array(BlogSchema);

export const LinkSchema = z.object({
	url: z.string().nullable(),
	label: z.string(),
	active: z.boolean()
});

export const RawDataSchema = z.object({
	current_page: z.number(),
	data: BlogDataSchema,
	first_page_url: z.string(),
	from: z.number().nullable(),
	last_page: z.number(),
	last_page_url: z.string(),
	links: z.array(LinkSchema),
	next_page_url: z.string().nullable(),
	path: z.string(),
	per_page: z.string(),
	prev_page_url: z.string().nullable(),
	to: z.number().nullable(),
	total: z.number()
});

export const CategorySchema = z.object({
	id: z.number(),
	name: z.string(),
	created_at: z.string().nullable(),
	updated_at: z.string().nullable()
});

export const CategoryDataSchema = z.array(CategorySchema);

const allowedMimeTypes = ['image/png', 'image/jpeg', 'image/jpg'];

export const FormDataSchema = z.object({
	title: z
		.string()
		.trim()
		.min(3, { message: 'Title must contain at least 3 characters' })
		.max(50, { message: 'Title must contain at most 50 characters' }),
	category_id: z.enum(['1', '2', '3', '4']),
	content: z
		.string()
		.trim()
		.min(20, { message: 'Blog must contain at least 20 characters' })
		.max(500, { message: 'Blog must contain at most 500 characters' }),
	image: z
		.any()
		.transform((value, ctx) => {
			if (value instanceof FileList && value.length > 0) {
				return value[0];
			}
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: 'Image is required'
			});
		})
		.refine((value) => allowedMimeTypes.includes(value?.type!), {
			message: `Supported formats: jpeg, jpg, png`
		})
});
