'use client';

import Link from 'next/link';
import PaginationMui from '@mui/material/Pagination';
import PaginationItemMui from '@mui/material/PaginationItem';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

const PrevButton = () => {
	return (
		<div className="flex items-center gap-2 text-accent">
			<HiOutlineArrowNarrowLeft color="#F27623" />
			<span className="hidden sm:block">Previous page</span>
		</div>
	);
};

const NextButton = () => {
	return (
		<div className="flex items-center gap-2 text-accent">
			<span className="hidden sm:block">Next page</span>
			<HiOutlineArrowNarrowRight color="#F27623" />
		</div>
	);
};

type PaginationComponentProps = {
	currentPage: number;
	count: number;
	hideNextButton: boolean;
	hidePrevButton: boolean;
};

const Pagination = ({
	currentPage,
	count,
	hideNextButton,
	hidePrevButton
}: PaginationComponentProps) => {
	return (
		<PaginationMui
			defaultPage={1}
			page={currentPage}
			hidePrevButton={hidePrevButton}
			hideNextButton={hideNextButton}
			count={count}
			renderItem={(item) => (
				<PaginationItemMui
					{...item}
					component={Link}
					size={item.selected ? 'large' : 'small'}
					href={`/blogs/page/${item.page}`}
					slots={{
						previous: PrevButton,
						next: NextButton
					}}
				/>
			)}
		/>
	);
};
export default Pagination;
