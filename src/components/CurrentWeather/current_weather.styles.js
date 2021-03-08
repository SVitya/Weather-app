import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  general: {
    [theme.breakpoints.up('sm')]: {
      paddingRight: theme.spacing(5),
      marginBottom: theme.spacing(3),
    },
  },
  temp: {
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  },
  details: {
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      marginBottom: theme.spacing(1),
    },
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(5),
      paddingBottom: theme.spacing(2),
      marginTop: 'auto',
      marginBottom: theme.spacing(3),
    },
  },
}));