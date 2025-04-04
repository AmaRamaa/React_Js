import './App.css'
import Container from './components/GirafStyleComponent.jsx'

function App() {
  const ProductsContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    gap: '15px',
  };
  return (
    <>
      <h1>This is Girafa Components Test</h1>
        <div style={ProductsContainer}>
          <Container />
          <Container />
          <Container />
          <Container />
          <Container />
        </div>
    </>
  )
};
export default App;