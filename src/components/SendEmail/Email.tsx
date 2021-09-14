import { Input, Paper, TextField } from "@material-ui/core";
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { addCampaign, getSubscribers } from "../../api/api";
// import { emailMessage } from "../../mailgun/app";

interface EmailProps {}

const Email: FC<EmailProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [allSubscribers, setAllSubscribers] = useState<any[]>([]);
  const [isSendInfo, setIsSendInfo] = useState(false);
  const [isSaveButton, setSaveButton] = useState(false);

  useEffect(() => {
    setAllSubscribers([]);
    const getData = async () => {
      const data = await getSubscribers();
      data.map((e: any) => {
        return setAllSubscribers((prev) => [
          ...prev,
          { name: e.fields.name, email: e.fields.email },
        ]);
      });
    };
    getData();
  }, []);

  const onSave = () => {
    setSaveButton(true);
  };

  const onSubmit = (data: any) => {
    console.log("send");
    // allSubscribers.forEach((subscriber) => {
    //   emailMessage(subscriber.name, subscriber.email, data.email);
    // });

    if (!errors.name && !errors.email) {
      const date = new Date().toISOString().slice(0, 10);
      const choosenStatus = isSaveButton ? "draft" : "send";
      console.log("choosenStatus", choosenStatus);
      addCampaign({ ...data, created: date, status: choosenStatus });
      reset();
      setIsSendInfo(true);
      setTimeout(() => {
        setIsSendInfo(false);
      }, 1500);
    }
  };

  return (
    <>
      {!isSendInfo && (
        <Paper className="formContainer">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              className="formInput"
              type="text"
              placeholder="subject"
              inputProps={{ "aria-label": "description" }}
              {...register("subject", {
                required: "subject is required",
                minLength: { value: 2, message: "field is to short" },
              })}
            />
            {errors.subject && (
              <span className="errorMessage">{errors.subject.message}</span>
            )}
            <TextField
              className="formInput"
              id="standard-multiline-static"
              label="email text"
              multiline
              rows={10}
              {...register("email", {
                required: "email is required",
                minLength: { value: 2, message: "field is to short" },
              })}
            />

            {errors.email && (
              <span className="errorMessage">{errors.email.message}</span>
            )}

            <input className="formInput button" type="submit" value="send" />
            <button className="formInput button" onClick={onSave}>
              save
            </button>
          </form>
        </Paper>
      )}
      {isSendInfo && <p className="confirmation">email is send</p>}
    </>
  );
};

export default Email;
