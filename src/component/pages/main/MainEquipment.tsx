'use client'
import Image from 'next/image'
import scss from './MainEquipment.module.scss'
import { CiTimer } from 'react-icons/ci'

const MainEquipment = () => {
	return (
		<section className={scss.MainEquipment}>
			<div className='container'>
				<div className={scss.content}>
					<h3>Передовые решения для заправки газом</h3>
					<p>
						Откройте для себя наш ассортимент современного оборудования,
						разработанного для <br /> оптимизации процессов заправки газовых
						баллонов.
					</p>
					<div className={scss.cards}>
						<div className={scss.card}>
							<Image
								src='https://e7.pngegg.com/pngimages/37/826/png-clipart-comics-cartoon-mangaka-madara-uchiha-anime-madara-comics-black-hair.png'
								alt='img'
								width={350}
								height={300}
							/>
							<div className={scss.data}>
								<CiTimer />
								<h5>Автоматические заправочные станции</h5>
							</div>
							<p>
								Точные и быстрые системы с современными модулями управления.
							</p>
							<button>Узнать больше</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MainEquipment
