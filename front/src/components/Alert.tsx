import { Snackbar } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../domain/entity/rootState'
import alertActions from '../store/alert/actions'
import MuiAlert from '@material-ui/lab/Alert'

const Alert = () => {
  const alert = useSelector((state: RootState) => state.alert)
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(alertActions.closeAlert({}))
  }

  return (
    <Snackbar open={alert.open} onClose={handleClose}>
      <MuiAlert elevation={6} variant="filled" severity={alert.severity}>
        {alert.message}
      </MuiAlert>
    </Snackbar>
  )
}

export default Alert
