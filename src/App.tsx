import React from 'react';
import './App.css';
import { useState,Dispatch, SetStateAction } from 'react';

function App() {

  let [title, set_title] = useState<string[]>(['리엑트 강의 추천', '파이썬 강의 추천', '타입스크립트 강의 추천']);
  let [like, set_like] = useState<number[]>([0, 0, 0]);
  let [modal, set_modal] = useState<boolean>(false);
  let [which, set_which] = useState<number>(0);
  let [input, set_input] = useState<string>("");
  
  return (
    <div className="App">
      <div className='black-nav'>
        <h4>블로그임</h4>
        <button onClick={ ()=>{
					let copy = [...title];
					copy[0] = '여자 코트 추천';
					set_title(copy);
        }}></button>
      </div>
      {
        title.map(function(aa, i){
          return(
            <div className="list">
              <h4 onClick={()=> { 
                modal == true ? set_modal(false) : set_modal(true); set_which(i);
                }}>{ title[i] }
                <span onClick={ ()=>{ 
                  let copy = [...like];
                  copy[i] = copy[i] + 1;
                  set_like(copy)  
                  } }>👍</span>
                { like[i] }
                <button onClick={()=> { 
                  let re = [...title];
                  re.shift();
                  set_title(re);
                 }}>글 삭제</button>
              </h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }
      <input onChange={(e)=> { set_input(e.target.value) }}/>
      <button onClick={()=>{ set_title([input,...title]) }}>발행</button>
      {
          modal == true ? <Modal props={title} which={which} set_title={ set_title }></Modal> : null
      }
    </div>
  );
}


const Modal = ({props, which, set_title} : {props:Array<string>; which:number; set_title:React.Dispatch<React.SetStateAction<string[]>>;}) => {
  return (
    <div className="modal">
      <h4>제목</h4>
      <div>{props[which]}</div>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={ ()=>{ set_title(['여자 코트 추천', '파이썬 강의 추천', '타입스크립트 강의 추천']) } }>글제목 변경</button>
    </div>
  )
}

export default App;
