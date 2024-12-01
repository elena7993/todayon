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

const MainPage = () => {
  const [todos, setTodos] = useState(["Buy groceries", "Clean the house"]);
  const [notes, setNotes] = useState([
    "Remember to call mom",
    "Finish the project",
    "Read a book",
  ]);

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
            <p>SeeAll</p>
          </div>

          {todos.length > 0 ? (
            todos.map((todo, index) => (
              <TodoItem key={index}>
                {todo}
                <span>|</span>
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

        <NoteSection>
          <div className="textWrap">
            <h2>Notes</h2>
            <p>SeeAll</p>
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
