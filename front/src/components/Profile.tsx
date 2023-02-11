import { Container, Typography } from '@material-ui/core'
import React from 'react'
import Address from './Address'
import Basic from './Basic'
import Career from './Career'
import useStyles from './styles'

const Profile = () => {
  const classes = useStyles()
  return (
    <Container maxWidth="sm">
      <Typography
        variant="h4"
        component="h2"
        className={classes.title}
        color="primary"
      >
        基本情報
      </Typography>
      <Basic />
      <Typography
        variant="h4"
        component="h2"
        className={classes.title}
        color="primary"
      >
        住所
      </Typography>
      <Address />
      <Typography
        variant="h4"
        component="h2"
        className={classes.title}
        color="primary"
      >
        職歴
      </Typography>
      <Career />
    </Container>
  )
}

export default Profile
