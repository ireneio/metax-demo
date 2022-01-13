import { styled } from "@mui/system"
import AppChip from "../AppChip"

export interface Props {
  displayName: string
  username: string
  following: boolean
  avatarLink: string
  enableDivider?: boolean
}

type AppChipText = 'following' | 'follow'

const Wrapper = styled('div')({
  display: 'flex',
  alignItems: 'center'
})

const Avatar = styled('img')({
  borderRadius: '5px',
  border: '1px solid #F8F8F8',
  width: '38px',
  height: '38px'
})

const WrapperInfo = styled('div')({
  marginLeft: '15px'
})

const Name = styled('div')({
  color: '#ffffff',
  textTransform: 'capitalize',
  fontWeight: 400,
  fontSize: '16px'
})

const Username = styled('div')({
  color: '#ffffff',
  textTransform: 'lowercase',
  fontWeight: 400,
  fontSize: '14px',
  opacity: .5
})

const Toolbar = styled('div')({
  marginLeft: 'auto',
  textTransform: 'capitalize'
})

const Divider = styled('div')({
  marginTop: '20px'
})


const AvatarCard = ({ displayName, username, following, avatarLink, enableDivider = false }: Props) => {
  const appChipVariant = following ? 'primary' : 'outlined'
  const appChipText: AppChipText = following ? 'following' : 'follow'

  return (
    <div data-cid='AvatarCard'>
      <Wrapper>
        <div>
          <Avatar src={avatarLink} alt='avatar' />
        </div>
        <WrapperInfo>
          <Name>{displayName}</Name>
          <div>
            <Username>@{username}</Username>
          </div>
        </WrapperInfo>
        <Toolbar>
          <AppChip variant={appChipVariant}>{appChipText}</AppChip>
        </Toolbar>
      </Wrapper>
      {enableDivider && <Divider />}
    </div>
  )
}

export default AvatarCard
