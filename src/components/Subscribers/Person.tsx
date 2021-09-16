import { withStyles, TableRow, TableCell } from "@material-ui/core";
import { FC } from "react";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
interface PersonProps {
  subscriber: {
    fields: {
      name: string;
      email: string;
      date: string;
    };
  };
}

const Person: FC<PersonProps> = ({ subscriber }) => {
  const { name, email, date } = subscriber.fields;

  return (
    <StyledTableRow>
      <StyledTableCell style={{ textTransform: "capitalize" }} component="td">
        {name}
      </StyledTableCell>
      <StyledTableCell component="td">{email}</StyledTableCell>
      <StyledTableCell component="td">{date}</StyledTableCell>
    </StyledTableRow>
  );
};

export default Person;
