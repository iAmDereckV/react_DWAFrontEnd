import React, { useState, useEffect } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { Person, PersonRequest } from "../PersonModel";
import { string } from "yup";

interface PersonFormProp {
  setOpenModal: (value: boolean) => void;
  updatePersons: (value: PersonRequest, id: number) => void;
  data: { id: number; name: string; address: string; phone: string };
  openModal: boolean;
}
const PersonForm = ({
  setOpenModal,
  updatePersons,
  data,
  openModal,
}: PersonFormProp) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  useEffect(() => {
    if (openModal) {
      setName(data.name);
      setAddress(data.address);
      setPhone(data.phone);
    }
  }, [openModal]);
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="standard-basic"
            label="Address"
            variant="standard"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="standard-basic"
            label="Phone"
            variant="standard"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </Grid>
      </Grid>
      <Button
        autoFocus
        onClick={() => {
          const request: PersonRequest = {
            name: name,
            address: address,
            phone: phone,
          };
          updatePersons(request, data.id);
          setOpenModal(false);
        }}
      >
        Update changes
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
