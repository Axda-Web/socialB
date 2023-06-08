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
		created_at: z.string(),
		updated_at: z.string()
	})
});

export const DataSchema = z.object({
	data: z.array(BlogSchema)
});

export const BlogCategorySchema = z.object({
	id: z.number(),
	name: z.string(),
	created_at: z.string(),
	updated_at: z.string()
});

export const BlogCategoriesSchema = z.array(BlogCategorySchema);

export const FormDataSchema = z.object({
	title: z.string().min(3).max(50),
	category: z.string(),
	content: z.string().min(20).max(500)
});
