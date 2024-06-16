import { useEffect, useState } from "react";
import axios from "../axios";
import { Person, PersonRequest } from "../PersonModel";

const usePerson = () => {
  const [personData, setPersonData] = useState<Person[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const getPersons = async () => {
    try {
      const response = await axios.get("v1/persons");
      setPersonData(response.data);
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

  useEffect(() => {
    !openModal && getPersons();
  }, [openModal]);
  return {
    personData,
    openModal,
    setOpenModal,
    createPersons,
    deletePersons,
  };
};

export default usePerson;
