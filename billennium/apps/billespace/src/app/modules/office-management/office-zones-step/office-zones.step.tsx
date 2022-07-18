import styled from 'styled-components';
import { Input } from 'libs/ui/src/Input/input';
import { Button } from 'libs/ui/src/button/button';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

const Container = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 272px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 25px;

  & > div {
    width: 272px;
  }
`;

const Footer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 6px;
  margin-top: 8%;
`;

export const OfficeZonesStep = () => {
  return (
    <Container>
      <FormContainer>
        <Row>
          <Input value="HRBP" placeholder="HRBP" onChange={() => {}} />
          <Icon path={mdiClose} size={1.5} color="black" />
        </Row>
        <Row>
          <Input value="HRBP" placeholder="HRBP" onChange={() => {}} />
          <Icon path={mdiClose} size={1.5} color="black" />
        </Row>
        <Row>
          <Input
            value="Type second zone name..."
            placeholder="SecondZoneName"
            onChange={() => {}}
          />
        </Row>
        <Footer>
          <Button motive="outlinedGray" shape="rect" onClick={() => {}}>
            Back
          </Button>
          <Button motive="gray" shape="rect" onClick={() => {}}>
            Next
          </Button>
        </Footer>
      </FormContainer>
    </Container>
  );
};
