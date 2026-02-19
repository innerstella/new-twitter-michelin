import { styled } from 'styled-components';

const Coffee = () => {
  return (
    <Container>
      <a href="https://www.buymeacoffee.com/innerstella">
        <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=innerstella&button_colour=FFDD00&font_colour=000000&font_family=Arial&outline_colour=000000&coffee_colour=ffffff" />
      </a>
    </Container>
  );
};

export default Coffee;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 150px;
  }
`;
