import { Fragment, useState } from "react";

import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import classes from "./Success.module.css";
import Head from "next/head";

function NewMeetupPage() {
  const [showSuccess, setShowSuccess] = useState(false);
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();
    setShowSuccess(true);
    router.push("/");
    console.log(data);
  }
  return (
    <Fragment>
      <Head>
        <title>New meetup</title>
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
      {showSuccess && (
        <div className={classes.success}>
          <p>Meetup Inserted!</p>
        </div>
      )}
    </Fragment>
  );
}
export default NewMeetupPage;
