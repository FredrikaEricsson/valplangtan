import Calendar from "react-calendar";
import { DateTime } from "luxon";
import "react-calendar/dist/Calendar.css";
import { ChangeEvent, useState } from "react";

interface INewPuppy {
  birthDate: string;
  puppyName: string;
}

const AddNewPuppy = () => {
  let dt = DateTime.now();

  const [puppy, setPuppy] = useState<INewPuppy>({
    puppyName: "",
    birthDate: dt.toString(),
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setPuppy((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  const handleDateChange = (birthDate: string) => {
    setPuppy((prevInput) => {
      return {
        ...prevInput,
        birthDate,
      };
    });
  };

  return (
    <>
      <form action=''>
        <input type='text' name='puppyName' onChange={handleChange} />
        <Calendar
          minDate={dt.minus({ years: 1 }).toJSDate()}
          maxDate={dt.toJSDate()}
          showWeekNumbers={true}
          value={new Date()}
          onChange={(date: Date) => {
            handleDateChange(date.toString());
          }}
        />
        <button type='submit'>Skapa</button>
      </form>
    </>
  );
};

export default AddNewPuppy;
