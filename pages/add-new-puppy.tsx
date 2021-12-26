import Calendar from "react-calendar";
import { DateTime } from "luxon";
import "react-calendar/dist/Calendar.css";
import { ChangeEvent, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import router from "next/router";

interface INewPuppy {
  BirthDate: DateTime;
  Name: string;
}

const AddNewPuppy = () => {
  let dt = DateTime.now();

  const [puppy, setPuppy] = useState<INewPuppy>({
    Name: "",
    BirthDate: dt,
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
    let BirthDate = DateTime.fromJSDate(selectedDate);
    setPuppy((prevInput) => {
      return {
        ...prevInput,
        BirthDate,
      };
    });
  };

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let cookie = Cookies.get("token");
    if (!cookie) {
      return router.push("/login");
    }
    let user = await axios.get("http://localhost:1337/api/users/me", {
      headers: {
        Authorization: cookie,
      },
    });

    console.log(user);

    let addPuppy = await axios.post(
      "http://localhost:1337/api/puppy",
      {
        data: {
          Name: puppy.Name,
          BirthDate: puppy.BirthDate,
          user: user.data.id,
        },
      },
      {
        headers: {
          Authorization: cookie,
        },
      }
    );
  };

  return (
    <>
      <form action=''>
        <input type='text' name='Name' onChange={handleChange} />
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
