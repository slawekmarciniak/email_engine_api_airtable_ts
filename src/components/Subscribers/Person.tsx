import {FC} from 'react';

interface PersonProps {
    subscriber: any
}

const Person: FC<PersonProps> = ({subscriber}) => {
    return (
    <tr key={subscriber.id}>
    <td key={subscriber.id + "A"}>{subscriber.fields.name}</td>
    <td key={subscriber.id + "B"}>{subscriber.fields.email}</td>
    <td key={subscriber.id + "C"}>{subscriber.fields.date}</td>
  </tr>
     );
}
 
export default Person;