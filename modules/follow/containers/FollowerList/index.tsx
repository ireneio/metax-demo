import { styled } from "@mui/system"
import { useMemo, useState } from "react"
// import useSWR from "swr"
import { useAppSelector } from "../../../../store"
import { User } from "../../../../store/reducers/user"
import AvatarCard from "../../../common/components/AvatarCard"
import AppTabGroup from "../../../common/containers/AppTabGroup"

enum Tabs {
  Followers = 'followers',
  Following = 'following'
}

const TABS = [
  { label: Tabs.Followers, value: Tabs.Followers },
  { label: Tabs.Following, value: Tabs.Following }
]

const Wrapper = styled('div')(({ theme }) => {
  return {
    display: 'none',
    paddingLeft: '16px',
    paddingRight: '16px',
    [theme.breakpoints.only('xl')]: {
      display: 'block',
      position: 'fixed',
      top: 0,
      right: 0,
      // minHeight: '100vh',
      width: '375px',
    }
  }
})

const FollowerList = () => {
  const [tab, setTab] = useState<Tabs>(Tabs.Followers)
  const data = useAppSelector(state => state.user.data)

  const dataDisplay = useMemo(() => {
    let _data: User[] = [...data]
    switch (tab) {
      case Tabs.Followers:
        break
      case Tabs.Following:
        _data = _data.filter(({ isFollowing }) => !!isFollowing)
        break
      default:
        break
    }

    return _data.map(({ id, isFollowing, name, avater: avatar, username }, index) => {
      return {
        key: `${id}_${index}`,
        displayName: name,
        username: username,
        following: isFollowing,
        avatarLink: avatar,
      }
    })
  }, [data, tab])

  return (
    <Wrapper data-cid='FollowerList'>
      <AppTabGroup
        onChange={(value: Tabs) => setTab(value)}
        value={tab}
        tabs={TABS}
        enableDivider
      >
        {Array.from({ length: 2 }).map((item, index) => {
          return (
            <div
              data-cid={`FollowerList_AppTabGroup_${index}`}
              className='overflow-auto'
              key={index}
            >
              {dataDisplay.map(({ key, displayName, username, following, avatarLink }) => {
                return (
                  <AvatarCard
                    key={key}
                    displayName={displayName}
                    username={username}
                    following={following}
                    avatarLink={avatarLink}
                    enableDivider
                  />
                )
              })}
            </div>
          )
        })}
      </AppTabGroup>
    </Wrapper>
  )
}

export default FollowerList
