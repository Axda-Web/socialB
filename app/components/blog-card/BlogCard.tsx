import Link from 'next/link';
import Image from 'next/image';
import formatedDate from '@/utils/formatedDate';
import { Blog } from '@/types';

type BlogCardProps = {
	blog: Blog;
};

const BlogCard = ({ blog }: BlogCardProps) => {
	return (
		// TODO: Check bug link clickable outside of the card
		<article className="h-[263px] w-full shadow-md transition-transform duration-150 hover:scale-[1.02]">
			<Link href={`/blogs/${blog.id}`}>
				<div className="relative z-20 h-[72px] w-full">
					<Image
						className="object-cover shadow-[inset_0_0_0_2000px_rgba(0,0,0,0.8)]"
						src={`https://frontend-case-api.sbdev.nl/storage/${blog.img_url}`}
						fill
						sizes="(max-width: 768px) 100vw, 25vw"
						alt="blog cover"
					/>
					<div className="absolute bottom-2 flex w-full justify-between px-4 text-info italic text-white">
						<span>{formatedDate(blog.created_at)}</span>
						<span>{blog.category.name}</span>
					</div>
				</div>
				<div className="space-y-2 p-4">
					<h3 className="line-clamp-1 overflow-hidden text-ellipsis text-heading font-bold text-secondary">
						{blog.title}
					</h3>
					<p className="line-clamp-6 max-h-full text-base font-light text-paragraph">
						{blog.content}
					</p>
				</div>
			</Link>
		</article>
	);
};
export default BlogCard;
