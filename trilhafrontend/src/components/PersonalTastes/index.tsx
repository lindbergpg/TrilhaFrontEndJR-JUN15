import { Description, ContainerInfor, CardPersonalTastes, Cards, TitlePersonal } from './styles'
import Title from '../Title'

const PersonalTastes = () => (
	<ContainerInfor>
		<div className="container">
			<Title>Gostos Pessoais</Title>
      <Cards>
      <CardPersonalTastes>
        <span className="material-symbols-outlined">
          music_note
        </span>
        <TitlePersonal>Música eletrônica</TitlePersonal>
				<Description>
        A música eletrônica me faz fugir da realidade, ela não serve só nos momentos de alegria, mas nos de tristeza também. Música eletrônica se vive.
				</Description>
			</CardPersonalTastes>
      <CardPersonalTastes>
        <span className="material-symbols-outlined">
          fitness_center
        </span>
        <TitlePersonal>Musculação</TitlePersonal>
				<Description>
          Fazer exercícios físicos não fortalece somente o corpo, mas também a mente e a alma. É um momento só seu de investimento exclusivo em você!
				</Description>
			</CardPersonalTastes>
      <CardPersonalTastes>
      <span className="material-symbols-outlined">
        local_cafe
      </span>
      <TitlePersonal>Café</TitlePersonal>
				<Description>
        Um café bem feito é uma obra de arte, assim como uma vida bem vivida. O café é a bebida que une as melhores amizades.
				</Description>
			</CardPersonalTastes>
      </Cards>
		</div>
	</ContainerInfor>
)

export default PersonalTastes
