import styled from 'styled-components';

export default function ImageCard({ tradition, photo }) {
  return (
    <>
      <CardWrapper>
        <CardPhoto src={photo}></CardPhoto>
        <CardTradition>{tradition}</CardTradition>
      </CardWrapper>
    </>
  );
}

const CardWrapper = styled.li`
  background-color: hsl(220, 15%, 35%);
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  width: 300px;
  gap: 10px;
  padding: 20px;
  border-radius: 14px;
  margin-top: 50px;
  border-top: 16px solid #d70761;
  position: relative;
`;

const CardPhoto = styled.img`
  border-radius: 12px;
`;

const CardTradition = styled.p`
  color: white;
  margin-left: 0;
  font-style: italic;
  padding: 4px;
  list-style: none;
`;
