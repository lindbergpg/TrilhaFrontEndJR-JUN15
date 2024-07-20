import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'

import { StyleGlobal } from './styles'
import RoutesDom from './routes'
import Footer from './components/Footer'

function App() {
	return (
		<BrowserRouter>
			<StyleGlobal />
			<div>
				<Header />
				<RoutesDom />
				<Footer />
			</div>
		</BrowserRouter>
	)
}

export default App
