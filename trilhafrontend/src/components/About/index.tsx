import { Description, Photograph, ContainerInfor } from "./styles";
import photoPerfil from "../../assets/images/foto.jpg";
import Title from "../Title";

const About = () => (
	<ContainerInfor id="about">
		<div className="container">
			<Title>Sobre</Title>
			<div>
				<Description>
					Olá! Meu nome é Lindberg Pereira Gomes, tenho 31 anos e sou natural de
					Brasília. Atualmente, trabalho como assistente financeiro de contas a
					pagar, mas estou buscando uma transição de carreira, estudando Análise
					e Desenvolvimento de Sistemas. Tenho uma forte paixão por tecnologia e
					desenvolvimento de software, com especialização em frontend. Meu
					objetivo de carreira é me tornar um desenvolvedor full stack,
					combinando meu conhecimento em frontend e backend para criar soluções
					completas e eficazes.
				</Description>
				<Photograph src={photoPerfil} />
			</div>
		</div>
	</ContainerInfor>
);

export default About;
