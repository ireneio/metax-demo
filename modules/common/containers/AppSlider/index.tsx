import { styled } from "@mui/system"
import SliderUnstyled from '@mui/base/SliderUnstyled';

const CustomSlider = styled(SliderUnstyled)(() => {
  return {
    width: 'auto',
    '& .MuiSlider-track': {
      display: 'block',
      position: 'absolute',
      height: '8px',
      borderRadius: '33px',
      background: 'linear-gradient(270deg, #FFD25F 0.13%, #FF5C01 100%)'
    },
    '& .MuiSlider-thumb': {
      position: 'absolute',
      height: '20px',
      width: '20px',
      marginTop: '-5px',
      marginLeft: '-5px',
      borderRadius: '50%',
      border: '6px solid #ffd05d',
      backgroundColor: '#1b1b1b',
      '&.Mui-active': {
        boxShadow: '0 0 0 0.25rem #ffffff'
      }
    },
    '& .MuiSlider-rail': {
      display: 'block',
      position: 'absolute',
      width: '100%',
      // width: 'auto',
      height: '8px',
      borderRadius: '33px',
      backgroundColor: '#ffffff',
      opacity: '0.3',
    },
    '& .MuiSlider-markLabel': {
      opacity: .5,
      color: '#ffffff'
    },
    '& .MuiSlider-markLabelActive': {
      opacity: 1
    }
  }
})

const marks = [
  {
    value: 3,
    label: '3',
  },
  {
    value: 6,
    label: '6',
  },
  {
    value: 9,
    label: '9',
  },
  {
    value: 12,
    label: '12',
  },
  {
    value: 15,
    label: '15',
  },
  {
    value: 50,
    label: '50',
  }
]

function calculateValue(value: number) {
  // return 2 ** value
  return value
}

// TODO types
const AppSlider = ({ value, onChange, step = 3 }: { value: any, onChange: any, step?: number }) => {
  return (
    <CustomSlider
      data-cid='AppSlider'
      value={value}
      onChange={onChange}
      // step={step}
      step={null}
      min={3}
      max={50}
      marks={marks}
      scale={calculateValue}
    />
  )
}

export default AppSlider
