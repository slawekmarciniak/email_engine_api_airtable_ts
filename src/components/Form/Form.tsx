import { FC, useState } from "react";
import { useForm } from 'react-hook-form';
import { addSubscribers } from '../../api/api';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import './styles.css'


interface FormProps {
    
}
 
const Form: FC<FormProps> = () => {
const { register, handleSubmit, formState: { errors }, reset } = useForm();
const [isSendInfo, setIsSendInfo] = useState(false);

  const onSubmit = (data: object) => {
    if (!errors.name && !errors.email) {
      addSubscribers({...data, date: '2021-09-11',
    })
    reset()
    setIsSendInfo(true)
    setTimeout(() => {
      setIsSendInfo(false)
    }, 1500)

  }
    }
    return (
<>
    {!isSendInfo && <Paper className="formContainer">
    <form  onSubmit={handleSubmit(onSubmit)}>
    <Input className="formInput" type="text" placeholder="name" inputProps={{ 'aria-label': 'description' }}
     {...register("name", {
      required: "name is required", 
      minLength: {value: 2, message: "field is to short"}
      })} />
     {errors.name && <span className="errorMessage">{errors.name.message}</span> }
    <Input className="formInput" type="text" placeholder="email" inputProps={{ 'aria-label': 'description' }} {...register("email", {
      required: "email is required", 
      minLength: {value: 2, message: "field is to short"}})} />
      {errors.email && <span className="errorMessage">{errors.email.message}</span> }
    <input className="formInput button" type="submit" value="send" />
  </form>
  </Paper>}
  {isSendInfo && <p className="confirmation">user is added</p>}
</>
);
}
 
export default Form;