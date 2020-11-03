import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles(() => ({
  root: {
    padding: '10px 10px 15px 10px'
  },
  description: {
    marginTop: '20px',
    fontWeight: 500,
    '& .title': {
      paddingBottom: 6,
      fontWeight: 600
    }
  },
  title: {
    paddingBottom: 6,
    fontWeight: 600
  },
  tbody: {
    '& .table-row-name': {
      fontWeight: 500
    }
  }
}))

interface FeaturesProps {}

const Features: React.FC<FeaturesProps> = () => {
  const classes = useStyles()

  const [expanded, setExpanded] = useState<string | false>('panel1')

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean): void => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div className={classes.description}>
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography component="p" className={classes.title}>
            Features:
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <TableContainer>
            <Table>
              <TableBody className={classes.tbody}>
                <TableRow>
                  <TableCell className="table-row-name">Color:</TableCell>
                  <TableCell>yellow</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="table-row-name">Category:</TableCell>
                  <TableCell>suitcases</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="table-row-name">Gender:</TableCell>
                  <TableCell>unisex</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="table-row-name">Material:</TableCell>
                  <TableCell>nylon</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="table-row-name">Size:</TableCell>
                  <TableCell>33cm x 18cm x 48cm</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )
}

export default Features
