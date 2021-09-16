import {
  CircularProgress,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  withStyles,
} from "@material-ui/core";
import { FC, useEffect, useState } from "react";
import { getCampaigns, deleteCampaign } from "../../api/api";
import CampaignRecord from "./CampaignRecord";

import "./styles.css";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#eb4d4b",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

interface CampaignProps {
  setEmailDetails: (subject: string, text: string) => void;
}

const Campaign: FC<CampaignProps> = ({ setEmailDetails }) => {
  const [allCampaigns, setAllCampaigns] = useState<any[]>([]);
  const [isDataSet, setIsDataSet] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = await getCampaigns();
      setAllCampaigns(data);
      setTimeout(() => setIsDataSet(true), 500);
    };
    getData();
  }, []);

  const handleDeleteCampaign = (id: string) => {
    console.log("delete from edit");
    deleteCampaign(id);
    const newAllCampaigns = allCampaigns.filter((e) => e.id !== id);
    setAllCampaigns(newAllCampaigns);
  };

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
                  style={{ textTransform: "uppercase", width: 250 }}
                  align="center"
                >
                  email
                </StyledTableCell>
                <StyledTableCell
                  style={{ textTransform: "uppercase", width: 80 }}
                  align="center"
                >
                  post
                </StyledTableCell>
                <StyledTableCell
                  style={{ textTransform: "uppercase" }}
                  align="center"
                >
                  status
                </StyledTableCell>
                <StyledTableCell
                  style={{ textTransform: "uppercase" }}
                  align="center"
                >
                  action
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allCampaigns.map((campaign) => (
                <CampaignRecord
                  setEmailDetails={setEmailDetails}
                  key={campaign.id}
                  campaign={campaign}
                  id={campaign.id}
                  handleDelete={handleDeleteCampaign}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default Campaign;
