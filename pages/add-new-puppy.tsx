import Calendar from "react-calendar";
import { DateTime } from "luxon";
import "react-calendar/dist/Calendar.css";
import { ChangeEvent, useEffect, useRef, useState } from "react";
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

  const [error, setError] = useState({
    puppyName: "",
  });

  const validation = () => {
    let errorMessage = {
      puppyName: "",
    };

    if (puppy.name === "") {
      errorMessage.puppyName = "Valpen behöver ett namn";
    } else {
      errorMessage.puppyName = "";
    }
    setError(errorMessage);
  };

  useEffect(() => {
    const getUser = async () => {
      let userResponse = await axios.get("http://localhost:3001/get-user", {
        withCredentials: true,
      });

      if (userResponse.data.puppy.name === "") {
        return;
      } else {
        return router.push("/puppy");
      }
    };
    getUser();
  }, [router]);

  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    validation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [puppy]);

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
      <h1>Ny valp</h1>
      <form action=''>
        <label htmlFor='name'>Valpens namn</label>
        <input type='text' name='name' onChange={handleChange} />
        {error.puppyName && <small>{error.puppyName}</small>}
        <label htmlFor='Calendar'>Valpens födelsedatum</label>
        <Calendar
          minDate={dt.minus({ years: 1 }).toJSDate()}
          maxDate={dt.toJSDate()}
          showWeekNumbers={true}
          value={new Date()}
          onChange={(date: Date) => {
            handleDateChange(date);
          }}
        />
        <button disabled={error.puppyName.length > 0} onClick={handleClick}>
          Skapa
        </button>
      </form>
    </>
  );
};

export default AddNewPuppy;
