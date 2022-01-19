import React from "react";
import { ButtonWrapper } from "../styles/delete-puppy-modal";
import { Button } from "../styles/global";

interface IDeletePuppyModalProps {
  deletePuppy(): void;
  toggleDeleteModal(): void;
}

const DeletePuppyModal = (props: IDeletePuppyModalProps) => {
  return (
    <>
      <div>
        Är du säker på att du vill radera din valp? Detta kommer även ta bort
        alla dina checklistor och går inte att återställa
      </div>
      <ButtonWrapper>
        <Button className='cancel' onClick={props.toggleDeleteModal}>
          Avbryt
        </Button>
        <Button className='delete' onClick={props.deletePuppy}>
          Radera
        </Button>
      </ButtonWrapper>
    </>
  );
};

export default DeletePuppyModal;
