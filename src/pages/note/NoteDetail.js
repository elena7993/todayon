import styled from "styled-components";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import Button from "../../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSaveNote = () => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const newNote = { title, content, date: new Date().toLocaleString() };
    notes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(notes));
    navigate("/notes"); // MyNote 페이지로 이동
    console.log("클릭클릭");
  };

  return (
    <Wrapper>
      <Header text="My Notes" />
      <InputFeild>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </InputFeild>
      <NoteFeild>
        <textarea
          placeholder="Note"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </NoteFeild>
      <BtnWrap>
        <Button onClick={handleSaveNote}>Complited</Button>
      </BtnWrap>
    </Wrapper>
  );
};

export default NoteDetail;
