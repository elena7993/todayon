import styled from "styled-components";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const InputFeild = styled.div`
  margin-bottom: 5px;
  input {
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: 1px solid #ddd;
    font-size: 18px;
    font-family: "IBM Plex Sans KR", serif;
    font-weight: 300;
    font-style: normal;
    color: #333;
    padding: 8px 0;
    outline: none;
    background: transparent;
    margin-top: 20px;
    letter-spacing: 1px;

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
    /* border-bottom: 1px solid #ddd; */
    font-family: "IBM Plex Sans KR", serif;
    font-weight: 300;
    font-style: normal;
    font-size: 16px;
    color: #555;
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

  const { id } = useParams();
  // URL의 ID 가져오기

  useEffect(() => {
    if (id) {
      const notes = JSON.parse(localStorage.getItem("notes")) || [];
      const currentNote = notes.find((note) => note.id === parseInt(id));
      if (currentNote) {
        setTitle(currentNote.title);
        setContent(currentNote.content);
      }
    } else {
      setTitle(""); // 초기 상태 비우기
      setContent("");
    }
  }, [id]);

  const handleSaveNote = () => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];

    if (id) {
      const updatedNotes = notes.map((note) =>
        note.id === parseInt(id)
          ? { ...note, title, content, date: new Date().toLocaleString() }
          : note
      );
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
    } else {
      const newNote = {
        id: Date.now(),
        title,
        content,
        date: new Date().toLocaleString(),
      };
      notes.push(newNote);
      localStorage.setItem("notes", JSON.stringify(notes));
    }
    navigate("/notes");
  };

  return (
    <Wrapper>
      <Header text="My Notes" />
      <InputFeild>
        <input
          type="text"
          placeholder="Title"
          value={title || ""}
          onChange={(e) => setTitle(e.target.value)}
        />
      </InputFeild>
      <NoteFeild>
        <textarea
          placeholder="Note"
          value={content || ""}
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
