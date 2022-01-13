import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

const marks = {
  3: {
    style: { color: '#ffffff', opacity: .5, marginTop: '6px' },
    label: '3',
  },
  6: {
    style: { color: '#ffffff', opacity: .5, marginTop: '6px' },
    label: '6',
  },
  9: {
    style: { color: '#ffffff', opacity: .5, marginTop: '6px' },
    label: '9',
  },
  12: {
    style: { color: '#ffffff', opacity: .5, marginTop: '6px' },
    label: '12',
  },
  15: {
    style: { color: '#ffffff', opacity: .5, marginTop: '6px' },
    label: '15',
  },
  50: {
    style: { color: '#ffffff', opacity: .5, marginTop: '6px' },
    label: '50',
  }
}

// TODO logarithmic slider display
const AppSlider = ({ value, onChange, defaultValue }: { value: any, onChange: any, defaultValue?: any }) => {
  return (
    <Slider
      defaultValue={defaultValue === undefined ? value : defaultValue}
      onChange={onChange}
      value={value}
      // step={null}
      marks={marks}
      dotStyle={{ display: 'none' }}
      min={3}
      max={50}
      railStyle={{
        display: 'block',
        position: 'absolute',
        width: '100%',
        height: '8px',
        borderRadius: '33px',
        backgroundColor: '#ffffff',
        opacity: '0.3',
      }}
      trackStyle={{
        display: 'block',
        position: 'absolute',
        height: '8px',
        borderRadius: '33px',
        background: 'linear-gradient(270deg, #FFD25F 0.13%, #FF5C01 100%)'
      }}
      handleStyle={{
        position: 'absolute',
        height: '20px',
        width: '20px',
        marginTop: '-5px',
        marginLeft: '-5px',
        borderRadius: '50%',
        border: '6px solid #ffd05d',
        backgroundColor: '#1b1b1b',
      }}
    // handle={(props) => { }}
    />
  )
}

export default AppSlider
