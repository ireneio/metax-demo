import { styled, useTheme } from "@mui/material"
import { useRouter } from "next/router"
import { SyntheticEvent, useEffect } from "react"
import { useForm } from "react-hook-form"
import AppButton from "../modules/common/components/AppButton"
import AppDivider from "../modules/common/components/AppDivider"
import AppInput from "../modules/common/components/AppInput"
import AppTitle from "../modules/common/components/AppTitle"
import { RouteMap } from "../modules/common/types"
import Layout from "../modules/layout"
import useSWR from 'swr'
import { fetcher } from "../utils/swr"
import { useAppDispatch, useAppSelector } from "../store"
import useMediaQuery from '@mui/material/useMediaQuery'
import FollowerList from "../modules/follow/containers/FollowerList"
import AppSlider from "../modules/common/containers/AppSlider"

const Wrapper = styled('div')(({ theme }) => {
  return {
    position: 'relative',
    paddingLeft: '20px',
    paddingRight: '20px',
    height: 'calc(100vh - 87px)',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: '87px'
    },
    [theme.breakpoints.only('xl')]: {
      marginRight: (130 + 375) + 'px',
    }
  }
})

const CounterWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  color: '#ffffff'
})

const CounterDisplay = styled('div')({
  fontWeight: 'bold',
  fontSize: '48px'
})

const CounterUnit = styled('div')({
  fontWeight: 'normal',
  fontSize: '16px',
  marginLeft: '10px',
  marginTop: '15px'
})

const Toolbar = styled('div')(({ theme }) => {
  return {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 'auto',
    paddingBottom: '66px',
    paddingLeft: '20px',
    paddingRight: '20px',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 0,
      width: 'inherit'
    }
  }
})

const Home = () => {
  const pageSize = useAppSelector(state => state.user.pagination.pageSize)
  const dispatchStore = useAppDispatch()
  const router = useRouter()
  const theme = useTheme()
  const isClientAboveMobile = useMediaQuery(theme.breakpoints.up('sm'))

  const { getValues, setValue } = useForm({
    mode: 'onChange',
    defaultValues: {
      keyword: ''
    }
  })

  const { data } = useSWR('/users/all', fetcher.bind(null, {
    method: 'get',
    url: '/users/all',
    query: {
      page: 1,
      pageSize,
      keyword: ''
    }
  }))

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

  const handleSearch = async (e: SyntheticEvent<any, Event>) => {
    const _keyword = getValues('keyword')
    dispatchStore({ type: 'SET_KEYWORD', payload: _keyword })
    router.push(RouteMap.Result)
  }

  const handlePageSizeUpdate = (value: any) => {
    dispatchStore({ type: 'SET_PAGE_SIZE', payload: value })
  }

  const handleInputChange = (e: any) => {
    setValue('keyword', e.target.value, { shouldValidate: false })
  }

  return (
    <Layout>
      <div data-cid='Home'>
        <Wrapper>
          <AppTitle>search</AppTitle>
          {!isClientAboveMobile && <AppDivider top={16} />}
          {isClientAboveMobile && <AppDivider top={20} />}
          <AppInput placeholder='Keyword' onChange={handleInputChange} />
          {isClientAboveMobile && <AppDivider enableLine top={30} bottom={30} />}
          {!isClientAboveMobile && <AppDivider top={28} />}
          <AppTitle># of results per page</AppTitle>
          <AppDivider top={16} />
          <CounterWrapper>
            <CounterDisplay>{pageSize}</CounterDisplay>
            <CounterUnit>results</CounterUnit>
          </CounterWrapper>
          <AppSlider value={pageSize} onChange={handlePageSizeUpdate} />
          {!isClientAboveMobile &&
            <Toolbar>
              <AppDivider enableLine bottom={80} />
              <AppButton onClick={handleSearch}>search</AppButton>
            </Toolbar>}
          {isClientAboveMobile &&
            <Toolbar>
              <div className='w-[343px]'>
                <AppButton onClick={handleSearch}>search</AppButton>
              </div>
            </Toolbar>}
        </Wrapper>
        <FollowerList />
      </div>
    </Layout>
  )
}

export default Home
