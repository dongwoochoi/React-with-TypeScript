import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {

  let [title, set_title] = useState<string[]>(['리엑트 강의 추천', '파이썬 강의 추천', '타입스크립트 강의 추천']);
  let [like, set_like] = useState<number>(0);
  let [modal, set_modal] = useState<boolean>(false);
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
              <h4 onClick={()=> { modal == true ? set_modal(false) : set_modal(true) }}>{ title[i] }<span onClick={ ()=>{set_like(like + 1)} }>👍</span> { like }</h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }
      {
          modal == true ? <Modal></Modal> : null
      }
    </div>
  );
}

function Modal(){
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
