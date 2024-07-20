import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import KnowMore from './pages/KnowMore'

const RoutesDom = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/knowmore" element={<KnowMore />} />
	</Routes>
)

export default RoutesDom
