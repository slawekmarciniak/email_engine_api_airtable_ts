import { FC } from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import { withStyles, TableRow, TableCell } from "@material-ui/core";
import { useHistory } from "react-router-dom";

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

interface CampaignRecordProps {
  campaign: {
    fields: {
      status: string;
      created: string;
      subject: string;
      email: string;
    };
  };
  handleDelete: (id: string) => void;
  id: string;
  setEmailDetails: (subject: string, text: string) => void;
}

const CampaignRecord: FC<CampaignRecordProps> = ({
  campaign,
  handleDelete,
  id,
  setEmailDetails,
}) => {
  const history = useHistory();
  const { subject, email, created, status } = campaign.fields;

  const handleEdit = () => {
    setEmailDetails(subject, email);
    history.push("/email");
  };

  return (
    <StyledTableRow>
      <StyledTableCell style={{ textTransform: "capitalize" }} component="td">
        {subject}
      </StyledTableCell>
      <StyledTableCell component="td">{email}</StyledTableCell>
      <StyledTableCell component="td">{created}</StyledTableCell>
      <StyledTableCell component="td">{status}</StyledTableCell>
      <StyledTableCell component="td">
        {status === "draft" ? (
          <div className="buttonContainer">
            <button onClick={handleEdit} className="deleteBtn">
              <EditIcon style={{ color: "#ff7979" }} />
            </button>
            <button onClick={() => handleDelete(id)} className="deleteBtn">
              <DeleteForeverIcon style={{ color: "#ff7979" }} />
            </button>
          </div>
        ) : (
          ""
        )}
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default CampaignRecord;
