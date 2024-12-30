import Wrapper from "../../components/Wrapper";
import Header from "../../components/Header";
import Button from "../../components/Button";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const UserInfo = styled.div`
  margin: 100px 0;
`;
const InputField = styled.div`
  margin-bottom: 20px;
  h3 {
    font-size: 20px;
    margin-bottom: 5px;
  }

  input {
    all: unset;
    width: 300px;
    height: 55px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    padding: 0 10px;
    margin-bottom: 5px;
  }
  p {
    color: tomato;
    margin-left: 10px;
  }
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CreateProfile = ({ text, BackBtn }) => {
  // const [username, setUsername] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    // console.log("Form Submitted:", data);
    localStorage.setItem("username", data.username);
    localStorage.setItem("email", data.email);
    localStorage.setItem("birthDate", data.birthDate);
    navigate("/main");
  };

  return (
    <Wrapper>
      <Header text="Create Profile" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <UserInfo>
          <InputField>
            <h3>Username</h3>
            <input
              type="text"
              placeholder="Enter your name"
              {...register("username", {
                required: "Username is required",
              })}
            />
            {errors.username && <p>{errors.username.message}</p>}
          </InputField>

          <InputField>
            <h3>email</h3>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </InputField>

          <InputField>
            <h3>Birth Date</h3>
            <input
              type="date"
              placeholder="DD/MM/YYYY"
              {...register("birthDate", { required: "Birth Date is required" })}
            />
            {errors.birthDate && <p>{errors.birthDate.message}</p>}
          </InputField>
        </UserInfo>

        <BtnWrap>
          <Button
            type="submit"
            noBg={!isValid}
            addColor={!isValid}
            addBorder={!isValid}
            disabled={!isValid}
            onClick={() => handleSubmit(onSubmit)()}
          >
            Continue
          </Button>
        </BtnWrap>
      </form>
    </Wrapper>
  );
};

export default CreateProfile;
