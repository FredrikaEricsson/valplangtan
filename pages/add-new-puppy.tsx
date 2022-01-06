import Calendar from "react-calendar";
import { DateTime } from "luxon";
import "react-calendar/dist/Calendar.css";
import { ChangeEvent, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

interface INewPuppy {
  birthDate: DateTime;
  name: string;
}

const AddNewPuppy = () => {
  const router = useRouter();

  let dt = DateTime.now();

  const [puppy, setPuppy] = useState<INewPuppy>({
    name: "",
    birthDate: dt,
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

  const handleDateChange = (selectedDate: Date) => {
    let birthDate = DateTime.fromJSDate(selectedDate);
    setPuppy((prevInput) => {
      return {
        ...prevInput,
        birthDate,
      };
    });
  };

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let response = await axios.post(
      "http://localhost:3001/add-new-puppy",
      puppy,
      {
        withCredentials: true,
      }
    );
    if (response.status === 200) {
      return router.push("/puppy");
    } else {
      console.log("Det funkar inte");
    }
  };

  return (
    <>
      <form action=''>
        <input type='text' name='name' onChange={handleChange} />
        <Calendar
          minDate={dt.minus({ years: 1 }).toJSDate()}
          maxDate={dt.toJSDate()}
          showWeekNumbers={true}
          value={new Date()}
          onChange={(date: Date) => {
            handleDateChange(date);
          }}
        />
        <button type='submit' onClick={handleClick}>
          Skapa
        </button>
      </form>
    </>
  );
};

export default AddNewPuppy;
