import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  message: {
    padding: "10px",
    margin: "10px",
    width: "fit-content",
  },
  message__user: {
    marginLeft: "auto",
    color: "white",
    textAlign: "right",
  },
  message__userCard: {
    backgroundColor: "#0b81ff",
  },
  message__guestCard: {
    backgroundColor: "#e9e9eb",
  },
});




