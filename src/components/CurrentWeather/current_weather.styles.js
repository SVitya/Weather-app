import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  temp: {
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(8),
    },
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(3),
    },
  },
  details: {
    [theme.breakpoints.down('xs')]: {
        textAlign: 'center',
        marginBottom: theme.spacing(1),
    },
  },
}));