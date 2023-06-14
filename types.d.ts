import { z } from 'zod';
import {
	BlogSchema,
	BlogDataSchema,
	CategorySchema,
	CategoryDataSchema,
	FormDataSchema,
	RawDataSchema
} from './models/zod-schema';

type Blog = z.infer<typeof BlogSchema>;
type BlogData = z.infer<typeof BlogDataSchema>;
type Category = z.infer<typeof CategorySchema>;
type CategoryData = z.infer<typeof CategoryDataSchema>;
type FormDataType = z.infer<typeof FormDataSchema>;
type RawData = z.infer<typeof DataSchema>;
