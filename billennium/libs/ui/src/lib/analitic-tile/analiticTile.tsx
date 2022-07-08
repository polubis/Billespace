import styled from "styled-components"
import { Title } from "../typography/typography";
import { CircleChart } from "../circle-chart/circleChart";

export interface AnaliticTileProps {
    title: string,
    data: [Object[], Object[]],
}

const Container = styled.div`
    padding: 15px 14px;
    display: flex;
    background: #F6F6F6;
    border-radius: 4px;
    width: fit-content;
    align-items: center;
    justify-content: center;
    margin: 4px;
`;

export const AnaliticTile = ({
    title,
    data
}: AnaliticTileProps) => {
    return (
        <Container>
            <CircleChart data={data}/>
            <Title>{title}</Title>
        </Container>
    )
}
