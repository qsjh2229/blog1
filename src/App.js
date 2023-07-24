import { useState } from "react";
import "./App.css";
import styled from "styled-components";

const Box = styled.div`
  background: tan;
  padding: 20px;
`;
function App() {
  let [fashion, setFashion] = useState(["편집샵", "백화점", "아울렛"]);
  let [count, setCount] = useState(0);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [input, setInput] = useState("");

  return (
    <div>
      <Box>
        <h4>블로그</h4>
      </Box>
      <button
        onClick={(prevfashion) => {
          prevfashion = [...fashion];
          prevfashion[0] = "마트";
          setFashion(prevfashion);
        }}
      >
        수정
      </button>

      {modal == true ? (
        <Modal
          fashion={fashion}
          color={"yellow"}
          setFashion={setFashion}
          setTitle={setTitle}
          title={title}
        />
      ) : null}
      {fashion.map((item, i) => {
        return (
            
          <div className="list">
            <h4
              onClick={() => {
                setModal(!modal);
                setTitle(item);
              }}
            >
              {item}{" "}
              <span
                className="font"
                onClick={(e) => {
                  e.stopPropagation();
                  setCount(count + 19999999998);
                }}
              >
                {" "}
                좋아요 ❤ :{count}
              </span>{" "}
            </h4>
            <p>2023/07/24</p>
            <button onClick={()=>{
                let copy= [...fashion]
                copy.splice(i,1)
                console.log(i)
                setFashion(copy)
            }}>삭제 </button>
          </div>
        );
      })}
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
          console.log(input);
        }}
      ></input>
      <button
        onClick={() => {
          let copy = [...fashion];
          copy.unshift(input);
          setFashion(copy);
        }}
      >
        글쓰기
      </button>
    </div>
  );
}

function Modal(props) {
    let [a,setA]=useState('VUS','SDGG','SDGSDFG')
  return (
    <div className="modal" style={{ background: props.color }}>
      <h2>{props.title}</h2>
      <p>날짜</p>
      <p>{a}</p>
      <button onClick={()=>{setA('바뀜')}}>글 수정</button>
    </div>
  );
}

export default App;
