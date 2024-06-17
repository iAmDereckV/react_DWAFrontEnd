import { useEffect, useState } from "react";
import axios from "../axios";
import { Person, PersonRequest } from "../PersonModel";

const usePerson = () => {
  const [personData, setPersonData] = useState<Person[]>([]);
  const [personDataId, setPersonDataId] = useState<Person>();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);

  const getPersons = async () => {
    try {
      const response = await axios.get("v1/persons");
      setPersonData(response.data);
    } catch (error) {
      // Handle the error
      console.log(error.message);
    }
  };
  const getPersonsId = async (id: number) => {
    try {
      const response = await axios.get(`v1/persons/${id}`);
      setPersonDataId(response.data);
      setOpenModalEdit(true);
    } catch (error) {
      // Handle the error
      console.log(error.message);
    }
  };
  const createPersons = async (request: PersonRequest) => {
    try {
      const response = await axios.post("v1/persons", request);
      // getPersons();
    } catch (error) {
      // Handle the error
      console.log(error.message);
    }
  };
  const deletePersons = async (id: number) => {
    try {
      const response = await axios.delete(`v1/persons/${id}`);
      getPersons();
    } catch (error) {
      // Handle the error
      console.log(error.message);
    }
  };
  const updatePersons = async (request: PersonRequest, id: number) => {
    try {
      const response = await axios.put(`v1/persons/${id}`, request);
      getPersons();
    } catch (error) {
      // Handle the error
      console.log(error.message);
    }
  };

  useEffect(() => {
    !openModal && getPersons();
  }, [openModal]);
  return {
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
  };
};

export default usePerson;
