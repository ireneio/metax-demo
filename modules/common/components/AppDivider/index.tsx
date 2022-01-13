interface Props {
  top?: number | string,
  bottom?: number | string,
  enableLine?: boolean
}

const AppDivider = ({ top, bottom, enableLine = false }: Props) => {
  return (
    <div
      data-cid='AppDivider'
      style={{
        marginTop: top + 'px',
        marginBottom: bottom + 'px',
        width: '100%',
        height: enableLine ? '1px' : 0,
        backgroundColor: '#ffffff',
        opacity: .1
      }}>
    </div>
  )
}

export default AppDivider
