import React from "react";
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
      <Button onClick={props.deletePuppy}>Radera</Button>
      <Button onClick={props.toggleDeleteModal}>Avbryt</Button>
    </>
  );
};

export default DeletePuppyModal;
