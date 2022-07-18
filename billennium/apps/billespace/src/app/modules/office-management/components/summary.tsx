import { Button, Detail, Details } from '@billennium/ui';
import styled from 'styled-components';

const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 14px;
  margin-left: auto;
`;

const DetailContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 19px;
    width: 100%;
    margin-right: 10px;
  }
`;

export const Summary = () => {
  return (
    <Details>
      <Detail
        label="Country"
        value={(Value) => (
          <DetailContainer>
            <img
              src="https://img.freepik.com/darmowe-wektory/flaga-usa-lub-tlo-stany-zjednoczone-ameryki_53500-169.jpg?w=2000"
              alt="Flag"
            />
            <Value>USA</Value>
          </DetailContainer>
        )}
      />

      <Detail label="City" value="Olsztyn" />

      <Detail label="Address" value="Dąbrowszczaków 21/300" />

      <Detail label="Zones" value="HRBP, Open space 1, Open space 2" />

      <Detail label="Parking Spaces" value="1230" />

      <Detail label="Desks" value="1230" />

      <Footer>
        <Button motive="outlinedGray" shape="rect">
          Back
        </Button>
        <Button motive="orange" shape="rect">
          Create
        </Button>
      </Footer>
    </Details>
  );
};
