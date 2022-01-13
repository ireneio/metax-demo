import { styled } from "@mui/material"
import Image from "next/image"
import AppCardSubtitle from "../../../common/components/AppCardSubtitle"
import AppCardTitle from "../../../common/components/AppCardTitle"
import Loading from "./components/Loading"

interface Props {
  src: string
  alt: string
  title?: string
  subtitle?: string
  loading?: boolean
}

const Wrapper = styled('div')({
  width: '100%',
  marginBottom: '40px'
})

const WrapperImg = styled('div')({
  position: 'relative',
  minHeight: '222.67px'
})

const Img = styled(Image)({
  verticalAlign: 'middle',
  color: '#fff'
})

const handleImageError = (e: any) => {
  // e.preventDefault()
  // e.target.src = Alt
}

const SearchCard = ({ src, alt = '', title, subtitle, loading = false }: Props) => {
  if (loading) {
    return (
      <Wrapper data-cid='SearchCard'>
        <Loading />
      </Wrapper>
    )
  }

  return (
    <Wrapper data-cid='SearchCard'>
      <WrapperImg>
        <Img src={src} alt={alt} layout='fill' onError={handleImageError} />
      </WrapperImg>
      <AppCardTitle>{title}</AppCardTitle>
      <AppCardSubtitle>by{' '}{subtitle}</AppCardSubtitle>
    </Wrapper>
  )
}

export default SearchCard
