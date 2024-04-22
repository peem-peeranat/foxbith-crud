"use client"

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
import useStyle from './page.style'
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
    Save,
    resetCancle
  } = funcChoice();

  const { classes } = useStyle()
  return (
    <>
      <Box className={classes.background}>
        <Box className={classes.wrapperFoxbithQuestionnaire}>
          <Typography variant="h5">
            🦊 Foxbith Questionnaire
          </Typography>
        </Box>
        <Box className={classes.warapperButtonSaveAndCancel}>
          <Button variant="outlined" className={classes.styleWrapperButtonCancel} onClick={resetCancle}>
            <Typography >
              Cancel
            </Typography>
          </Button>
          <Button
            variant="contained"
            onClick={() => Save()}
            className={classes.styleWrapperButtonSave}>
            <Typography>
              Save
            </Typography>
          </Button>
        </Box>
      </Box>
      <Box className={classes.wrapperContent}>
        <Box>
          <Box className={classes.wrapperQuestionnaireDetail}>
            <Typography
              variant="h6"
              className={classes.styleQuestionnaireDetail}>
              Questionnaire Detail
            </Typography>
            <TextField
              error={name.error}
              helperText={name.error ? "Please fill in this option." : ""}
              required
              label="Name"
              variant="outlined"
              className={classes.styleTextFieldQuestion}
              value={name.value}
              onChange={(e) => handleNameChange(e.target.value)}
              FormHelperTextProps={{
                style: {
                  marginLeft: 0,
                },
              }}
            />

          </Box>
        </Box>
        <Box className={classes.styleWrapperBoxContent}>
          {questions.map(question => (
            <Box key={question.id} className={classes.wrapperBoxContent}>
              <Typography variant="h6">Question {question.id}</Typography>
              <TextField
                required
                error={question.error}
                helperText={question.error ? "Please fill in this option." : ""}
                variant="outlined"
                className={classes.styleTextFieldQuestion}
                value={question.description}
                onChange={(e) => handleQuestionChange(question.id, e.target.value)}
                FormHelperTextProps={{
                  style: {
                    marginLeft: 0,
                  },
                }}
              />
              <RadioGroup className={classes.styleRadioGroup}>
                {question.choices.map(choice => (
                  <Box key={question.id} className={classes.warapperBoxContent}>
                    <FormControlLabel
                      value={choice.id.toString()}
                      control={<Radio checked={choice.selected} onChange={(e) => handleChoiceChange(question.id, choice.id, choice.description, e.target.checked)} />}
                      label=""
                    />
                    <TextField
                      required
                      error={choice.error}
                      helperText={choice.selected ? "This answer is correct" : (choice.error ? "Please fill in this option." : "")}
                      label="Description"
                      variant="outlined"
                      value={choice.description}
                      onChange={(e) => handleChoiceChange(question.id, choice.id, e.target.value, choice.selected)}
                      className={classes.styleTextFieldQuestion}
                      FormHelperTextProps={{
                        style: {
                          marginLeft: 0,
                        },
                      }}
                    />
                    <Button className={classes.styleButtonDelete} onClick={() => removeChoice(question.id, choice.id)}>
                      <DeleteOutlineIcon />
                    </Button>
                  </Box>
                ))}

              </RadioGroup>
              <Box className={classes.wrapperAddChoice}>
                <Button className={classes.styleButtonAddChoice} onClick={() => addChoice(question.id)}>
                  <Typography className={classes.styleButtonAddChoiceText}>
                    + ADD CHOICE
                  </Typography>
                </Button>
              </Box>
              <Box className={classes.warpperButtonDuplicateAndDelete}>
                <Button className={classes.styleButtondDuplicateAndDelete} onClick={() => duplicateQuestion(question.id)}>
                  <Box className={classes.warpperBoxDuplicateAndDelete}>
                    <ContentCopyIcon />
                    <Typography >
                      Duplicate
                    </Typography>
                  </Box>
                </Button>
                <Button className={classes.styleButtondDuplicateAndDelete} onClick={() => removeQuestion(question.id)}>
                  <Box className={classes.warpperBoxDuplicateAndDelete}>
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
        <Box className={classes.wrapperStyleButtonAddQuestion}>
          <Button className={classes.styleButtonAddQuestion} onClick={addQuestion}>
            <Typography className={classes.styleTextAddQuestion}>
              + ADD QUESTION
            </Typography>
          </Button>
        </Box>
      </Box>
    </>
  )
}