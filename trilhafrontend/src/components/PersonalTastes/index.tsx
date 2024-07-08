import { Description, Photograph, ContainerInfor } from './styles'
import photoPerfil from '../../assets/images/foto.jpg'
import Title from '../Title'

const PersonalTastes = () => (
	<ContainerInfor>
		<div className="container">
			<Title>Gostos Pessoais</Title>
			<div>
				<Description>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic maxime accusamus accusantium nisi officiis
					reprehenderit unde nesciunt quam rem molestiae? Accusantium iste sunt nulla impedit ratione officiis accusamus
					vel omnis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae culpa, placeat blanditiis odit
					perspiciatis nostrum aliquam dolorum provident praesentium nihil sint, maiores eveniet. Ipsam animi labore
					quae officiis culpa nemo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus delectus in
					nesciunt consequuntur ea quo laboriosam impedit et quos, officiis nisi accusantium dolorum totam a eaque quae
					earum odit. Amet?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate numquam praesentium
					dolorem dolor omnis, fugiat minus hic! Error molestiae tempore ut cupiditate, aliquam, quidem, sit suscipit
					explicabo eius vero porro!
				</Description>
				<Photograph src={photoPerfil} />
			</div>
		</div>
	</ContainerInfor>
)

export default PersonalTastes
