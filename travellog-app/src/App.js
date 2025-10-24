import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, {useState} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Addcard from './components/Addcard';


function App() {

  const [cards, cardState] = useState([
        {no:1, img:"https://placehold.co/300x200?text=jeju%20island", title:'제주도',  rating:4, text:'아름다운 자연 경관과 독특한 문화를 가진 한국의 대표적인 휴양지입니다.'},
        {no:2, img:"https://placehold.co/300x200?text=Hawaii", title:'하와이',  rating:5, text:'에메랄드 빛 바다와 화산지형이 어우러진 열대 천국으로, 독특한 플리네시안 문화와 여유로운 알로하 정신을 느낄 수 있는 곳 입니다.'},
        {no:3, img:"https://placehold.co/300x200?text=Barcelona", title:'바르셀로나',  rating:4, text:'가우디의 건축물과 지중해의 해변을 모두 즐길 수 있는 매력적인 도시입니다.'}
    ]);
  
  // 카드 추가 함수
  const addCard = (title, img, rating, text) =>{
    const newCard ={
      no: Date.now(),
      img: img,
      title: title,
      rating: rating,
      text: text
    }
    // newCard로 만들어서 새로 렌더링
    cardState([...cards, newCard]);
  }
  
  return (
    <div className="App">
      <Header />
      <Addcard onCard={addCard} />
      <main className="main-content">
        <h2><span>인기 여행지</span></h2>
        <div className='content-grid'>
          {cards.map(card => (
            <Main key={card.no} card={card} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
