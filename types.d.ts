import { z } from 'zod';
import {
	BlogSchema,
	DataSchema,
	BlogCategorySchema,
	BlogCategoriesSchema,
	FormDataSchema
} from './zod-schema';

type Blog = z.infer<typeof BlogSchema>;
type Data = z.infer<typeof DataSchema>;
type BlogCategory = z.infer<typeof BlogCategorySchema>;
type BlogCategories = z.infer<typeof BlogCategoriesSchema>;
type FormData = z.infer<typeof FormDataSchema>;
