import Calendar from "react-calendar";
import { DateTime } from "luxon";
import "react-calendar/dist/Calendar.css";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Button, Input, Headline, ErrorMessageStyle } from "../styles/global";
import {
  AddPuppyContainer,
  AddPuppyWrapper,
  CalendarWrapper,
  FormWrapper,
} from "../styles/add-new-puppy";

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
      if (puppy.name.length > 20 || puppy.name.length < 2) {
        errorMessage.puppyName =
          "Valpens namn måste vara mellan 2-20 tecken långt";
      } else {
        errorMessage.puppyName = "";
      }
    }
    setError(errorMessage);
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        let userResponse = await axios.get("http://localhost:3001/get-user", {
          withCredentials: true,
        });

        if (userResponse.data.puppy.name === "") {
          return;
        } else {
          return router.push("/puppy");
        }
      } catch (error: any) {
        if (error.response.status === 401) {
          return router.push("/");
        } else {
          return router.push("/error");
        }
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
    try {
      await axios.post("http://localhost:3001/add-new-puppy", puppy, {
        withCredentials: true,
      });
      return router.push("/puppy");
    } catch (error: any) {
      if (error.response.status === 401) {
        return router.push("/");
      } else {
        return router.push("/error");
      }
    }
  };

  return (
    <AddPuppyContainer>
      <Headline>Ny valp</Headline>
      <AddPuppyWrapper>
        <form action=''>
          <FormWrapper>
            <label htmlFor='name'>Valpens namn</label>
            <Input type='text' name='name' onChange={handleChange} />
            {error.puppyName && (
              <ErrorMessageStyle>{error.puppyName}</ErrorMessageStyle>
            )}
            <label>
              Valpens födelsedatum
              <CalendarWrapper>
                <Calendar
                  minDate={dt.minus({ weeks: 7, days: 6 }).toJSDate()}
                  maxDate={dt.toJSDate()}
                  showWeekNumbers={true}
                  value={new Date()}
                  onChange={(date: Date) => {
                    handleDateChange(date);
                  }}
                />
              </CalendarWrapper>
            </label>
            <Button disabled={error.puppyName.length > 0} onClick={handleClick}>
              Skapa
            </Button>
          </FormWrapper>
        </form>
      </AddPuppyWrapper>
    </AddPuppyContainer>
  );
};

export default AddNewPuppy;
