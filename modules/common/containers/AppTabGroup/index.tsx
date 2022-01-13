import { styled, Tab, Tabs } from "@mui/material"
import { ChangeEventHandler, ReactNode, useMemo } from "react";

interface Props {
  onChange?: Function,
  value: TabValue,
  tabs: TabItem[],
  children: ReactNode | ReactNode[],
  enableDivider?: boolean
}

export type TabValue = string | number

interface TabItem {
  label: string
  value: TabValue
}

const CustomTabs = styled(Tabs)(() => {
  return {
    backgroundColor: '#181818',
    '& .MuiTabs-indicator': {
      backgroundColor: '#ffffff',
      height: '2px',
      // opacity: '1 !important'
    },
    '& .MuiTabs-flexContainer': {
      borderBottom: '2px solid #1f1f1f',
    }
  }
})

const CustomTab = styled(Tab)(({ theme }) => {
  return {
    color: '#929292',
    marginRight: theme.spacing(1),
    // borderBottom: '2px solid #1f1f1f',
    '&.Mui-selected': {
      color: '#ffffff',
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#ffffff',
    },
    '&:hover': {
      color: '#ffffff',
      opacity: 1,
    }
  }
})

const Divider = styled('div')({
  marginTop: '35px'
})

const AppTabGroup = ({ onChange, value, tabs, children, enableDivider = true }: Props) => {
  const tabPanelContent = useMemo(() => {
    const tab = tabs.findIndex((tab) => tab.value === value)

    return Array.isArray(children) ?
      children[tab] :
      children
  }, [children, tabs, value])

  const handleChange = (value: TabValue) => {
    onChange && onChange(value)
  }

  return (
    <div>
      <CustomTabs
        value={value}
        onChange={(value: TabValue, newValue: TabValue) => handleChange(newValue)}
      >
        {tabs.map((({ label, value }) => {
          return <CustomTab key={value} label={label} value={value} style={{ width: `${100 / tabs.length}%` }} />
        }))}
      </CustomTabs>
      {enableDivider && <Divider />}
      {tabPanelContent}
    </div>
  )
}
export default AppTabGroup
