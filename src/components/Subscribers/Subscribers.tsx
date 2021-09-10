import {FC, useState, useEffect} from 'react';
import Person from './Person';
import {getSubscribers} from '../api/api';
import './style.css';


interface SubscribersProps {
}

const Subscribers: FC<SubscribersProps> = () => {
    const [allSubscribers, setAllSubscribers] = useState<any[]>([])


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
          {allSubscribers.map((subscriber) => ( <Person key={subscriber.id} subscriber={subscriber}/>))}
            </tbody>
        </table>
        <button>send mail to subscribers</button> 
        <button>add subscriber</button>
        </div>
);
    }

export default Subscribers;