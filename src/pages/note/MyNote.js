import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import { Tooltip, IconButton, PlusIcon } from "evergreen-ui";
import styled from "styled-components";

const NoteGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 15px;
  column-gap: 20px;
  /* padding: 8px; */
`;

const NoteCard = styled.div`
  background-color: ${(props) => props.bgColor};
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #333;
  font-size: 14px;
  min-height: 120px;

  h3 {
    margin: 0 0 8px;
    font-size: 16px;
    font-weight: 500;
  }

  p {
    font-size: 14px;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    line-height: 16px;
  }

  span {
    display: block;
    margin-top: 16px;
    font-size: 12px;
    color: #666;
  }
`;

const MyNote = () => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);

  const location = useLocation();
  // 현재 경로를 가져옴

  const colors = ["#FFF6E7", "#E5FFE6", "#F3E4F7", "#EDBBB4", "#EDBBB4"];

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  const handleAddNote = () => {
    navigate("/notes-detail");
  };

  return (
    <Wrapper>
      <Header text="My Notes" />
      <div
        style={{
          position: "relative",
          height: "100%",
          padding: "25px 4px",
        }}
      >
        <NoteGrid>
          {notes.map((note, index) => (
            <NoteCard key={index} bgColor={colors[index % colors.length]}>
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <span>{note.date}</span>
            </NoteCard>
          ))}
        </NoteGrid>
        {location.pathname === "/notes" && (
          <Tooltip content="새 노트를 추가하세요!">
            <IconButton
              icon={PlusIcon}
              onClick={handleAddNote}
              appearance="primary"
              style={{
                position: "absolute",
                bottom: "20px",
                right: "20px",
                backgroundColor: "#fff",
                color: "#000",
                border: "1px solid #6E7490",
                borderRadius: "15px",
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              }}
            />
          </Tooltip>
        )}
      </div>
    </Wrapper>
  );
};

export default MyNote;
