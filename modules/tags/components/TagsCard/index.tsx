import Loading from './components/Loading'
import AppCardSubtitle from "../../../common/components/AppCardSubtitle"
import AppCardTitle from "../../../common/components/AppCardTitle"
import SearchTag from "../Tag"
import { styled } from '@mui/system'

interface Props {
  tag: string
  title: string
  subtitle: string
  loading?: boolean
}

const Wrapper = styled('div')({
  position: 'relative',
  width: '150px'
})

const Accordion = styled('div')({
  backgroundColor: '#ffffff',
  opacity: .06,
  borderRadius: '10px',
  height: '150px',
  width: '150px'
})

const WrapperSearchTag = styled('div')({
  position: 'absolute',
  left: '14px',
  top: '95px',
  maxWidth: (150 - (14 * 2)) + 'px'
})

const Subtitle = styled('span')({
  textTransform: 'capitalize'
})

const TagsCard = ({ tag, title, subtitle, loading = false }: Props) => {

  if (loading) {
    return (
      <Wrapper data-cid='TagsCard'>
        <Loading />
      </Wrapper>
    )
  }

  return (
    <Wrapper data-cid='TagsCard'>
      <Accordion />
      <WrapperSearchTag>
        <SearchTag>{tag}</SearchTag>
      </WrapperSearchTag>
      <AppCardTitle>{title}</AppCardTitle>
      <AppCardSubtitle>
        {subtitle}{' '}
        <Subtitle>questions</Subtitle>
      </AppCardSubtitle>
    </Wrapper>
  )
}

export default TagsCard
