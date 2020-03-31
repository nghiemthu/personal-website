import React from "react";
import styles from "./Contact.module.scss";
import Input from "components/Input/Input";
import SelectInput from "components/SelectInput/SelectInput";
import TextArea from "components/TextArea/TextArea";

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <h4>Contact me</h4>

      <form action="">
        <Input
          id="fname"
          label="First Name"
          type="text"
          name="firstname"
          placeholder="Your name.."
          maxlength="25"
          required
        />

        <Input
          label="Last Name"
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
          maxlength="25"
          required
        />

        <SelectInput
          id="gender"
          name="gender"
          label="Gender"
          required
          options={[
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
            { value: "others", label: "Others" }
          ]}
        />

        <Input
          label="Email"
          type="email"
          id="emailAdrress"
          name="emailAdrress"
          placeholder="Your email.."
          maxlength="50"
          required
        />

        <Input
          label="Website address"
          type="url"
          id="website"
          name="website"
          placeholder="Your website address.."
          maxlength="50"
          required
        />

        <TextArea
          label="Comment"
          id="comment"
          name="comment"
          maxlength="255"
          required
          placeholder="Write something.."
        />

        {/* <button type="button">Reset</button> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
