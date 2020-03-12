import { createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import { TableCell, TableRow } from '@material-ui/core';

export const json_url = "https://concertapi.herokuapp.com/concert_details";
//http://localhost:3001/concert_details

export const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

export const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

export const theme_ = createMuiTheme({
  palette: {
    primary: {
      main: '#20b2aa',
    },
    secondary: {
      main: '#40e0d0',
    },
  },
});
