'use client'
import Image from 'next/image'
import scss from './MainEquipment.module.scss'
import { CiTimer } from 'react-icons/ci'

const MainEquipment = () => {
	const cardsData = [
		{
			img: 'https://i.pinimg.com/736x/ed/9f/7a/ed9f7aa67ecbd2120414034db89505ba.jpg',
			icon: <CiTimer />,
			title: 'Automatic Refilling Stations',
			description: 'Precise and fast systems with advanced control modules.',
		},
		{
			img: 'https://i.pinimg.com/736x/ed/9f/7a/ed9f7aa67ecbd2120414034db89505ba.jpg',
			icon: <CiTimer />,
			title: 'Automatic Refilling Stations',
			description: 'Precise and fast systems with advanced control modules.',
		},
		{
			img: 'https://i.pinimg.com/736x/ed/9f/7a/ed9f7aa67ecbd2120414034db89505ba.jpg',
			icon: <CiTimer />,
			title: 'Automatic Refilling Stations',
			description: 'Precise and fast systems with advanced control modules.',
		},
	]
	return (
		<section className={scss.MainEquipment}>
			<div className='container'>
				<div className={scss.content}>
					<h1>Advanced Solutions for Gas Refilling</h1>
					<p>
						Explore our range of modern and safe equipment designed for
						convenient and efficient gas cylinder refilling. We offer reliable
						solutions that help automate the process, reduce gas losses and
						improve safety. Our equipment meets high quality standards and
						ensures stable and uninterrupted operation.
					</p>
					<div className={scss.cards}>
						{cardsData.map((el, idx) => (
							<div className={scss.card} key={idx}>
								<div className={scss.imgBlock}>
									<Image src={el.img} alt='img' width={400} height={320} />
								</div>
								<div className={scss.allText}>
									<div className={scss.data}>
										<span>{el.icon}</span>
										<h4>{el.title}</h4>
									</div>
									<p>{el.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default MainEquipment
