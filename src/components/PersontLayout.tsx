import React from "react";
import PersonTable from "./PersonTable";
import usePerson from "./usePerson";
import { Button } from "@mui/material";
import CustomModal from "./CustomModal";
import PersonForm from "./PersonForm";
import PersonFormEdit from "./PersonFormEdit";

const PersonLayout = () => {
  const {
    personData,
    personDataId,
    openModal,
    setOpenModal,
    openModalEdit,
    setOpenModalEdit,
    createPersons,
    deletePersons,
    getPersonsId,
    updatePersons,
  } = usePerson();

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

      <PersonTable
        data={personData}
        deletePersons={deletePersons}
        getPersonsId={getPersonsId}
      />
      {/* CREATE */}
      <CustomModal
        open={openModal}
        setOpen={setOpenModal}
        title={"Creando Nueva Persona"}
      >
        <PersonForm setOpenModal={setOpenModal} createPersons={createPersons} />
      </CustomModal>
      {/* EDIT */}
      <CustomModal
        open={openModalEdit}
        setOpen={setOpenModalEdit}
        title={"Editando Nueva Persona"}
      >
        <PersonFormEdit
          data={personDataId}
          setOpenModal={setOpenModalEdit}
          openModal={openModalEdit}
          updatePersons={updatePersons}
        />
      </CustomModal>
    </>
  );
};

export default PersonLayout;
