'use client'
import Link from 'next/link'
import scss from './Header.module.scss'

const Header = () => {
	const links = [
		{ title: 'Home', href: '/' },
		{ title: 'Products', href: '/products' },
		{ title: 'About', href: '/about' },
		{ title: 'Contact', href: '/contact' },
	]

	return (
		<section className={scss.Header}>
			<div className='container'>
				<div className={scss.content}>
					<h1>
						TORK<span> A.Ş.</span>
					</h1>
					<div className={scss.nav}>
						{links.map((el, idx) => (
							<Link key={idx} href={el.href}>
								{el.title}
							</Link>
						))}
						<button>Click</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Header
