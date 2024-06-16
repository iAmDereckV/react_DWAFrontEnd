import React from "react";
import PersonTable from "./PersonTable";
import usePerson from "./usePerson";
import { Button } from "@mui/material";
import CustomModal from "./CustomModal";
import PersonForm from "./PersonForm";

const PersonLayout = () => {
  const { personData, openModal, setOpenModal, createPersons, deletePersons } =
    usePerson();

  return (
    <>
      <Button
        variant="contained"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Nueva Persona
      </Button>

      <PersonTable data={personData} deletePersons={deletePersons} />
      <CustomModal
        open={openModal}
        setOpen={setOpenModal}
        title={"Creando Nueva Persona"}
      >
        <PersonForm setOpenModal={setOpenModal} createPersons={createPersons} />
      </CustomModal>
    </>
  );
};

export default PersonLayout;
