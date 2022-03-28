import CardList from './components/CardList';
import styled from 'styled-components';

function App() {
  return (
    <AppWrapper>
      <h1>📚 Hello Capstone Project</h1>
      <CardList />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
