import type { Metadata } from 'next';
import { BlogData, Blog, RawData } from '@/types';
import blogServices from '@/services/blog';
import { notFound } from 'next/navigation';

import BlogCard from '@/app/components/blog-card/BlogCard';
import Pagination from '@/app/components/pagination';

type Params = {
	params: {
		pageId: string;
	};
};

export async function generateMetadata({
	params: { pageId }
}: Params): Promise<Metadata> {
	const rawData: Promise<RawData> = blogServices.getRawData(pageId);
	const pageData = await rawData;
	const blogs = pageData?.data;

	if (!blogs?.length) {
		return {
			title: 'Page Not Found'
		};
	}

	return {
		title: 'Blogs',
		description: 'Read about tech trendind topics'
	};
}

const PaginatedPage = async ({ params: { pageId } }: Params) => {
	const rawData: Promise<RawData> = blogServices.getRawData(pageId);
	const pageData = await rawData;
	const blogs = pageData?.data;

	const currentPage = pageData?.current_page;
	const totalPages = pageData?.last_page;
	const hideNextButton = !pageData?.next_page_url;
	const hidePrevButton = !pageData?.prev_page_url;

	if (!blogs?.length) return notFound();

	return (
		<main className="mx-auto flex h-full max-w-[1440px] flex-col items-center justify-center gap-6 sm:gap-12 sm:p-12 sm:pt-0">
			<h1 className="text-3xl font-bold text-secondary sm:text-5xl">Blog</h1>
			<section className="bg-white">
				<div className="grid-gap-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{blogs.map((blog: Blog) => (
						<BlogCard key={blog.id} blog={blog} />
					))}
				</div>
				<div className="mt-6 flex justify-center">
					<Pagination
						currentPage={currentPage}
						count={totalPages}
						hideNextButton={hideNextButton}
						hidePrevButton={hidePrevButton}
					/>
				</div>
			</section>
		</main>
	);
};
export default PaginatedPage;

export async function generateStaticParams() {
	const rawData: Promise<RawData> = blogServices.getRawData(1);
	const data = await rawData;
	const pageNumber = data.total;
	const pageIds = Array.from({ length: pageNumber }, (_, index) => index + 1);

	return pageIds.map((id) => ({
		pageId: id.toString()
	}));
}
