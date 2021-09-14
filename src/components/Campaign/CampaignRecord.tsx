import { FC } from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { withStyles, TableRow, TableCell } from "@material-ui/core";

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
  campaign: any;
  handleDelete: any;
  id: any;
}

const CampaignRecord: FC<CampaignRecordProps> = ({
  campaign,
  handleDelete,
  id,
}) => {
  const { subject, email, created, status } = campaign.fields;
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
          <button onClick={() => handleDelete(id)} className="deleteBtn">
            <DeleteForeverIcon style={{ color: "#ff7979" }} />
          </button>
        ) : (
          ""
        )}
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default CampaignRecord;
