import { Paper, Input, TextField } from '@material-ui/core';
import {FC, useState} from 'react'
import { useForm } from 'react-hook-form';
import {addCampaign} from '../../api/api'

interface EmailProps {
    
}
 
const Email: FC<EmailProps> = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isSendInfo, setIsSendInfo] = useState(false);
    
      const onSubmit = (data: object) => {
        if (!errors.name && !errors.email) {
          addCampaign({...data, date: '2021-09-11', status: 'send',
        })
        reset()
        setIsSendInfo(true)
        setTimeout(() => {
          setIsSendInfo(false)
        }, 1500)
    
      }
      console.log('text area', data);
        }



    return ( 
       
<Paper className="formContainer">
    <form  onSubmit={handleSubmit(onSubmit)}>
    <Input className="formInput" type="text" placeholder="subject" inputProps={{ 'aria-label': 'description' }}
     {...register("subject", {
      required: "name is required", 
      minLength: {value: 2, message: "field is to short"}
      })} />
     {errors.name && <span className="errorMessage">{errors.name.message}</span> }
     <TextField
        className="formInput"
          id="standard-multiline-static"
          label="email text"
          multiline
          rows={10}
          {...register("email", {
            required: "email is required", 
            minLength: {value: 2, message: "field is to short"}})} />

      {errors.email && <span className="errorMessage">{errors.email.message}</span> }

    <input className="formInput button" type="submit" value="send" />
  </form>
  </Paper>

    )
}
 
export default Email;