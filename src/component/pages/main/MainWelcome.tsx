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
							Мы разрабатываем и производим высококачественное оборудование{' '}
							<br />
							для наполнения газовых баллонов, обеспечивая безопасность, <br />
							эффективность и удобство использования. Наши технологии
							соответствуют <br /> мировым стандартам и применяются в различных
							отраслях. Мы осуществляем <br /> доставку по всему миру,
							гарантируя надежность и долговечность нашей <br />
							продукции. Современные технологии. Высокая надежность. <br />{' '}
							Доставка по всему миру.
						</p>
						<div className={scss.btns}>
							<button className={scss.btn__first}>Изучить решения</button>
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
