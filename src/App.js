import styled from 'styled-components';

import CardList from './components/CardList';
import Form from './components/Form';

function App() {
  return (
    <AppWrapper>
      <h1>📚 Hello Capstone Project</h1>
      <CardList />
      <Form onCreateTerm={handleSubmitTerm} />
    </AppWrapper>
  );

  function handleSubmitTerm(word) {
    console.log(word);
  }
}

export default App;

const AppWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
