import SideNav from '@/components/layout/SideNav'
import PasswordsList from '@/components/passwords/PasswordsList'

export default function Home() {
	return (
		<main className="flex h-full">
			<SideNav />
			<PasswordsList />
		</main>
	)
}
