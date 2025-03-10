import React from 'react'
import MainWelcome from './MainWelcome'
import MainEquipment from './MainEquipment'
import MainAdvantages from './MainAdvantages'
import MainOther from './MainOther'

const MainPage = () => {
	return (
		<div
			style={{
				background:
					'linear-gradient(180deg, rgba(13, 113, 162, 0.204) 0%, rgba(13, 113, 162, 0.086) 35%, rgba(13, 113, 162, 0.09) 100%)',
			}}
		>
			<MainWelcome />
			<MainEquipment />
			<MainAdvantages />
			<MainOther />
		</div>
	)
}

export default MainPage
