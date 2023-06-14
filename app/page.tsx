import { Metadata } from 'next';
import SWRLogicWrapper from './components/swr-logic-wrapper';

export const metadata: Metadata = {
	title: 'SB Blog',
	description:
		'Create your own blog and check the latest news about the tech world'
};

export default async function Home() {
	return (
		<div className="h-full sm:bg-[#F4F4F4]">
			<SWRLogicWrapper />
		</div>
	);
}
