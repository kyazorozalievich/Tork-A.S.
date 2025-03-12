'use client'
import Link from 'next/link'
import scss from './Footer.module.scss'

const Footer = () => {
	return (
		<section className={scss.Footer}>
			<div className='container'>
				<div className={scss.content}>
					<div className={scss.tork}>
						<h5>TORK A.S</h5>
						<p>
							Leading manufacturer of automatic <br /> machines for filling gas
							cylinders.
						</p>
					</div>
					<div className={scss.products}>
						<h6>Products</h6>
						<Link href='/'>Filling Stations</Link>
						<Link href='/'>Testing Equipment</Link>
						<Link href='/'>Transport Systems</Link>
					</div>
					<div className={scss.company}>
						<h6>Company</h6>
						<Link href='/'>About Us</Link>
						<Link href='/'>Contact</Link>
						<Link href='/'>Careers</Link>
					</div>
					<div className={scss.contact}>
						<h6>Contact</h6>
						<p>1234 Industry Avenue</p>
						<p>Engineering District, TK 12345</p>
						<p>email: info@torkash.com</p>
						<p>phone: +1 (555) 123-1234</p>
					</div>
				</div>
			</div>
			<hr />
			<div className={scss.footer}>
				<h6>2025 TORKAS. All rights reserved</h6>
				<div className={scss.footer__links}>
					<Link href='/'>Privacy Policy</Link>
					<Link href='/'>Terms Of Service </Link>
				</div>
			</div>
		</section>
	)
}

export default Footer
