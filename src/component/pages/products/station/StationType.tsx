'use client'
import { GiCheckMark } from 'react-icons/gi'
import scss from './StationType.module.scss'
import Image from 'next/image'
import { FiChevronRight } from 'react-icons/fi'
import { useRouter } from 'next/navigation'

const StationType = () => {
	const router = useRouter()
	const stationTypeData = [
		{
			img: 'https://i.pinimg.com/736x/8e/c6/f8/8ec6f85136d3c57d376a75fefff4c6ab.jpg',
			title: 'Compact Stations',
			description: 'Ideal solution for small businesses and local use',
			icon: <GiCheckMark />,
			character1: 'Productivity up to 50 cylinders per hour',
			character2: 'Compact size and mobility',
			character3: 'Easy installation and operation',
			character4: 'Low energy consumption',
		},
		{
			img: 'https://i.pinimg.com/736x/b6/15/ae/b615ae5b4921aa2159de4aa56d185364.jpg',
			title: 'Medium Stations',
			description:
				'Optimal balance of performance and cost for medium businesses',
			icon: <GiCheckMark />,
			character1: 'Productivity up to 100 cylinders per hour',
			character2: 'Partial automation of processes',
			character3: 'Extended security system',
			character4: 'Modular design',
		},
		{
			img: 'https://i.pinimg.com/736x/e6/15/99/e61599346fa799994b6e6ac87cbfb867.jpg',
			title: 'Industrial Stations',
			description: 'High-performance complexes for large enterprises',
			icon: <GiCheckMark />,
			character1: 'Productivity up to 200 cylinders per hour',
			character2: 'Complete automation of all processes',
			character3: 'Integration with corporate systems',
			character4: 'Multi-level security system',
		},
	]
	return (
		<section className={scss.StationType}>
			<div className='container'>
				<div className={scss.content}>
					<h2>Types of Gas Filling Stations</h2>
					<h6>
						We offer various types of gas filling stations optimized for
						different operating conditions
					</h6>
					<div className={scss.stationTypeBlocks}>
						{stationTypeData.map((el, idx) => (
							<div className={scss.stationTypeBlock} key={idx}>
								<Image src={el.img} alt='img' width={200} height={100} />
								<h3>{el.title}</h3>
								<p>{el.description}</p>
								<a>
									<span>{el.icon}</span>
									{el.character1}
								</a>
								<a>
									<span>{el.icon}</span>
									{el.character2}
								</a>
								<a>
									<span>{el.icon}</span>
									{el.character3}
								</a>
								<a>
									<span>{el.icon}</span>
									{el.character4}
								</a>
								<button onClick={() => router.push('/contact')}>
									<FiChevronRight /> Get in touch
								</button>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default StationType
