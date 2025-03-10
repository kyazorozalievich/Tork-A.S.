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
							Автоматизированные <br /> решения для заправки
							<br /> газовых баллонов
						</h2>
						<p>
							Мы разрабатываем и производим высококачественное оборудование для
							наполнения <br /> газовых баллонов, обеспечивая безопасность,
							эффективность и удобство использования. <br /> Наши технологии
							соответствуют мировым стандартам и применяются в различных
							отраслях. <br /> Мы осуществляем доставку по всему миру,
							гарантируя надежность и долговечность нашей продукции. Современные
							технологии. Высокая надежность. Доставка по всему миру.
						</p>
						<div className={scss.btns}>
							<button>Изучить решения</button>
							<button className={scss.btn__second}>Связаться с нами</button>
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
