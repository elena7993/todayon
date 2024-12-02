import React, { useState } from "react";
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
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const HeaderMain = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    font-size: 18px;
  }
  span {
    width: 26px;
    height: 26px;
    background-color: lightblue;
    border-radius: 50%;
  }
`;

const GoStreching = styled.div`
  position: relative;
  h2 {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 10px;
  }
  .button {
    width: 333px;
    height: 70px;
    background-color: lightgray;
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
  const [todos, setTodos] = useState(["Buy groceries", "Clean the house"]);
  const [notes, setNotes] = useState([
    "Remember to call mom",
    "Finish the project",
    "Read a book",
  ]);

  const navigate = useNavigate();

  return (
    <div>
      <Wrapper>
        <HeaderMain>
          <h3>Hi, Elena Lee</h3>
          <span></span>
        </HeaderMain>
        <TodoSection>
          <div className="textWrap">
            <h2>ToDo</h2>
            <p onClick={() => navigate("/todo")}>SeeAll</p>
          </div>

          {todos.length > 0 ? (
            todos.map((todo, index) => (
              <TodoItem key={index}>
                {todo}
                <span>
                  <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                </span>
              </TodoItem>
            ))
          ) : (
            <EmptyState>
              <button>+</button>
              <p>Let's make the list for today!</p>
            </EmptyState>
          )}
        </TodoSection>

        {/* ------------------------------------------- */}

        <GoStreching>
          <h2>To Strech Body</h2>
          <div className="button" onClick={() => navigate("/streching")}>
            <p>Take a moment for your body!</p>

            <div className="anime">
              <img
                src={`${process.env.PUBLIC_URL}/animation/AnimationBtn.gif`}
                alt="AnimationBtn"
                style={{ width: "125px", height: "125px" }}
              />
            </div>
          </div>
        </GoStreching>

        <NoteSection>
          <div className="textWrap">
            <h2>Notes</h2>
            <p onClick={() => navigate("/notes")}>SeeAll</p>
          </div>
          {notes.length > 0 ? (
            <NoteGrid>
              {notes.map((note, index) => (
                <NoteItem key={index}>{note}</NoteItem>
              ))}
            </NoteGrid>
          ) : (
            <EmptyState>
              <button>+</button>
              <p>Let's make a new note!</p>
            </EmptyState>
          )}
        </NoteSection>
      </Wrapper>
    </div>
  );
};

export default MainPage;
