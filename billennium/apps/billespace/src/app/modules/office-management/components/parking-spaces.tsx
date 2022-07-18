/* eslint-disable @typescript-eslint/no-empty-function */
import { Button, Detail, Range } from '@billennium/ui';
import { mdiClose } from '@mdi/js';
import Icon from '@mdi/react';
import styled from 'styled-components';

const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr 24px;
  padding-right: 10px;
  gap: 20px;
`;

const Wrapper = styled.div`
  margin-top: 128px;
`;

const Footer = styled.footer`
  text-align: right;
  ${Button} {
    margin: 5px;
  }
`;

export const ParkingSpaces = () => {
  return (
    <>
      <Item>
        <Range title="A" value={15} onChange={() => {}} />
        <Icon path={mdiClose} size={1.5} color="black" />
      </Item>

      <Item>
        <Range title="B" value={25} onChange={() => {}} />
        <Icon path={mdiClose} size={1.5} color="black" />
      </Item>

      <Wrapper>
        <Detail label="All Spaces" value="56" />
      </Wrapper>

      <Footer>
        <Button motive="outlinedGray" shape="rect">
          Back
        </Button>
        <Button motive="gray" shape="rect">
          Next
        </Button>
      </Footer>
    </>
  );
};
