import { styled, useMediaQuery, useTheme } from "@mui/material"
import AppDivider from "../modules/common/components/AppDivider"
import AppTitle from "../modules/common/components/AppTitle"
import SearchCard from "../modules/search/components/SearchCard"
import Layout from "../modules/layout"
import { useInView } from 'react-intersection-observer'
import { useEffect } from "react"
import useSWR from "swr"
import { fetcher } from "../utils/swr"
import { useAppDispatch, useAppSelector } from "../store"
import FollowerList from "../modules/follow/containers/FollowerList"
import theme from "../modules/common/styles/theme"
import BackButton from "../modules/common/containers/AppHeader/components/BackButton"
import { useRouter } from "next/router"
import { RouteMap } from "../modules/common/types"

const Wrapper = styled('div')({
  marginRight: 0,
  paddingLeft: '25px',
  paddingRight: '25px',
  [theme.breakpoints.up('sm')]: {
    paddingLeft: 0,
    paddingRight: 0
  },
  [theme.breakpoints.only('xl')]: {
    marginRight: (130 + 375) + 'px',
  }
})

const WrapperCardList = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, 219px)',
  justifyContent: 'space-between'
})

const WrapperCard = styled('div')({
  marginTop: '14px'
})

const Result = () => {
  const { page, pageSize } = useAppSelector(state => state.user.pagination)
  const userData = useAppSelector(state => state.user.data)
  const { keyword } = useAppSelector(state => state.user.params)
  const dispatchStore = useAppDispatch()
  const theme = useTheme()
  const isClientAboveMobile = useMediaQuery(theme.breakpoints.up('sm'))

  const router = useRouter()
  const { ref: lastAnchor, inView } = useInView()

  const { data, error, isValidating } = useSWR('/users/all', fetcher.bind(null, {
    method: 'get',
    url: '/users/all',
    query: {
      page: 1,
      pageSize,
      keyword
    }
  }))

  useEffect(() => {
    if (inView) {
      dispatchStore({
        type: 'SET_PAGINATION',
        payload: {
          page: page + 1,
          pageSize: pageSize + 10
        }
      })
    }
  }, [inView])

  useEffect(() => {
    if (data) {
      const { page, pageSize, total, totalPages, data: userData } = data
      dispatchStore({
        type: 'SET_DATA',
        payload: {
          data: [...userData],
          pagination: {
            page,
            pageSize,
            total,
            totalPages
          }
        }
      })
    }
  }, [data, dispatchStore])

  const handleOnBackButtonClick = () => {
    router.push(RouteMap.Home)
  }

  return (
    <Layout data-cid='Result' showNav={false}>
      <Wrapper>
        <AppTitle>
          {isClientAboveMobile &&
            <div className="absolute left-[-50px]">
              <BackButton onClick={handleOnBackButtonClick} />
            </div>}
          <div>results</div>
        </AppTitle>
        <AppDivider top={24} />
        <WrapperCardList>
          {userData.map(({ avater: avatar, id, name, username }, index) => {
            return (
              <WrapperCard key={`${id}_${index}`}>
                <SearchCard
                  src={avatar}
                  alt={`${name}'s Avatar`}
                  title={name}
                  subtitle={username}
                  loading={isValidating}
                />
              </WrapperCard>
            )
          })}
        </WrapperCardList>
        <div ref={lastAnchor}></div>
      </Wrapper>
      <FollowerList />
    </Layout>
  )
}

export default Result
