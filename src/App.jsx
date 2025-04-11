import React, { useState } from 'react';
import './App.css';
import Card from './componenets/Card';
import CardData from './data/CardData';
import { useNavigate } from 'react-router-dom';
import Filter from './componenets/Filter';
import InfoPage from './componenets/InfoPage';

function App() {
  const navigate = useNavigate();
  const [filteredData, setFilteredData] = useState(CardData);

  const handlePageChange = (id) => {
    localStorage.setItem('clickedCardId', id);
    console.log('Card clicked with ID:', id);
    navigate(`/PageInfo3/${id}`);
  };

  const handleFilter = (filteredItems) => {
    const filteredCards = CardData.filter((card) =>
      filteredItems.includes(card.title.toLowerCase())
    );
    setFilteredData(filteredCards);
  };

  return (
    <>
      {window.location.href === 'http://localhost:5173/' ? (
        <>
          <Filter
            items={CardData.map((card) => card.title.toLowerCase())}
            onFilter={handleFilter}
          />
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {filteredData.map((card) => (
              <Card
                onClickFunction={() => handlePageChange(card.id)}
                key={card.id}
                dataKey={card.id}
                title={card.title}
                src={card.src}
                desc={card.desc}
              />
            ))}
          </div>
        </>
      ) : (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          {(() => {
            const cardId = localStorage.getItem('clickedCardId');
            const card = CardData.find((c) => c.id === Number(cardId));
            if (card) {
              return (
                <>
                  <InfoPage card={card} />
                </>
              );
            } else {
              return (
                <>
                  <ReturnPage />
                </>
              );
            }
          })()}
        </div>
      )}
    </>
  );
}

export default App;
