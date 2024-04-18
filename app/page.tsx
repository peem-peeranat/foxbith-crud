"use client"

import React from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { funcChoice } from "./funcChoice";

export default function Home() {
  const {
    questions,
    name,

    handleChoiceChange,
    handleQuestionChange,
    handleNameChange,
    addChoice,
    removeChoice,
    addQuestion,
    removeQuestion,
    duplicateQuestion,
    validate,
  } = funcChoice();

  return (
    <>
      <Box sx={{ backgroundColor: 'white' }}>
        <Box sx={{ py: 3, px: 3, borderBottom: '1px solid #dddddd' }}>
          <Typography variant="h5">
            🦊 Foxbith Questionnaire
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', py: '12px', px: 3, gap: '12px', borderBottom: '1px solid #dddddd' }}>
          <Button variant="outlined" sx={{ borderColor: '#FF5C00', py: '13px', px: 2 }}>
            <Typography sx={{ color: '#FF5C00' }}>
              Cancel
            </Typography>
          </Button>
          <Button
            variant="contained"
            onClick={() => validate()}
            sx={{ borderColor: '#FF5C00', backgroundColor: '#FF5C00', color: 'White', py: '13px', px: 9 }}>
            <Typography>
              Save
            </Typography>
          </Button>
        </Box>
      </Box>
      <Box sx={{ m: 3, borderRadius: '10px', backgroundColor: 'white', boxShadow: '50px' }}>
        <Box>
          <Box sx={{ py: 3, px: 3, borderBottom: '1px solid #dddddd' }}>
            <Typography variant="h6" sx={{ mb: 3 }}>Questionnaire Detail</Typography>
            <TextField
              error={name.error}
              required
              id="outlined-basic"
              label="Name"
              variant="outlined"
              sx={{ width: '100%' }}
              value={name.value}
              onChange={(e) => handleNameChange(e.target.value)} />

          </Box>
        </Box>
        <Box sx={{ px: 3, py: 3 }}>
          {questions.map(question => (
            <Box key={question.id} sx={{ display: "flex", flexDirection: 'column', gap: 3 }}>
              <Typography variant="h6">Question {question.id}</Typography>
              <TextField
                required
                error={question.error}
                id="outlined-basic"
                label="Question"
                variant="outlined"
                sx={{ width: '100%' }}
                value={question.description}
                onChange={(e) => handleQuestionChange(question.id, e.target.value)}
              />
              <RadioGroup name={`use-radio-group-${question.id}`} sx={{ gap: 3 }}>
                {question.choices.map(choice => (
                  <Box key={choice.id} sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>

                    <FormControlLabel
                      value={choice.id.toString()}
                      control={<Radio />}
                      label=""
                    />

                    <TextField
                      required
                      error={choice.error}
                      id={`outlined-basic-${question.id}-${choice.id}`}
                      label="Description"
                      variant="outlined"
                      value={choice.description}
                      onChange={(e) => handleChoiceChange(question.id, choice.id, e.target.value)}
                      sx={{ width: '100%' }} />
                    <Button sx={{ color: 'black', px: 0 }} onClick={() => removeChoice(question.id, choice.id)}>
                      <DeleteOutlineIcon />
                    </Button>
                  </Box>
                ))}
              </RadioGroup>
              <Box sx={{ borderBottom: '1px solid #dddddd', pb: 3 }}>
                <Button sx={{ borderColor: '#FF5C00', backgroundColor: 'transparent', color: 'White' }} onClick={() => addChoice(question.id)}>
                  <Typography sx={{ color: '#FF5C00' }}>
                    + ADD CHOICE
                  </Typography>
                </Button>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Button sx={{ color: 'black' }} onClick={() => duplicateQuestion(question.id)}>
                  <Box sx={{ display: 'flex', pr: 3, gap: 1 }}>
                    <ContentCopyIcon />
                    <Typography >
                      Duplicate
                    </Typography>
                  </Box>
                </Button>
                <Button sx={{ color: 'black' }} onClick={() => removeQuestion(question.id)}>
                  <Box sx={{ display: 'flex', pr: 3, gap: 1 }}>
                    <DeleteOutlineIcon />
                    <Typography >
                      Delete
                    </Typography>
                  </Box>
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
        <Button sx={{ borderColor: '#FF5C00', backgroundColor: 'transparent', color: 'White', width: '100%', py: '13px', border: '1px solid #FF5C00' }} onClick={addQuestion}>
          <Typography sx={{ color: '#FF5C00' }}>
            + ADD QUESTION
          </Typography>
        </Button>
      </Box>
    </>
  )
}