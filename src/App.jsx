import './App.css'
import Card from './componenets/Card'
import CardData from './data/CardData'
import { useNavigate } from 'react-router-dom';
import Title from './componenets/Title';
import Image from './componenets/Image';
import Description3 from './componenets/Description3';
import DeleteButton from './componenets/DeleteButton';


function App() {

  const navigate = useNavigate();


  const handlePageChange = (id) => {
    localStorage.setItem('clickedCardId', id);
    console.log("Card clicked with ID:", id);
    navigate(`/PageInfo3/${id}`);
  };
  return (
    <>
      {window.location.href === 'http://localhost:5173/' ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {CardData.map((card) => (
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
      ) : (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          {(() => {
            const cardId = localStorage.getItem('clickedCardId');
            const card = CardData.find((c) => c.id === Number(cardId));
            if (card) {
              return (
                <>
                  <Title text={card.title} />
                  <Image src={card.src} />
                  <Description3 text={card.desc} />
                  <button onClick={() => navigate(-1)} style={{ marginTop: '20px' }}>
                    Back
                  </button>
                </>
              );
            } else {
              return (
                <div>
                  <p>Card not found</p>
                  <button onClick={() => navigate(-1)} style={{ marginTop: '20px' }}>
                    Back
                  </button>
                </div>
              );
            }
          })()}
        </div>
      )}
    </>
  );
}

export default App
