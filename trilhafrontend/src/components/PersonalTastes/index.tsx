import { Description, ContainerInfor, CardPersonalTastes, Cards } from './styles'
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
				<Description>
        A música eletrônica me faz fugir da realidade, ela não serve só nos momentos de alegria, mas nos de tristeza também. Música eletrônica se vive.
				</Description>
			</CardPersonalTastes>
      <CardPersonalTastes>
        <span className="material-symbols-outlined">
          fitness_center
        </span>
				<Description>
          Fazer exercícios físicos não fortalece somente o corpo, mas também a mente e a alma. É um momento só seu de investimento exclusivo em você!
				</Description>
			</CardPersonalTastes>
      <CardPersonalTastes>
      <span className="material-symbols-outlined">
        podcasts
      </span>
				<Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, perferendis omnis dolore sunt nobis veritatis incidunt quaerat amet magni dicta ipsum id dolor adipisci esse accusamus distinctio ex, eligendi quidem?
				</Description>
			</CardPersonalTastes>
      </Cards>
		</div>
	</ContainerInfor>
)

export default PersonalTastes
