'use client'
import Image from 'next/image'
import scss from './MainWelcome.module.scss'

const MainWelcome = () => {
	return (
		<section className={scss.MainWelcome}>
			<div className='container'>
				<div className={scss.content}>
					<div className={scss.text}>
						<h2>
							Automated Solutions <br /> for Gas Cylinder Refilling
						</h2>
						<p>
							We develop and manufacture high-quality equipment for gas cylinder
							refilling, ensuring safety, efficiency, and ease of use. Our
							technologies comply with global standards and are used across
							various industries. We provide worldwide delivery, guaranteeing
							the reliability and durability of our products. Cutting-edge
							technology. High reliability. Global delivery.
						</p>
						<div className={scss.btns}>
							<button className={scss.btn__first}>Explore Solutions</button>
							<button className={scss.btn__second}>Contact Us</button>
						</div>
					</div>
					<Image
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNKQtTbYMdi-crj_rajFWsQUFoPplOUfP5uw&s'
						alt=''
						width={350}
						height={350}
					/>
				</div>
			</div>
		</section>
	)
}

export default MainWelcome
