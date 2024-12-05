import React, { useEffect, useState } from "react";
import {
  TodoSection,
  TodoItem,
  NoteSection,
  NoteGrid,
  NoteItem,
  EmptyState,
} from "../../components/styles/MainPageStyles";
import Wrapper from "../../components/Wrapper";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { Avatar } from "evergreen-ui";
import stretchingData from "../streching/stretchingData";

const HeaderMain = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    font-size: 18px;
  }
`;

const GoStretching = styled.div`
  position: relative;
  margin: 15px 0;
  h2 {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 10px;
  }
  .button {
    width: 333px;
    height: 70px;
    background: linear-gradient(
      121deg,
      rgba(249, 235, 194, 1) 0%,
      rgba(255, 247, 224, 1) 77%,
      rgba(249, 231, 179, 1) 100%
    );
    border-radius: 15px;
    display: flex;
    align-items: center;
    cursor: pointer;

    p {
      font-size: 16px;
      padding: 0 10px;
    }
  }
  .anime {
    img {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`;

const MainPage = () => {
  const [todos, setTodos] = useState([]);
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  const username = localStorage.getItem("username") || "Guest";

  useEffect(() => {
    // localStorage에서 노트 데이터 가져오기
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
    const storedTodos = JSON.parse(localStorage.getItem("tasks")) || [];
    setTodos(storedTodos);
  }, []);

  const handleStartStretching = () => {
    const randomIndex = Math.floor(Math.random() * stretchingData.length);
    const randomStretch = stretchingData[randomIndex];
    navigate("/stretching", { state: { randomStretch } });
  };

  return (
    <div>
      <Wrapper>
        <HeaderMain>
          <h3>Hi, {username}</h3>
          <Avatar name={username} size={35} />
        </HeaderMain>
        <TodoSection>
          <div className="textWrap">
            <h2>ToDo</h2>
            <p onClick={() => navigate("/todo")}>SeeAll</p>
          </div>

          {todos.length > 0 ? (
            todos.slice(0, 3).map((todo, index) => (
              <TodoItem key={index}>
                <span
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    display: "block",
                    maxWidth: "90%",
                    letterSpacing: "-0.8px",
                  }}
                >
                  {todo.text}
                </span>
              </TodoItem>
            ))
          ) : (
            <EmptyState>
              <button onClick={() => navigate("/todo")}>+</button>
              <p>Let's make the list for today!</p>
            </EmptyState>
          )}
        </TodoSection>

        {/* ------------------------------------------- */}

        <GoStretching>
          <h2>To Strech Body</h2>
          <div className="button" onClick={handleStartStretching}>
            <p>Take a moment for your body!</p>
            <BsArrowRight
              style={{
                fontSize: "16px",
                marginTop: "6px",
              }}
            />

            <div className="anime">
              <img
                src={`${process.env.PUBLIC_URL}/animation/AnimationBtn.gif`}
                alt="AnimationBtn"
                style={{ width: "125px", height: "125px" }}
              />
            </div>
          </div>
        </GoStretching>

        <NoteSection>
          <div className="textWrap">
            <h2>Notes</h2>
            <p onClick={() => navigate("/notes")}>SeeAll</p>
          </div>
          {notes.length > 0 ? (
            <NoteGrid>
              {notes.slice(0, 2).map((note) => (
                // <NoteItem key={note.id}>{note}</NoteItem>
                <NoteItem key={note.id}>
                  <h3>{note.title}</h3>
                  <p>{note.content}</p>
                </NoteItem>
              ))}
            </NoteGrid>
          ) : (
            <EmptyState>
              <button onClick={() => navigate("/notes-detail")}>+</button>
              <p>Let's make a new note!</p>
            </EmptyState>
          )}
        </NoteSection>
      </Wrapper>
    </div>
  );
};

export default MainPage;
