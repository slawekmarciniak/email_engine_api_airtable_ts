import { Input, Paper, TextField } from "@material-ui/core";
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { addToAirtableDb, getAirtableData } from "../../api/apiAxios";
// import { emailMessage } from "../../mailgun/app";

interface EmailProps {
  subject: string;
  text: string;
  setEmailDetails: (subject: string, text: string) => void;
}

const CreateCampaigne: FC<EmailProps> = ({
  subject,
  text,
  setEmailDetails,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [allSubscribers, setAllSubscribers] = useState<any[]>([]);
  const [isSendInfo, setIsSendInfo] = useState(false);
  const [isSaveButton, setSaveButton] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setAllSubscribers([]);
    const getData = async () => {
      const data = await getAirtableData();
      interface elementValue {
        fields: {
          name: string;
          email: string;
        };
      }

      data.map((e: elementValue) => {
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

  const onSubmit = (data: object) => {
    // Mailgun server is temporary disabled

    // allSubscribers.forEach((subscriber) => {
    //   emailMessage(subscriber.name, subscriber.email, data.email);
    // });

    if (!errors.name && !errors.email) {
      const date = new Date().toISOString().slice(0, 10);
      const messageStatus = isSaveButton ? "draft" : "send";
      addToAirtableDb(
        { ...data, created: date, status: messageStatus },
        "campaign"
      );
      reset();
      setIsSendInfo(true);
      setEmailDetails("", "");
      setTimeout(() => {
        setIsSendInfo(false);
        history.push("/campaign");
      }, 1500);
    }
  };

  // setValue([{ subject: subject }, { email: text }]);

  return (
    <>
      {!isSendInfo && (
        <Paper className="formContainer">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              className="formInput"
              defaultValue={subject}
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
              defaultValue={text}
              id="standard-multiline-static"
              placeholder="email text"
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

export default CreateCampaigne;
