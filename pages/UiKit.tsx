import { useState } from "react"
import { styled } from "@mui/system"

import AppButton from "../modules/common/components/AppButton"
import AppInput from "../modules/common/components/AppInput"
import AppNav from "../modules/common/containers/AppNav"
import AppSlider from "../modules/common/containers/AppSlider"
import AppTitle from "../modules/common/components/AppTitle"
import AppHeader from "../modules/common/containers/AppHeader"
import SearchCard from "../modules/search/components/SearchCard"
import SearchTag from "../modules/tags/components/Tag"
import AppSidebar from "../modules/common/containers/AppSidebar"
import AppChip from "../modules/common/components/AppChip"
import AvatarCard from "../modules/common/components/AvatarCard"
import AppTabGroup, { TabValue } from "../modules/common/containers/AppTabGroup"
import { Container } from "@mui/material"

const CustomUi = styled('ul')({
  listStyleType: 'number',
  listStylePosition: 'inside',
  padding: 0,
  paddingLeft: '4px',
  paddingRight: '4px'
})

const CustomLi = styled('li')({
  marginBottom: '15px'
})

const Title = styled('div')({
  marginBottom: '12px',
  paddingBottom: '6px',
  borderBottom: '1px solid #ffffff'
})

const UiKit = () => {
  const [tab, setTab] = useState<TabValue>(0)

  return (
    <Container disableGutters>
      <div
        data-cid='UiKit'
        style={{
          backgroundColor: '#181818',
          height: '100vh',
          paddingLeft: '20px',
          paddingRight: '20px',
          color: '#ffffff',
          overflowX: 'hidden',
        }}
      >
        <h1>Ui Kit</h1>
        <CustomUi>
          <CustomLi>
            <Title>AppButton</Title>
            <AppButton>AppButton</AppButton>
          </CustomLi>
          <CustomLi>
            <Title>AppInput</Title>
            <AppInput placeholder='placeholder' />
          </CustomLi>
          <CustomLi>
            <Title>AppTitle</Title>
            <AppTitle>AppTitle</AppTitle>
          </CustomLi>
          <CustomLi>
            <Title>AppHeader</Title>
            <div style={{ position: 'relative', width: '70vw' }}>
              <AppHeader />
            </div>
          </CustomLi>
          <CustomLi>
            <Title>AppSlider</Title>
            <AppSlider value={[100]} onChange={() => { }} />
          </CustomLi>
          <CustomLi>
            <Title>AppNav</Title>
            <AppNav />
          </CustomLi>
          <CustomLi>
            <Title>SearchCard</Title>
            <SearchCard src='https://via.placeholder.com/150' alt='alt' title='title' subtitle='subtitle' />
          </CustomLi>
          <CustomLi>
            <Title>SearchTag</Title>
            <SearchTag>SearchTag</SearchTag>
          </CustomLi>
          <CustomLi>
            <Title>AppChip</Title>
            <AppChip variant='outlined'>AppChip</AppChip>
            <span style={{ marginLeft: '4px' }}>
              <AppChip variant='primary'>AppChip</AppChip>
            </span>
          </CustomLi>
          <CustomLi>
            <Title>AvatarCard</Title>
            <AvatarCard
              displayName='displayName'
              username='username'
              avatarLink='https://via.placeholder.com/150'
              following={true}
              enableDivider
            />
            <AvatarCard
              displayName='displayName'
              username='username'
              avatarLink='https://via.placeholder.com/150'
              following={false}
              enableDivider
            />
          </CustomLi>
          <CustomLi>
            <Title>AppTabGroup</Title>
            <AppTabGroup
              onChange={(value: TabValue) => setTab(value)}
              value={tab}
              tabs={[
                { label: 'AppTabGroup_0', value: 0 },
                { label: 'AppTabGroup_1', value: 1 }
              ]}
              enableDivider
            >
              <div>AppTabGroup_0</div>
              <div>AppTabGroup_1</div>
            </AppTabGroup>
          </CustomLi>
        </CustomUi>
        <AppSidebar />
      </div>
    </Container>
  )
}

export default UiKit
