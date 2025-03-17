import React from 'react'
import MainWelcome from './MainWelcome'
import MainEquipment from './MainEquipment'
import MainAdvantages from './MainAdvantages'

const MainPage = () => {
	return (
		<div
			style={{
				background:
					'linear-gradient(180deg, rgba(0,70,140,0.07279408345369398) 0%, rgba(0,70,140,0.07279408345369398) 100%)',
			}}
		>
			<MainWelcome />
			<MainEquipment />
			<MainAdvantages />
		</div>
	)
}

export default MainPage
