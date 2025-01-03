import styled from "styled-components";

// 투두리스트 스타일
export const TodoSection = styled.div`
  margin-bottom: 30px;
  .textWrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;
    h2 {
      font-size: 20px;
      font-weight: 600;
    }
    p {
      font-size: 16px;
      cursor: pointer;
    }
  }
`;

export const TodoItem = styled.div`
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-family: "IBM Plex Sans KR", serif;
  font-weight: 100;
  font-style: normal;

  /* &:hover {
    background-color: #f0f0f0;
  } */
`;

export const NoteSection = styled.div`
  margin-bottom: 30px;
  overflow: hidden;
  .textWrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 25px 0 15px 0;
    h2 {
      font-size: 20px;
      font-weight: 600;
    }
    p {
      font-size: 16px;
      cursor: pointer;
    }
  }
`;

export const NoteGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 120px;
  gap: 10px;
`;

export const NoteItem = styled.div`
  width: 154px;
  height: 120px;
  padding: 10px;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  background-color: #fff;

  h3 {
    font-size: 14px;
    font-weight: 600;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 6px 0 10px 0;
  }
  p {
    font-size: 12px;
    color: #666;
    line-height: 1.4;
    letter-spacing: 0.1px;
    margin: 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* 내용은 최대 2줄로 제한 */
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }
`;

// ------------------빈 상태 메시지 스타일--------------------
export const EmptyState = styled.div`
  text-align: center;
  font-size: 20px;
  margin: 50px 0;

  button {
    all: unset;
    width: 40px;
    height: 40px;
    border-radius: 15px;
    background-color: #000;
    color: white;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    cursor: pointer;
    margin-bottom: 20px;
  }
`;
