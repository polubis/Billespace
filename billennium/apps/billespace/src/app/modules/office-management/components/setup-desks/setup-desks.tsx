import { useState } from 'react';
import styled from 'styled-components';
import { Range } from 'libs/ui/src/range/range';
import { Button } from 'libs/ui/src/button/button';
import { Detail } from 'libs/ui/src/detail/detail';
import { mdiClose } from '@mdi/js';
import Icon from '@mdi/react';

const Container = styled.div`
  max-width: 250px;
  margin: 0 auto;
`;

const RangeStyle = styled.div`
  display: inline-block;
  width: calc(100% - 60px);
`;

const IconClose = styled(Icon)`
  display: inline-block;
  margin-left: 24px;
  cursor: pointer;
`;

const Footer = styled.div`
  position: fixed;
  bottom: 88px;
  right: 24px;

  ${Button} {
    margin: 5px;
    font-weight: bold;
  }
`;

export const SetupDesk = () => {
  const [valueA, setValueA] = useState(10);
  const [valueB, setValueB] = useState(10);
  const [valueC, setValueC] = useState(10);
  const [valueD, setValueD] = useState(10);
  const [valueE, setValueE] = useState(10);

  return (
    <Container>
      <RangeStyle>
        <Range
          title="HRBP"
          value={valueA}
          onChange={(e) => setValueA(+e.target.value)}
        />
      </RangeStyle>
      <IconClose path={mdiClose} size={1.5} color="black" />

      <RangeStyle>
        <Range
          title="HRBP"
          value={valueB}
          onChange={(e) => setValueB(+e.target.value)}
        />
      </RangeStyle>
      <IconClose path={mdiClose} size={1.5} color="black" />

      <RangeStyle>
        <Range
          title="HRBP"
          value={valueC}
          onChange={(e) => setValueC(+e.target.value)}
        />
      </RangeStyle>
      <IconClose path={mdiClose} size={1.5} color="black" />

      <RangeStyle>
        <Range
          title="HRBP"
          value={valueD}
          onChange={(e) => setValueD(+e.target.value)}
        />
      </RangeStyle>
      <IconClose path={mdiClose} size={1.5} color="black" />

      <RangeStyle>
        <Range
          title="HRBP"
          value={valueE}
          onChange={(e) => setValueE(+e.target.value)}
        />
      </RangeStyle>
      <IconClose path={mdiClose} size={1.5} color="black" />

      <Detail label="All Spaces" value="20" />
      <Footer>
        <Button motive="outlinedGray" shape="rect">
          Back
        </Button>
        <Button motive="gray" shape="rect">
          Next
        </Button>
      </Footer>
    </Container>
  );
};
