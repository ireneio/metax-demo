import { styled } from "@mui/system"
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined'
import { useRouter } from "next/router"
import styles from './appNav.module.scss'
import cx from 'classnames'
import { RouteMap, ZIndexLevel } from "../../types"

const Wrapper = styled('div')({
  position: 'fixed',
  bottom: 0,
  left: 0,
  zIndex: ZIndexLevel.AppNav,
  width: '100%',
  height: '66px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: 'inset 0px 0.5px 0px rgba(0, 0, 0, 0.8)',
  background: 'rgba(24, 24, 24, 0.2)',
  backdropFilter: 'blur(54.3656px)',
  paddingTop: '24.5px',
  paddingBottom: '24.5px'
})

const Touchable = styled('div')({
  height: '100%',
  paddingLeft: '27.5px',
  paddingRight: '27.5px',
  cursor: 'pointer'
})

const AppNav = () => {
  const router = useRouter()
  const routeActive = router.pathname

  const handleGoHome = () => {
    router.push(RouteMap.Home)
  }

  const handleGoTag = () => {
    router.push(RouteMap.Tags)
  }

  return (
    <Wrapper data-cid='AppNav'>
      <Touchable
        onClick={handleGoHome}
        className={cx({
          [styles.inactive]: routeActive !== RouteMap.Home,
          [styles.active]: routeActive === RouteMap.Home
        })}
      >
        <FileCopyOutlinedIcon />
      </Touchable>
      <Touchable
        onClick={handleGoTag}
        className={cx({
          [styles.inactive]: routeActive !== RouteMap.Tags,
          [styles.active]: routeActive === RouteMap.Tags
        })}
      >
        <FileCopyOutlinedIcon />
      </Touchable>
    </Wrapper>
  )
}

export default AppNav
