import { Button, TextField } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../domain/entity/rootState'
import collegesActions from '../store/colleges/actions'
import { searchColleges } from '../store/colleges/effects'
import useStyles from './styles'

const College = () => {
  const dispatch = useDispatch() // 定義したdispatcherで変更に対して状態をdispatchする
  const colleges = useSelector((state: RootState) => state.colleges) // 必要な情報を参照する
  const classes = useStyles()

  const handleChange = (name: string) => {
    dispatch(collegesActions.setSearchWord(name))
  }

  const handleSearch = () => {
    dispatch(searchColleges(colleges.search))
  }

  return (
    <>
      <TextField
        className={classes.formField}
        fullWidth
        label="大学名を検索"
        value={colleges.search}
        onChange={(e) => handleChange(e.target.value)}
      />
      <Button
        fullWidth
        variant="outlined"
        color="primary"
        className={classes.button}
        onClick={handleSearch}
        disabled={!colleges.search}
      >
        検索
      </Button>
    </>
  )
}

export default College
