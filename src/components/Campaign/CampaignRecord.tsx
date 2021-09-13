import {FC} from 'react' 
import { withStyles, TableRow, TableCell } from '@material-ui/core';


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
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

interface CampaignRecordProps {
    campaign: any
}
 
const CampaignRecord: FC<CampaignRecordProps> = ({campaign}) => {
    const {subject, content, created, status } = campaign.fields
    return ( 

<StyledTableRow>
    <StyledTableCell style={{textTransform: "capitalize"}} component="td">{subject}</StyledTableCell>
    <StyledTableCell component="td">{content}</StyledTableCell>
    <StyledTableCell component="td">{created}</StyledTableCell>
    <StyledTableCell component="td">{status}</StyledTableCell>
    </StyledTableRow>
     );
}
 
export default CampaignRecord;