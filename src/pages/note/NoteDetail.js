import styled from "styled-components";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import Button from "../../components/Button";

const InputFeild = styled.div`
  margin-bottom: 5px;
  input {
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: 1px solid #ddd;
    font-size: 18px;
    color: #333;
    padding: 4px 0;
    outline: none;
    background: transparent;
    margin-top: 20px;

    &::placeholder {
      color: #ccc;
    }
  }
`;

const NoteFeild = styled.div`
  margin-bottom: 20px;

  textarea {
    width: 100%;
    height: 400px;
    border: none;
    border-bottom: 1px solid #ddd;
    font-size: 16px;
    color: #333;
    padding: 8px 0;
    outline: none;
    resize: none;
    background: transparent;

    &::placeholder {
      color: #ccc;
      font-weight: 500;
    }
  }
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NoteDetail = () => {
  return (
    <Wrapper>
      <Header text="My Notes" />
      <InputFeild>
        <input type="text" placeholder="Title" />
      </InputFeild>
      <NoteFeild>
        <textarea placeholder="Note"></textarea>
      </NoteFeild>
      <BtnWrap>
        <Button to={"/notes"}>Complited</Button>
      </BtnWrap>
    </Wrapper>
  );
};

export default NoteDetail;
