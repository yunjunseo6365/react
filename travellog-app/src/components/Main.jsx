import React, {useState} from "react";
import Card from "./Card";

function Main() {

    const [cards, cardState] = useState([
        {no:1, img:"https://placehold.co/600x400?text=jeju%20island", title:'제주도', etitle:'jeju island', rating:4, text:'아름다운 자연 경관과 독특한 문화를 가진 한국의 대표적인 휴양지입니다.'},
        {no:2, img:"https://placehold.co/600x400?text=Hawaii", title:'하와이', etitle:'Hawaii', rating:5, text:'에메랄드 빛 바다와 화산지형이 어우러진 열대 천국으로, 독특한 플리네시안 문화와 여유로운 알로하 정신을 느낄 수 있는 곳 입니다.'},
        {no:3, img:"https://placehold.co/600x400?text=Barcelona", title:'바르셀로나', etitle:'Barcelona', rating:4, text:'가우디의 건축물과 지중해의 해변을 모두 즐길 수 있는 매력적인 도시입니다.'}
    ]);

    return (
        <main className="main-content">
          <h2>인기 여행지</h2><br />
          <div className="content-card">
            {cards.map(card =>(
                <Card card={card} />
            ))}
          </div>
        </main>
    );
}

export default Main;