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
				</div>
				<div className={scss.cards}>
					<div className={scss.card}>
						<div className={scss.imgBlock}>
							<Image
								src='https://i.pinimg.com/736x/ed/9f/7a/ed9f7aa67ecbd2120414034db89505ba.jpg'
								alt='img'
								width={400}
								height={320}
							/>
						</div>
						<div className={scss.allText}>
							<div className={scss.data}>
								<div className={scss.timer}>
									<CiTimer />
								</div>
								<h5>Автоматические заправочные станции</h5>
							</div>
							<p>
								Точные и быстрые системы с современными модулями управления.
							</p>
							<button>Узнать больше</button>
						</div>
					</div>
					<div className={scss.card}>
						<div className={scss.imgBlock}>
							<Image
								src='https://i.pinimg.com/736x/0b/4b/07/0b4b074b25bf6e18716b82a87d13b4f4.jpg'
								alt='img'
								width={400}
								height={320}
							/>
						</div>
						<div className={scss.allText}>
							<div className={scss.data}>
								<div className={scss.timer}>
									<CiTimer />
								</div>
								<h5>Автоматические заправочные станции</h5>
							</div>
							<p>
								Точные и быстрые системы с современными модулями управления.
							</p>
							<button>Узнать больше</button>
						</div>
					</div>
					<div className={scss.card}>
						<div className={scss.imgBlock}>
							<Image
								src='https://i.pinimg.com/736x/d6/f9/6f/d6f96f9c15283391a5db8eaffa815598.jpg'
								alt='img'
								width={400}
								height={320}
							/>
						</div>
						<div className={scss.allText}>
							<div className={scss.data}>
								<div className={scss.timer}>
									<CiTimer />
								</div>
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
