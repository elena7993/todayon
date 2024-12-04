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

  const { id } = useParams(); // URL의 ID 가져오기
  // console.log("Note ID:", id);

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const currentNote = notes.find((note) => note.id === parseInt(id)); // ID로 검색
    if (currentNote) {
      setTitle(currentNote.title);
      setContent(currentNote.content);
    }
  }, [id]);

  const handleSaveNote = () => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const updatedNotes = notes.map((note) =>
      note.id === parseInt(id)
        ? { ...note, title, content, date: new Date().toLocaleString() }
        : note
    );

    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    // 수정된 데이터 저장
    navigate("/notes"); // MyNote 페이지로 이동
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