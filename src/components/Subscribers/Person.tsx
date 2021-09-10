import {FC} from 'react';

interface PersonProps {
    subscriber: any
}

const Person: FC<PersonProps> = ({subscriber}) => {
const {name, email, date} = subscriber.fields

    return (
    <tr>
    <td>{name}</td>
    <td>{email}</td>
    <td>{date}</td>
    </tr>
     );
}
 
export default Person;