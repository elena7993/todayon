import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import {
  Tooltip,
  IconButton,
  PlusIcon,
  Popover,
  Menu,
  Position,
} from "evergreen-ui";
import styled from "styled-components";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    font-weight: 600;
  }

  p {
    font-size: 12px;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    line-height: 16px;
    letter-spacing: 0.1px;
    color: #888;
  }

  span {
    display: block;
    margin-top: 14px;
    font-size: 14px;
    letter-spacing: -0.4px;
    color: #888;
  }
`;

const StyledMenu = styled(Menu)`
  /* .ub-min-w_200px {
    min-width: 120px !important;
  } */
`;

const MyNote = () => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);
  const location = useLocation();
  // 현재 경로를 가져옴

  const colors = ["#FFF6E7", "#E5FFE6", "#F3E4F7", "#EDBBB4", "#EDBBB4"];

  const { id } = useParams();
  const [note, setNote] = useState(null);
  console.log(note);

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

  const handleView = (id) => {
    navigate(`/notes-detail/${id}`);
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
                <Popover
                  position={Position.BOTTOM_LEFT}
                  content={
                    <StyledMenu>
                      <Menu.Group>
                        <Menu.Item onSelect={() => handleView(note.id)}>
                          보기...
                        </Menu.Item>
                        <Menu.Item onSelect={() => handleEdit(note.id)}>
                          수정...
                        </Menu.Item>
                      </Menu.Group>
                      <Menu.Divider />
                      <Menu.Group>
                        <Menu.Item
                          onSelect={() => handleDelete(note.id)}
                          intent="danger"
                        >
                          삭제...
                        </Menu.Item>
                      </Menu.Group>
                    </StyledMenu>
                  }
                >
                  <FontAwesomeIcon
                    icon={faEllipsisVertical}
                    style={{ fontSize: "16px", cursor: "pointer" }}
                  />
                </Popover>
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
