import { FC } from "react";
import { useForm } from 'react-hook-form';
import { addSubscribers } from '../../api/api';


interface FormProps {
    
}
 
const Form: FC<FormProps> = () => {
const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: object) => {
    addSubscribers({...data, date: '2021-09-11',
    })
    console.log('data from form', data)}


    // console.log(errors);
    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="name" {...register("name", {required: true, min: 2})} />
        <input type="email" placeholder="email" {...register("email", {min: 3})} />
        <input type="submit" />
      </form>
     );
}
 
export default Form;