'use client';

import { useForm } from 'react-hook-form';
import { useSWRConfig } from 'swr';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormDataSchema } from '@/models/zod-schema';
import { FormDataType, CategoryData, Category, BlogData } from '@/types';
import blogServices from '@/services/blog';
import { Blog } from '@/types';
import { AiOutlineExclamationCircle } from 'react-icons/ai';

type BlogFormProps = {
	blogCategories: CategoryData;
	blogsMutate: () => void;
};

const BlogForm = ({ blogCategories, blogsMutate }: BlogFormProps) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<FormDataType>({
		resolver: zodResolver(FormDataSchema)
	});

	const { mutate } = useSWRConfig();

	const onSubmit = async (data: FormDataType) => {
		const formData: FormData = new FormData();

		for (const key in data) {
			// @ts-ignore
			formData.append(key, data[key]);
		}

		const optimisticBlog: Blog = {
			id: Math.floor(Math.random() * 10000),
			created_at: new Date().toISOString(),
			updated_at: new Date().toISOString(),
			title: data.title,
			content: data.content,
			category_id: Number(data.category_id),
			img_url:
				'https://placehold.co/350x100/black/white?font=Roboto&text=Image+loading%2E%2E%2E',
			category: {
				id: Number(data.category_id),
				name: blogCategories.find(
					(category) => category.id === Number(data.category_id)
				)?.name!,
				created_at: null,
				updated_at: null
			}
		};

		const addBlogOptions = (newBlog: Blog) => {
			return {
				optimisticData: (blogs: BlogData) => [...blogs, newBlog],
				rollbackOnError: true,
				populateCache: (added: Blog, todos: BlogData) => [...todos, added],
				revalidate: true
			};
		};

		try {
			// @ts-ignore
			blogsMutate(blogServices.add(formData), addBlogOptions(optimisticBlog));
			reset();
		} catch (error) {
			// TODO: Display something on the UI when an error happened (maybe a toast?)
			console.log(error);
		}
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col bg-white py-8 sm:h-full sm:justify-between sm:px-6"
		>
			<div className="space-y-4">
				<div className="flex flex-col gap-y-2">
					<label
						htmlFor="title"
						className="text-base font-semibold text-secondary"
					>
						Title
					</label>
					<input
						id="title"
						type="text"
						{...register('title')}
						aria-invalid={errors?.title ? 'true' : 'false'}
						placeholder="Title"
						className={`bg-[#F2F2F2] p-4 text-base placeholder:italic placeholder:text-paragraph ${
							errors?.title && 'border border-red-400'
						}`}
					/>
					{errors?.title && (
						<div
							className="flex items-center justify-end gap-x-2 text-xs font-medium text-red-400"
							role="alert"
						>
							<AiOutlineExclamationCircle size={18} />
							<span>{errors?.title?.message}</span>
						</div>
					)}
				</div>
				<div className="flex flex-col gap-y-2">
					<label
						htmlFor="category_id"
						className="text-base font-semibold text-secondary"
					>
						Categories
					</label>
					<select
						id="category_id"
						{...register('category_id')}
						aria-invalid={errors?.category_id ? 'true' : 'false'}
						className={`bg-[#F2F2F2] p-4 text-base placeholder:italic placeholder:text-paragraph ${
							errors?.category_id && 'border border-red-400'
						}`}
					>
						{blogCategories?.map((category: Category) => (
							<option key={category.id} value={category.id}>
								{category.name}
							</option>
						))}
					</select>
					{errors?.category_id && (
						<div
							className="flex items-center justify-end gap-x-2 text-xs font-medium text-red-400"
							role="alert"
						>
							<AiOutlineExclamationCircle size={18} />
							{errors?.category_id?.message}
						</div>
					)}
				</div>
				<div className="flex flex-col gap-y-2">
					<label
						htmlFor="image"
						className="text-base font-semibold text-secondary"
					>
						Image
					</label>
					<input
						id="image"
						type="file"
						{...register('image')}
						aria-invalid={errors?.image ? 'true' : 'false'}
						placeholder="Title"
						className={`bg-[#F2F2F2] p-4 text-base placeholder:italic placeholder:text-paragraph ${
							errors?.image && 'border border-red-400'
						}`}
					/>
					{errors?.image && (
						<div
							className="flex items-center justify-end gap-x-2 text-xs font-medium text-red-400"
							role="alert"
						>
							<AiOutlineExclamationCircle size={18} />
							<span>{errors?.image?.message}</span>
						</div>
					)}
				</div>
				<div className="flex flex-col gap-y-2">
					<label
						htmlFor="content"
						className="text-base font-semibold text-secondary"
					>
						Content
					</label>
					<textarea
						id="content"
						rows={8}
						{...register('content')}
						aria-invalid={errors?.content ? 'true' : 'false'}
						className={`mb-6 bg-[#F2F2F2] p-4 text-base placeholder:italic placeholder:text-paragraph sm:mb-0 ${
							errors?.content && 'border border-red-400'
						}`}
					></textarea>
					{errors?.content && (
						<div
							className="flex items-center justify-end gap-x-2 text-xs font-medium text-red-400"
							role="alert"
						>
							<AiOutlineExclamationCircle size={18} />
							<span>{errors?.content?.message}</span>
						</div>
					)}
				</div>
			</div>
			<button
				className="mx-auto block w-fit self-center rounded-full bg-accent px-12 py-2 text-base font-bold text-white"
				type="submit"
			>
				Create blog
			</button>
		</form>
	);
};

export default BlogForm;
