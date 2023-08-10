import { Metadata } from 'next';
import SWRLogicWrapper from './components/swr-logic-wrapper';

export const metadata: Metadata = {
	title: 'Social B | Home',
	description:
		'Create your own blog and check the latest news about the tech world'
};

export default async function Home() {
	return (
		<div className="sm:h-full">
			<SWRLogicWrapper />
		</div>
	);
}
