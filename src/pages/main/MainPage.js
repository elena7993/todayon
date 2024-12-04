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

const GoStretching = styled.div`
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

const stretchingData = [
  {
    id: 0,
    title: "어깨 꽉 쥐어짜기",
    desc: "앉아서 어깨를 쥐어짜는 동작은 자세를 개선하고 상체를 강화하는 간단한 스트레칭입니다.",
    desc_2:
      "바닥이나 의자에 앉은 채, 허리 아래 뒤에서 손을 잡고 팔과 등을 곧게 펴세요. 5초간 유지한 후 놓습니다. 지하는 동안 어깨판을 함께 누릅니다.",
    img: `${process.env.PUBLIC_URL}/Imgs/1_Seated-Shoulder-Squeeze.webp`,
  },
  {
    id: 1,
    title: "앉은 자세에서 목 풀기",
    desc: "앉아서 하는 목 릴리스 운동은 목의 옆부분을 부드럽게 늘리고 이완시켜줍니다.",
    desc_2:
      "바닥이나 의자에 앉아서 오른손을 머리 위로 올려 왼쪽 귀에 올려놓으세요. 머리를 부드럽게 오른쪽으로 당깁니다. 왼쪽 어깨를 왼쪽 귀에서 바닥으로 밀어냅니다. 이 부드러운 스트레칭을 5~30초 동안 유지한 다음, 풀고 반대쪽으로 바꾸세요.",
    img: `${process.env.PUBLIC_URL}/Imgs/2_Seated-Neck-Release.webp`,
  },
  {
    id: 2,
    title: "목 스트레칭",
    desc: "목 스트레칭은 목과 상체의 긴장을 완화할 수 있습니다.",
    desc_2:
      "머리 뒤에서 손을 맞잡으세요. 척추를 똑바로 유지하고 턱을 가슴 쪽으로 부드럽게 낮추세요. 머리를 아래로 당기지 말고 손의 무게를 머리 위로 살짝 내리세요. 5~30초 동안 스트레칭을 한 다음, 풀어줍니다. 머리를 천천히 들어올립니다.",
    img: `${process.env.PUBLIC_URL}/Imgs/3-Seated-Clasping-Neck-Stretch.webp`,
  },
  {
    id: 3,
    title: "Cat-Cow(고양이-소 자세)",
    desc: "고양이-소 자세는 목, 등, 복근을 스트레칭합니다. 척추 유연성을 증진하고 복근을 강화합니다.",
    desc_2:
      "매트 위에 네 발로 엎드려, 어깨 아래에 손을 놓고 엉덩이 아래에 무릎을 놓습니다. 숨을 들이마시고 시선을 위로 올리면서 배를 내립니다. 그런 다음 숨을 내쉬고 머리가 가슴을 향해 내려가는 동안 척추를 둥글게 돌립니다. 척추와 상체가 늘어지는 것을 느껴보세요.",
    img: `${process.env.PUBLIC_URL}/Imgs/4-Cat-Cow.webp`,
  },
  {
    id: 4,
    title: "사이드 밴드",
    desc: "옆으로 굽히는 자세는 복근과 허리의 유연성을 높이고 자세를 개선해줍니다.",
    desc_2:
      "발을 어깨 너비로 벌리고 서거나 조금 더 넓게 서세요. 팔을 곧게 뻗고 머리 위로 손을 박수 치세요. 손을 왼쪽으로 옮기고 상체를 구부리고 엉덩이를 똑바로 유지하세요. 가능한 한 옆으로 스트레칭하세요. 그런 다음 중앙으로 돌아와 반대쪽으로 스트레칭하세요. 각 스트레칭을 5~30초간 유지하세요.",
    img: `${process.env.PUBLIC_URL}/Imgs/5-Side-Bends.webp`,
  },
  {
    id: 5,
    title: "Shoulder Roll(어깨돌리기)",
    desc: "숄더 롤은 목과 어깨 주변의 스트레스를 해소하는 데 좋은 운동입니다.",
    desc_2:
      "발을 어깨 너비만큼 벌리고 서거나 의자에 앉아서 척추를 똑바로 유지하세요. 팔은 엉덩이 옆에 늘어뜨리세요. 어깨를 귀 쪽으로 당긴 다음, 뒤로 굴리고 어깨뼈를 꽉 쥐세요. 아래로, 앞으로, 뒤로 굴리세요. 각 방향으로 10번 굴리세요.",
    img: `${process.env.PUBLIC_URL}/Imgs/6-Shoulder-Rolls-1.webp`,
  },
  {
    id: 6,
    title: "팔뚝 스트레칭",
    desc: "전완 스트레칭은 손목과 전완의 힘과 유연성을 개선하는 간단한 운동입니다.",
    desc_2:
      "오른팔을 뻗고 왼손을 사용하여 오른손을 아래로 당겨 몸쪽으로 당깁니다. 오른팔을 뒤집어 반대쪽을 스트레칭합니다. 그런 다음 팔을 바꿉니다. 각 스트레칭을 5초간 유지합니다. 필요에 따라 반복합니다.",
    img: `${process.env.PUBLIC_URL}/Imgs/7-Forearm-Stretch.webp`,
  },
  {
    id: 7,
    title: "무릎을 가슴까지 올리기",
    desc: "무릎을 가슴까지 쭉 뻗는 스트레칭은 엉덩이와 허리를 이완시켜 척추 신경에 가해지는 압박을 덜어줍니다.",
    desc_2:
      "등을 대고 누워 다리를 쭉 뻗으세요. 오른쪽 무릎을 당겨서 손으로 감싸세요. 무릎을 가슴 쪽으로 당기세요. 왼쪽 다리는 똑바로 유지하세요. 그런 다음 반대쪽으로 바꿔주세요. 스트레칭을 5~30초간 유지하세요.",
    img: `${process.env.PUBLIC_URL}/Imgs/8-Knee-To-Chest-Stretch.webp`,
  },
  {
    id: 8,
    title: "앉은자세로 앞으로 굽히기",
    desc: "다리를 벌리고 앞으로 굽히는 자세는 허벅지 안쪽, 허벅지 뒷부분, 척추를 스트레칭하는 데 도움이 됩니다.",
    desc_2:
      "바닥에 앉아서 발을 최대한 넓게 벌리세요. 척추를 곧게 펴고 손을 엉덩이 앞에 두세요. 손과 상체를 최대한 앞으로 기대도록 합니다. 할 수 있는 만큼함 앞으로 움직이세요. 척추는 똑바로 유지해도록 하세요. 5~30초 동안 자세를 유지하며 호흡합니다. 너무 쉬우면 팔꿈치를 낮출 수도 있습니다.",
    img: `${process.env.PUBLIC_URL}/Imgs/9-Seated-Forward-Fold.webp`,
  },
  {
    id: 9,
    title: "Uttanasana(우타나사나)",
    desc: "우타나사나는 척추와 상체, 목의 긴장을 풀어줍니다. 자세와 엉덩이 유연성을 개선합니다.",
    desc_2:
      "발을 어깨 너비만큼 벌립니다. 앞으로 구부리고 무릎을 살짝 구부립니다. 등과 목을 스트레칭해야 하므로 다리에 통증이 느껴지면 무릎을 더 구부리거나 발을 더 ​​넓게 벌립니다. 반대쪽 팔꿈치에 손을 감고, 발 옆이나 발 앞에 손을 놓을 수 있습니다. 긴장을 풀고 상체를 흔들어 보세요. 가볍게 좌우로 흔들거나 머리를 앞뒤로 흔들어도 좋습니다.",
    img: `${process.env.PUBLIC_URL}/Imgs/10-Uttanasana.webp`,
  },
];

const MainPage = () => {
  const [todos, setTodos] = useState([]);
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

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
    navigate("/stretching", { state: randomStretch });
  };

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
              {notes.map((note) => (
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
