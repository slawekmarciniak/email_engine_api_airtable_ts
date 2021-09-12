import {FC} from 'react' 

interface CampaignRecordProps {
    campaign: any
}
 
const CampaignRecord: FC<CampaignRecordProps> = ({campaign}) => {
    const {subject, content, created, status } = campaign.fields
    return ( 
        <tr>
        <td>{subject}</td>
        <td>{content}</td>
        <td>{created}</td>
        <td>{status}</td>
        </tr>
     );
}
 
export default CampaignRecord;