import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => ({
  background: {
    backgroundColor: 'white'
  },
  wrapperFoxbithQuestionnaire: {
    padding: '24px',
    borderBottom: '1px solid #dddddd'
  },
  warapperButtonSaveAndCancel: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '12px 24px 12px 24px',
    borderBottom: '1px solid #dddddd',
    gap: '12px'
  },
  styleWrapperButtonCancel: {
    borderColor: '#FF5C00',
    padding: '13px 16px 13px 16px',
    color: '#FF5C00',
    '&:hover': {
      borderColor: '#FF5C00',
    },
  },
  styleWrapperButtonSave: {
    borderColor: '#FF5C00',
    backgroundColor: '#FF5C00',
    color: 'White',
    padding: '13px 72px 13px 72px',
    '&:hover': {
      backgroundColor: '#FF5C00',
    },
  },
  wrapperContent: {
    margin: '24px 24px 28px 24px',
    borderRadius: '10px',
    backgroundColor: 'white',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
  },
  wrapperQuestionnaireDetail: {
    padding: '24px',
    borderBottom: '1px solid #dddddd'
  },
  styleQuestionnaireDetail: {
    marginBottom: '24px'
  },
  styleWrapperBoxContent: {
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '48px'
  },
  wrapperBoxContent: {
    display: "flex",
    flexDirection: 'column',
    gap: '24px'
  },
  styleTextFieldQuestion: {
    width: '100%'
  },
  styleRadioGroup: {
    gap: '24px'
  },
  warapperBoxContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px'
  },
  styleButtonDelete: {
    color: 'black',
    padding: 'auto 0px',
  },
  wrapperAddChoice: {
    borderBottom: '1px solid #dddddd',
    paddingBottom: '24px',
  },
  styleButtonAddChoice: {
    borderColor: '#FF5C00',
    backgroundColor: 'transparent',
    color: 'White'
  },
  styleButtonAddChoiceText: {
    color: '#FF5C00'
  },
  warpperButtonDuplicateAndDelete: {
    display: 'flex',
  },
  styleButtondDuplicateAndDelete: {
    color: 'black'
  },
  warpperBoxDuplicateAndDelete: {
    display: 'flex',
    pr: '24px',
    gap: '8px'
  },
  styleButtonAddQuestion: {
    borderColor: '#FF5C00',
    backgroundColor: 'transparent',
    color: 'White', width: '100%',
    padding: '13px 0px',
    border: '1px solid #FF5C00'
  },
  styleTextAddQuestion: {
    color: '#FF5C00'
  },
  wrapperStyleButtonAddQuestion: {
    padding: '24px'
  },
  helperText: {
    marginLeft: '0px',
  },
}))

export default useStyles