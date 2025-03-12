'use client'
import scss from './MainOther.module.scss'

const MainOther = () => {
	return (
		<section className={scss.MainOther}>
			<div className='container'>
				<div className={scss.content}>
					<div className={scss.ready}>
						<p>Ready to Transform Your Operations?</p>
					</div>
					<div className={scss.text}>
						<h2>
							Implement Modern Technologies for <br /> the Gas Industry
						</h2>
						<p>
							We help businesses worldwide modernize their gas cylinder filling
							processes. Contact us today to learn how our solutions can benefit
							your operations.
						</p>
					</div>
					<div className={scss.btns}>
						<button>Request a Demo</button>
						<button className={scss.active}>Download Brochure</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MainOther
