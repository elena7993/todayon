import Wrapper from "../../components/Wrapper";
import Header from "../../components/Header";
import Button from "../../components/Button";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const ProfileImg = styled.div`
  margin: 50px 0;
`;
const UserInfo = styled.div`
  margin: 30px 0;
`;
const InputField = styled.div`
  .h3 {
    font-size: 20px;
    margin-bottom: 5px;
  }

  input {
    all: unset;
    width: 325px;
    height: 55px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    padding: 0 10px;
    margin-bottom: 25px;
  }
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CreateProfile = ({ text, BackBtn }) => {
  return (
    <Wrapper>
      <Header text="Create Profile" />
      <ProfileImg>
        <FontAwesomeIcon
          icon={faUser}
          style={{
            width: "50px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
          }}
        ></FontAwesomeIcon>
      </ProfileImg>
      <UserInfo>
        <InputField>
          <div className="h3">Username</div>
          <input type="text" placeholder="Enter your name" />
        </InputField>
        <InputField>
          <div className="h3">email</div>
          <input type="email" placeholder="Enter your email" />
        </InputField>
        <InputField>
          <div className="h3">Birth Date</div>
          <input type="date" />
        </InputField>
      </UserInfo>
      <BtnWrap>
        <Button to="/main">Continue</Button>
      </BtnWrap>
    </Wrapper>
  );
};

export default CreateProfile;
