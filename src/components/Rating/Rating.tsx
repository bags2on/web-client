import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'

const Rating: React.FC = () => {
  const [value, setValue] = useState<number | null>(2)

  return (
    <div>
      Rating
      {/* <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Controlled</Typography>
        <RatingMUI
          name="simple-controlled"
          value={value}
          onChange={(_, newValue): void => {
            setValue(newValue)
          }}
        />
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Read only</Typography>
        <RatingMUI name="read-only" value={value} readOnly />
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Disabled</Typography>
        <RatingMUI name="disabled" value={value} disabled />
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Pristine</Typography>
        <RatingMUI name="pristine" value={null} />
      </Box> */}
    </div>
  )
}

export default Rating
