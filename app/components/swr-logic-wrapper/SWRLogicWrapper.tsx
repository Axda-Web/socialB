'use client';

import useSWRInfinite from 'swr/infinite';
import useSWR from 'swr';
import { Blog } from '@/types';
import blogServices from '@/services/blog';
import categoryServices from '@/services/category';
import Skeleton from '@mui/material/Skeleton';

import BlogCard from '../blog-card';
import BlogForm from '../blog-form';

const PAGE_SIZE = 4;

const SWRLogicWrapper = () => {
	const {
		isLoading: blogCategoriesLoading,
		error: blogCategoriesError,
		data: blogCategories,
		mutate: blogCategoriesMutate
	} = useSWR(categoryServices.BASE_URL, categoryServices.getAll);

	const {
		data,
		mutate: blogsMutate,
		size,
		setSize,
		isValidating,
		isLoading
	} = useSWRInfinite(
		(index) =>
			`${blogServices.BASE_URL}?page=${
				index + 1
			}&perPage=${PAGE_SIZE}&sortBy=created_at&sortDirection=desc`,
		blogServices.getAllInfiniteLoading
	);

	// @ts-ignore
	const blogs = data ? [].concat(...data) : [];
	const isLoadingMore =
		isLoading || (size > 0 && data && typeof data[size - 1] === 'undefined');
	const isEmpty = data?.[0]?.length === 0;
	const isReachingEnd =
		// @ts-ignore
		isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE);

	if (isLoading || blogCategoriesLoading) {
		return (
			<main className="mx-auto grid max-w-[1440px] grid-cols-1 content-center gap-x-6 px-6 sm:h-full sm:grid-cols-2 sm:px-8">
				<div className="flex flex-col bg-white py-8 sm:h-full sm:justify-between sm:px-6 sm:shadow">
					<div className="space-y-8">
						<div className="animate-pulse bg-[#F2F2F2] p-6" />
						<div className="animate-pulse bg-[#F2F2F2] p-6" />
						<div className="animate-pulse bg-[#F2F2F2] p-6" />
						<div className="p-22 py22 mb-6 animate-pulse bg-[#F2F2F2] sm:mb-0 sm:py-32" />
					</div>
					<div className="mx-auto block w-fit animate-pulse self-center rounded-full bg-accent px-20 py-4" />
				</div>
				<div className="bg-white px-6 py-8 sm:px-4 sm:shadow">
					<div className="grid-gap-4 mb-6 grid grid-cols-1 gap-6 sm:h-[556px] sm:grid-cols-2 sm:overflow-y-auto sm:pb-2">
						<div className="h-[263px] w-full animate-pulse bg-[#F2F2F2] shadow-md" />
						<div className="h-[263px] w-full animate-pulse bg-[#F2F2F2] shadow-md" />
						<div className="h-[263px] w-full animate-pulse bg-[#F2F2F2] shadow-md" />
						<div className="h-[263px] w-full animate-pulse bg-[#F2F2F2] shadow-md" />
					</div>
					<div className="mx-auto block w-fit animate-pulse self-center rounded-full bg-accent px-20 py-4" />
				</div>
			</main>
		);
	}

	if (!data || !blogCategories) {
		return <h1 className="text-5xl">Error</h1>;
	}

	return (
		<main className="mx-auto grid max-w-[1440px] grid-cols-1 content-center gap-x-6 px-6 sm:h-full sm:grid-cols-2 sm:px-8">
			<BlogForm blogCategories={blogCategories} blogsMutate={blogsMutate} />
			<section className="bg-white px-6 py-8 sm:px-4 sm:shadow">
				<div className="grid-gap-4 mb-6 grid grid-cols-1 gap-6 sm:h-[556px] sm:grid-cols-2 sm:overflow-y-auto sm:pb-2">
					{isEmpty ? <p>No blogs found.</p> : null}
					{blogs.map((blog: Blog) => (
						<BlogCard key={blog.id} blog={blog} />
					))}
				</div>
				<button
					className="mx-auto block w-fit self-center rounded-full bg-accent px-12 py-2 text-base font-bold text-white transition-transform duration-150 hover:scale-[1.03]"
					type="button"
					disabled={isLoadingMore || isReachingEnd}
					onClick={() => setSize(size + 1)}
				>
					{isLoadingMore
						? 'Loading...'
						: isReachingEnd
						? 'No more issues'
						: 'Load more'}
				</button>
			</section>
		</main>
	);
};
export default SWRLogicWrapper;
