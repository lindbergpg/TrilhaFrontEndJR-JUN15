import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from './components/Header'

import { StyleGlobal } from './styles'
import Home from './pages/Home'

const routes = createBrowserRouter([
	{
		path: '/',
		element: <Home />
	}
])

function App() {
	return (
		<>
			<StyleGlobal />
			<div>
				<Header />
				<RouterProvider router={routes} />
			</div>
		</>
	)
}

export default App
