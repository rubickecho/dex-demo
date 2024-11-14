import { CardList } from '@/components/CardList'
// import { SITE_DESCRIPTION, SITE_NAME } from '@/utils/site'
import { EXAMPLE_ITEMS } from './examples/examples'

export default function Home() {
	return (
		<>
			<div className='mt-4'>
				<CardList items={EXAMPLE_ITEMS} />
			</div>
		</>
	)
}
