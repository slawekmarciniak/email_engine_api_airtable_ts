import { CircularProgress } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { FC, useEffect, useState } from "react";
// import { getSubscribers } from "../../api/api";
import { getAirtableData } from "../../api/apiAxios";
import Person from "./Person";
import "./style.css";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#eb4d4b",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

interface SubscribersProps {}

const Subscribers: FC<SubscribersProps> = () => {
  const [allSubscribers, setAllSubscribers] = useState<any[]>([]);
  const [isDataSet, setIsDataSet] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      const data = await getAirtableData();
      setAllSubscribers(data);
      console.log(data);
      setTimeout(() => setIsDataSet(true), 500);
    };
    getData();
  }, []);

  return (
    <>
      {!isDataSet && (
        <CircularProgress style={{ marginTop: 50, color: "#eb4d4b" }} />
      )}
      {isDataSet && (
        <TableContainer
          style={{ width: "80%", margin: "50px auto 0 auto" }}
          component={Paper}
        >
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell
                  style={{ textTransform: "uppercase" }}
                  align="center"
                >
                  name
                </StyledTableCell>
                <StyledTableCell
                  style={{ textTransform: "uppercase" }}
                  align="center"
                >
                  email
                </StyledTableCell>
                <StyledTableCell
                  style={{ textTransform: "uppercase" }}
                  align="center"
                >
                  date
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allSubscribers.map((subscriber) => (
                <Person key={subscriber.id} subscriber={subscriber} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default Subscribers;
