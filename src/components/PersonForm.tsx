import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { PersonRequest } from "../PersonModel";

interface PersonFormProp {
  setOpenModal: (value: boolean) => void;
  createPersons: (value: PersonRequest) => void;
}
const PersonForm = ({ setOpenModal, createPersons }: PersonFormProp) => {
  const [inputName, setInputName] = useState("");
  const [inputAddress, setInputAddress] = useState("");
  const [inputPhone, setInputPhone] = useState("");

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            onChange={(e) => {
              setInputName(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="standard-basic"
            label="Address"
            variant="standard"
            onChange={(e) => {
              setInputAddress(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="standard-basic"
            label="Phone"
            variant="standard"
            onChange={(e) => {
              setInputPhone(e.target.value);
            }}
          />
        </Grid>
      </Grid>
      <Button
        autoFocus
        onClick={() => {
          const request: PersonRequest = {
            name: inputName,
            address: inputAddress,
            phone: inputPhone,
          };
          createPersons(request);
          setOpenModal(false);
        }}
      >
        Save changes
      </Button>
      {/* <Button
        autoFocus
        onClick={() => {
          setOpenModal(false);
        }}
      >
        closed
      </Button> */}
    </>
  );
};

export default PersonForm;
