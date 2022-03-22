import { makeStyles } from "@material-ui/core";

export const getModalStyle = () => {
  const top = 50;
  const left = 50;

  return {
    height: "300px",
    left: `${left}%`,
    top: `${top}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
};

export const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    height: 200,
    padding: theme.spacing(2, 4, 3),
    position: "absolute",
    width: 400,
  },
}));
