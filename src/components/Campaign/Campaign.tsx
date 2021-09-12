
import { FC, useEffect, useState } from 'react';
import { getCampaigns } from '../../api/api';
import CampaignRecord from './CampaignRecord'



interface CampaignProps {

}
 
const Campaign: FC<CampaignProps> = () => {
    const [allCampaigns, setAllCampaigns] = useState<any[]>([])


    useEffect(() => {
        const getData = async () => {
            const data = await getCampaigns()
           setAllCampaigns(data);
            console.log(data);
        }
        getData()
      }, []);

    return (
    <div className="tableContainer">
        <table>
            <thead>
            <tr>
                <th>name</th>
                <th>email</th>
                <th>start subscription</th>
                <th>status</th>

            </tr>
            </thead>
            <tbody>
          {allCampaigns.map((campaign) => ( <CampaignRecord key={campaign.id} campaign={campaign}/>))}
            </tbody>
        </table>
        </div>
);



    }
 
export default Campaign;