import { HeaderBar, ContainerBar, LinkItem, Links, Logo } from "./styles";

import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<HeaderBar>
			<div className="container">
				<ContainerBar>
					<h1>
						<Link to="/">
							<Logo src={logo} alt="Codigo Certo" />
						</Link>
					</h1>
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
				</ContainerBar>
			</div>
		</HeaderBar>
	);
};

export default Header;
