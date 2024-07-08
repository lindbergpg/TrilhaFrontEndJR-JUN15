import { Description, Photograph, ContainerInfor } from './styles'
import photoPerfil from '../../assets/images/foto.jpg'

const Frame = () => (
	<ContainerInfor>
		<div>
			<Description>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic maxime accusamus accusantium nisi officiis
				reprehenderit unde nesciunt quam rem molestiae? Accusantium iste sunt nulla impedit ratione officiis accusamus
				vel omnis.
			</Description>
			<Description>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic maxime accusamus accusantium nisi officiis
				reprehenderit unde nesciunt quam rem molestiae? Accusantium iste sunt nulla impedit ratione officiis accusamus
				vel omnis.
			</Description>
			<Description>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic maxime accusamus accusantium nisi officiis
				reprehenderit unde nesciunt quam rem molestiae? Accusantium iste sunt nulla impedit ratione officiis accusamus
				vel omnis.
			</Description>
		</div>
		<Photograph src={photoPerfil} />
	</ContainerInfor>
)

export default Frame
