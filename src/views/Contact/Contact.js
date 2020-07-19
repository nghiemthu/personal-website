import React from "react";
import styles from "./Contact.module.scss";
import Input from "components/Input/Input";
import SelectInput from "components/SelectInput/SelectInput";
import TextArea from "components/TextArea/TextArea";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";

const Contact = () => {
  const validationSchema = yup.object({
    firstname: yup.string().min(1).max(25).required(),
    lastname: yup.string().min(1).max(25).required(),
    emailAdrress: yup.string().email().max(50).required(),
    website: yup.string().url().max(50).required(),
    comment: yup.string().max(255).required(),
    age: yup.number().min(18).max(100).required(),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    alert("successfully");
  };

  return (
    <div className={styles.Contact}>
      <h4>Contact me</h4>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          inputRef={register}
          id="fname"
          label="First Name"
          type="text"
          name="firstname"
          placeholder="Your name.."
          error={
            errors.firstname &&
            errors.firstname.message &&
            errors.firstname.message
          }
        />

        <Input
          inputRef={register}
          label="Last Name"
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
          error={
            errors.lastname &&
            errors.lastname.message &&
            errors.lastname.message
          }
        />

        <Input
          inputRef={register}
          label="Age"
          id="age"
          name="age"
          placeholder="Your age.."
          type="number"
          error={errors.age && errors.age.message && errors.age.message}
        />

        <SelectInput
          id="gender"
          name="gender"
          label="Gender"
          required
          options={[
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
            { value: "others", label: "Others" },
          ]}
        />

        <Input
          inputRef={register}
          label="Email"
          type="email"
          id="emailAdrress"
          name="emailAdrress"
          placeholder="Your email.."
          error={
            errors.emailAdrress &&
            errors.emailAdrress.message &&
            errors.emailAdrress.message
          }
        />

        <Input
          inputRef={register}
          label="Website address"
          type="url"
          id="website"
          name="website"
          placeholder="Your website address.."
          error={
            errors.website && errors.website.message && errors.website.message
          }
        />

        <TextArea
          inputRef={register}
          label="Comment"
          id="comment"
          name="comment"
          placeholder="Write something.."
          error={
            errors.comment && errors.comment.message && errors.comment.message
          }
        />

        {/* <button type="button">Reset</button> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
