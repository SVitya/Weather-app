import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(4),
  },
  search: {
    margin: theme.spacing(5),
  },
  city: {
    margin: theme.spacing(3),
  },
  temp: {
    marginBottom: theme.spacing(3),
  }
}));