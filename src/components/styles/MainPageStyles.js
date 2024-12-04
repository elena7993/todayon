import styled from "styled-components";

// 투두리스트 스타일
export const TodoSection = styled.div`
  margin-bottom: 30px;
  .textWrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px 0 10px 0;
    h2 {
      font-size: 20px;
      font-weight: 400;
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
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const NoteSection = styled.div`
  margin-bottom: 30px;
  overflow: hidden;
  .textWrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px 0 10px 0;
    h2 {
      font-size: 20px;
      font-weight: 400;
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
  width: 160px;
  height: 120px;
  padding: 10px;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  /* cursor: pointer; */
  h3 {
    font-size: 14px;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 10px;
  }
  p {
    font-size: 12px;
    color: #666;
    line-height: 1.4;
    letter-spacing: 0.1px;
    margin: 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* 내용은 최대 2줄로 제한 */
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }

  &:hover {
    transform: scale(1.02);
    transition: 0.2s ease-in-out;
  }
`;

// 빈 상태 메시지 스타일
export const EmptyState = styled.div`
  text-align: center;
  font-size: 20px;
  margin: 50px 0;

  button {
    width: 45px;
    height: 45px;
    border-radius: 15px;
    background-color: black;
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
