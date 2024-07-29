import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { ContainerFooter, FooterBar, LinkItem, Links } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
	<FooterBar>
		<div className="container">
			<ContainerFooter>
				<Link to="/">
					<img src={logo} alt="Codigo Certo"></img>
				</Link>
				<nav>
					<Links>
						<LinkItem>
							<a href="#about">Sobre</a>
						</LinkItem>
						<LinkItem>
							<a href="#personaltastes">Gostos pessoais</a>
						</LinkItem>
						<LinkItem>
							<a href="#motivations">Motivações</a>
						</LinkItem>
					</Links>
				</nav>
			</ContainerFooter>
			<p>{currentYear} - &copy; Lindberg Pereira - Todos os direitos reservados.</p>
		</div>
	</FooterBar>
)

export default Footer
