// import styles from "./page.module.css";
import {
  Box,
  Typography,
  Button,
  TextField,
  Container,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel
} from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function Home() {
  return (
    <>
      {/* --------------------------------headder-------------------------------------- */}
      <Box sx={{ backgroundColor: 'white' }}>
        <Box sx={{ py: 3, px: 3, borderBottom: '1px solid #dddddd' }}>
          <Typography variant="h5">
            🦊 Foxbith Questionnaire
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', py: '12px', px: 3, gap: '12px', borderBottom: '1px solid #dddddd' }}>
          <Button variant="outlined" sx={{ borderColor: '#FF5C00', py: '13px', px: 2 }}>
            <Typography sx={{ color: '#FF5C00' }}>
              Cancle
            </Typography>
          </Button>
          <Button variant="contained" sx={{ borderColor: '#FF5C00', backgroundColor: '#FF5C00', Color: 'White', py: '13px', px: 9 }}>
            <Typography>
              Save
            </Typography>
          </Button>
        </Box>
      </Box>
      {/* --------------------------------headder-------------------------------------- */}

      <Box sx={{ m: 3, borderRadius: '10px', backgroundColor: 'white', boxShadow: '50px' }}>
        <Box>
          <Box sx={{ py: 3, px: 3, borderBottom: '1px solid #dddddd' }}>
            <Typography variant="h6" sx={{ mb: 3 }}>Questionnaire Detail</Typography>
            <TextField id="outlined-basic" label="Name" variant="outlined" sx={{ width: '100%' }} />
          </Box>
        </Box>

        {/* --------------------------------Questionnaire-------------------------------------- */}
        <Box sx={{ px: 3, py: 3 }}>
          <Box sx={{ display: "flex", flexDirection: 'column', gap: 3 }}>
            <Typography variant="h6">Question 1</Typography>
            <TextField id="outlined-basic" label="Question" variant="outlined" sx={{ width: '100%' }} />

            <RadioGroup name="use-radio-group" sx={{ gap: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <FormControlLabel value="female" control={<Radio />} label="" />
                <TextField id="outlined-basic" label="Description *" variant="outlined" sx={{ width: '100%' }} />
                <Button sx={{ color: 'black', px: 0 }}>
                  <DeleteOutlineIcon />
                </Button>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <FormControlLabel value="male" control={<Radio />} label="" />
                <TextField id="outlined-basic" label="Description *" variant="outlined" sx={{ width: '100%' }} />
                <Button sx={{ color: 'black', px: 0 }}>
                  <DeleteOutlineIcon />
                </Button>
              </Box>
            </RadioGroup>

            <Box sx={{
              borderBottom: '1px solid #dddddd',
              pb: 3
            }}>
              <Button sx={{ borderColor: '#FF5C00', backgroundColor: 'tranparent', Color: 'White' }}>
                <Typography sx={{ color: '#FF5C00' }}>
                  + ADD CHOICE
                </Typography>
              </Button>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Button sx={{ color: 'black' }}>
                <Box sx={{ display: 'flex', pr: 3, gap: 1 }}>
                  <ContentCopyIcon />
                  <Typography >
                    Duplicate
                  </Typography>
                </Box>
              </Button>
              <Button sx={{ color: 'black' }}>
                <Box sx={{ display: 'flex', pr: 3, gap: 1 }}>
                  <DeleteOutlineIcon />
                  <Typography >
                    Delete
                  </Typography>
                </Box>
              </Button>
            </Box>
          </Box >
        </Box>
        {/* --------------------------------Questionnaire-------------------------------------- */}
        <Button sx={{ borderColor: '#FF5C00', backgroundColor: 'tranparent', Color: 'White', width: '100%', py: '13px', border: '1px solid #FF5C00' }}>
          <Typography sx={{ color: '#FF5C00' }}>
            + ADD QUESTION
          </Typography>
        </Button>
      </Box>
    </>
  )
}
