import React from 'react'
import { Link } from 'gatsby'

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography
} from '@material-ui/core'

import {
  makeStyles
} from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: 10
  }
}))

const Announcements = ({ announcements }) => {
  const classes = useStyles()
  return (
    <>
    {announcements.map(announcement => {
      return (
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h2">
            {announcement.node.title}
          </Typography>
          <Typography variant="body">
            {announcement.node.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to="/page-2">Learn more</Link>
        </CardActions>
      </Card>
      )
      
    })
    }
    </>
  )
}

export default Announcements