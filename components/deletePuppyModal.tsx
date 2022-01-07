import React, { useState } from "react";

interface IDeletePuppyModalProps {
  deletePuppy(confirmed: boolean): void;
}

const DeletePuppyModal = (props: IDeletePuppyModalProps) => {
  const [deletePuppyConfirmed, setDeletePuppyConfirmed] = useState();

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault;
    props.deletePuppy(true);
  };

  const handleExit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault;
    props.deletePuppy(false);
  };

  return (
    <>
      <div>
        Är du säker på att du vill radera din valp? Detta kommer också ta bort
        alla dina checklistor och går inte att återställa
      </div>
      <button onClick={handleDelete}>Radera</button>
      <button onClick={handleExit}>Avbryt</button>
    </>
  );
};

export default DeletePuppyModal;
