import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import { Tooltip, IconButton, PlusIcon } from "evergreen-ui";

const MyNote = () => {
  const navigate = useNavigate();
  const location = useLocation(); // 현재 경로를 가져오기

  const handleAddNote = () => {
    navigate("/notes-detail");
  };

  return (
    <Wrapper>
      <Header text="My Notes" />
      <div style={{ position: "relative", height: "100%", padding: "16px" }}>
        {/* 현재 경로가 /notes 일 때만 플러스 버튼 렌더링 */}
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
