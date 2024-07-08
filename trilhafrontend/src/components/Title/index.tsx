import { TitleSection } from './styles'

type Props = {
	children: string
}

const Title = ({ children }: Props) => <TitleSection>{children}</TitleSection>

export default Title
