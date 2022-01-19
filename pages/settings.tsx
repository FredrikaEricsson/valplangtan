import axios from "axios";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
import { DateTime } from "luxon";
import "react-calendar/dist/Calendar.css";
import DeletePuppyModal from "../components/deletePuppyModal";
import router from "next/router";
import { Headline, Input, Button } from "../styles/global";
import {
  CalendarWrapper,
  InputWrapper,
  SettingsContainer,
  SettingsWrapper,
  FormWrapper,
  DeleteButtonWrapper,
  InputContainer,
  CalendarButtonContainer,
} from "../styles/settings";
import { DeletePuppyModalContainer } from "../styles/delete-puppy-modal";
import { Overlay } from "../styles/slide";

interface IUser {
  _id: string;
  userName: string;
  email: string;
  puppy: { name: string; birthDate: DateTime };
}

interface IUserResponse {
  id: string;
  userName: string;
  email: string;
  puppy: { name: string; birthDate: string };
}

const SettingsPage = () => {
  const [user, setUser] = useState<IUser>();
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState<string>();

  const [inputError, setInputError] = useState({
    username: "",
    email: "",
    puppyName: "",
  });

  let dt = DateTime.now();

  useEffect(() => {
    const getUser = async () => {
      try {
        let userResponse = await axios.get<IUserResponse>(
          "http://localhost:3001/get-user",
          {
            withCredentials: true,
          }
        );
        if (userResponse.data.puppy.name === "") {
          return router.push("/add-new-puppy");
        }
        setUser({
          _id: userResponse.data.id,
          userName: userResponse.data.userName,
          email: userResponse.data.email,
          puppy: {
            name: userResponse.data.puppy.name,
            birthDate: DateTime.fromISO(userResponse.data.puppy.birthDate),
          },
        });
      } catch (error: any) {
        if (error.response.status === 401) {
          return router.push("/");
        }
        if (error.response.status === 403) {
          return router.push("/add-new-puppy");
        } else {
          return router.push("/error");
        }
      }
    };
    getUser();
  }, []);

  const handleDateChange = (date: Date) => {
    if (!user) {
      return;
    }
    let birthDate = DateTime.fromJSDate(date);
    setUser({ ...user, puppy: { ...user.puppy, birthDate: birthDate } });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!user) {
      return;
    }
    const name = e.target.name;
    const value = e.target.value;
    if (name === "userName" || "email") {
      setUser({ ...user, [name]: value });
    }
    if (name === "puppyName") {
      setUser({ ...user, puppy: { ...user.puppy, name: value } });
    }
  };

  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    validation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const validation = () => {
    if (!user) {
      return;
    }
    let errorMessages = {
      username: "",
      email: "",
      puppyName: "",
    };

    if (user.userName === "") {
      errorMessages.username = "Användarnamn krävs";
    } else {
      if (user.userName.length > 20 || user.userName.length < 2) {
        errorMessages.username =
          "Användarnamnet måste vara mellan 2-20 tecken långt";
      } else {
        errorMessages.username = "";
      }
    }
    if (user.email === "") {
      errorMessages.email = "Email krävs";
    } else {
      if (!/\S+@\S+\.\S+/.test(user.email)) {
        errorMessages.email = "Email har ogiltigt format";
      } else {
        errorMessages.email = "";
      }
    }
    if (user.puppy.name === "") {
      errorMessages.puppyName = "Valpen måste ha ett namn";
    } else {
      if (user.puppy.name.length > 20 || user.puppy.name.length < 2) {
        errorMessages.puppyName =
          "Valpens namn måste vara mellan 2-20 tecken långt";
      } else {
        errorMessages.puppyName = "";
      }
    }
    setInputError(errorMessages);
  };

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:3001/edit-user", user, {
        withCredentials: true,
      });

      setMessage("Dina ändringar är sparade");
    } catch (error: any) {
      if (error.response.status === 401) {
        return router.push("/");
      } else {
        setMessage("Nånting gick fel. Försök igen senare");
      }
    }
  };

  const toggleDeleteModal = async () => {
    setShowModal(!showModal);
  };

  const deletePuppy = async () => {
    try {
      await axios.put("http://localhost:3001/delete-puppy", user, {
        withCredentials: true,
      });
      return router.push("/add-new-puppy");
    } catch (error: any) {
      setMessage("Nånting gick fel. Försök igen senare");
    }
  };

  if (!user) {
    return null;
  }

  return (
    <SettingsContainer>
      <Headline>Inställningar</Headline>
      <SettingsWrapper>
        <FormWrapper>
          <InputContainer>
            <InputWrapper>
              <label htmlFor='userName'>Användarnamn</label>
              <Input
                type='text'
                name='userName'
                required
                minLength={2}
                maxLength={20}
                placeholder='Användarnamn'
                value={user.userName}
                onChange={handleInputChange}
              />
              {inputError.username && <small>{inputError.username}</small>}
            </InputWrapper>
            <InputWrapper>
              <label htmlFor='email'>Email</label>
              <Input
                type='email'
                name='email'
                required
                minLength={2}
                maxLength={20}
                placeholder='Email'
                value={user.email}
                onChange={handleInputChange}
              />
              {inputError.email && <small>{inputError.email}</small>}
            </InputWrapper>

            <InputWrapper>
              <label htmlFor='puppyName'>Valpens namn</label>
              <Input
                type='text'
                name='puppyName'
                required
                minLength={2}
                maxLength={20}
                placeholder='Valpens namn'
                value={user.puppy.name}
                onChange={handleInputChange}
              />
              {inputError.puppyName && <small>{inputError.puppyName}</small>}
            </InputWrapper>
          </InputContainer>
          <CalendarButtonContainer>
            <CalendarWrapper>
              <label className='calendarLabel'>
                Valpens födelsedatum
                <Calendar
                  minDate={dt.minus({ weeks: 7, days: 6 }).toJSDate()}
                  maxDate={dt.toJSDate()}
                  showWeekNumbers={true}
                  value={user.puppy.birthDate.toJSDate()}
                  onChange={(date: Date) => {
                    handleDateChange(date);
                  }}
                />
              </label>
            </CalendarWrapper>

            <Button
              disabled={
                inputError.username.length > 0 ||
                inputError.email.length > 0 ||
                inputError.puppyName.length > 0
              }
              onClick={handleClick}
            >
              Spara
            </Button>
          </CalendarButtonContainer>
          {message && <small>{message}</small>}
        </FormWrapper>
        <DeleteButtonWrapper>
          <Button onClick={toggleDeleteModal}>Radera valp</Button>
        </DeleteButtonWrapper>
        {showModal ? (
          <DeletePuppyModalContainer>
            <DeletePuppyModal
              deletePuppy={deletePuppy}
              toggleDeleteModal={toggleDeleteModal}
            ></DeletePuppyModal>
          </DeletePuppyModalContainer>
        ) : null}
      </SettingsWrapper>
    </SettingsContainer>
  );
};

export default SettingsPage;
