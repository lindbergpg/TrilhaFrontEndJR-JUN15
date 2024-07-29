import {
	ContactContainer,
	TitlePag,
	TitleCard,
	ContactsCard,
	SocialMedia,
} from "./styles";
import git from "../../assets/images/git.png";
import linkedin from "../../assets/images/linkedin.png";

const Contact = () => (
	<div className="container">
		<ContactContainer>
			<TitlePag>ENTRE EM CONTATO</TitlePag>
			<div>
				<TitleCard>ENDEREÇO</TitleCard>
				<ContactsCard>
					<span className="material-symbols-outlined">pin_drop</span>
					<p>Quadra 12, Paranoá-DF</p>
				</ContactsCard>
			</div>
			<div>
				<TitleCard>TELEFONE</TitleCard>
				<ContactsCard>
					<span className="material-symbols-outlined">smartphone</span>
					<p>(61) 9 9304-2957</p>
				</ContactsCard>
			</div>
			<div>
				<TitleCard>EMAIL</TitleCard>
				<ContactsCard>
					<span className="material-symbols-outlined">mail</span>
					<p>lindbergpg@gmail.com</p>
				</ContactsCard>
			</div>
			<div>
				<TitleCard>REDES</TitleCard>
				<SocialMedia>
					<li>
						<a
							href="https://github.com/lindbergpg"
							target="_blank"
							rel="noreferrer"
						>
							{/* biome-ignore lint/a11y/useAltText: <explanation> */}
							<img src={git} />
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/lindbergpereira/"
							target="_blank"
							rel="noreferrer"
						>
							{/* biome-ignore lint/a11y/useAltText: <explanation> */}
							<img src={linkedin} />
						</a>
					</li>
				</SocialMedia>
			</div>
		</ContactContainer>
	</div>
);

export default Contact;
