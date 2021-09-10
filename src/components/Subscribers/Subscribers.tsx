import {FC, useState, useEffect} from 'react';
import Person from './Person'
import {getSubscribers} from '../api/api'

interface SubscribersProps {
}

const Subscribers: FC<SubscribersProps> = () => {
    const [allSubscribers, setAllSubscribers] = useState([])


    useEffect(() => {
        const getData = async () => {
            const data = await getSubscribers()
            setAllSubscribers(data);
            console.log(data);
        }
        getData()
      }, []);

    return (
    <div key='kok' className="tableContainer">
        <table>
            <thead>
            <tr>
                <th>name</th>
                <th>email</th>
                <th>start subscription</th>
            </tr>
            </thead>
            <tbody>
            {allSubscribers && allSubscribers.map((subscriber) => (<Person subscriber={subscriber}/>))}
            </tbody>
        </table>

        </div>
);
    }

export default Subscribers;