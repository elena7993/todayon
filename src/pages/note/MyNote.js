import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import { Tooltip, IconButton, PlusIcon } from "evergreen-ui";
import styled from "styled-components";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LuTrash2, LuPencilLine } from "react-icons/lu";

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
    letter-spacing: 0.1px;
  }

  span {
    display: block;
    margin-top: 14px;
    font-size: 14px;
    letter-spacing: -0.4px;
    color: #666;
  }
`;

const MyNote = () => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

  const location = useLocation();
  // 현재 경로를 가져옴

  const colors = ["#FFF6E7", "#E5FFE6", "#F3E4F7", "#EDBBB4", "#EDBBB4"];

  const { id } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const currentNote = notes.find((note) => note.id === parseInt(id));
    setNote(currentNote);
  }, [id]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    console.log("Loaded notes:", storedNotes);
    setNotes(storedNotes);
  }, []);

  const handleAddNote = () => {
    navigate("/notes-detail");
  };

  const handleEdit = (id) => {
    console.log("Edit ID:", id);
    navigate(`/notes-detail/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      const updatedNotes = notes.filter((note) => note.id !== id);

      setNotes(updatedNotes);

      localStorage.setItem("notes", JSON.stringify(updatedNotes)); //
    }
  };

  const handleMenuOpen = (event, noteId) => {
    const rect = event.target.getBoundingClientRect();

    setMenuPosition({ top: rect.top - 50, left: rect.left - 320 });

    setActiveMenu(noteId);
    // 열릴 메뉴의 노트 ID 설정
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
              <div
                className="innerHeader"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <h3>{note.title}</h3>
                <FontAwesomeIcon
                  icon={faEllipsisVertical}
                  style={{ fontSize: "12px", cursor: "pointer" }}
                  onClick={(e) => handleMenuOpen(e, note.id)}
                />
                {activeMenu === note.id && (
                  <div
                    style={{
                      position: "absolute",
                      top: `${menuPosition.top}px`,
                      left: `${menuPosition.left}px`,
                      backgroundColor: "#fff",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                      borderRadius: "10px",
                      // padding: "px 0",
                      zIndex: 10,
                    }}
                  >
                    <div
                      style={{
                        padding: "0 10px 6px 10px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleEdit(note.id)} // 수정
                    >
                      <span
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          gap: "2px",
                        }}
                      >
                        <LuPencilLine />
                        수정
                      </span>
                    </div>
                    <div
                      style={{
                        padding: "0 10px 8px 10px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleDelete(note.id)}
                    >
                      <span
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          color: "tomato",
                        }}
                      >
                        <LuTrash2 />
                        삭제
                      </span>
                    </div>
                  </div>
                )}
              </div>
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
