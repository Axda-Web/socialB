export default function Loading() {
	// TODO: Implement loading skeleton
	return (
		<main className="mx-auto flex h-full max-w-[1440px] flex-col items-center justify-center gap-6 sm:gap-12 sm:p-12 sm:pt-0">
			<h1 className="text-3xl font-bold text-secondary sm:text-5xl">Blog</h1>
			<div className="bg-white p-6">
				<div className="grid-gap-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
					<div className="h-[263px] w-72 min-w-[310px] animate-pulse bg-[#F2F2F2]" />
					<div className="h-[263px] w-72 min-w-[310px] animate-pulse bg-[#F2F2F2]" />
					<div className="h-[263px] w-72 min-w-[310px] animate-pulse bg-[#F2F2F2]" />
					<div className="h-[263px] w-72 min-w-[310px] animate-pulse bg-[#F2F2F2]" />
					<div className="h-[263px] w-72 min-w-[310px] animate-pulse bg-[#F2F2F2]" />
					<div className="h-[263px] w-72 min-w-[310px] animate-pulse bg-[#F2F2F2]" />
					<div className="h-[263px] w-72 min-w-[310px] animate-pulse bg-[#F2F2F2]" />
					<div className="h-[263px] w-72 min-w-[310px] animate-pulse bg-[#F2F2F2]" />
				</div>
				<div className="mt-6 flex justify-center">
					<div className="h-8 w-72 animate-pulse rounded-3xl bg-[#F2F2F2]"></div>
				</div>
			</div>
		</main>
	);
}
