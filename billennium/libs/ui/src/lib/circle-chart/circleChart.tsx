import styled from "styled-components"

export interface CircleChartProps {
    data: [Object[], Object[]],
    size?: number
}

const PieChart = styled.div<CircleChartProps>`
    width: ${props => props.size + 'px'};
    height: ${props => props.size + 'px'};
    background: conic-gradient(
        #FF6C6C 0deg ${(props) => props.data[0].length * 100 / (props.data[0].length + props.data[1].length) / 100 * 360 + 'deg'},
        #8FD59A ${(props) => props.data[0].length * 100 / (props.data[0].length + props.data[1].length) / 100 * 360 + 'deg'} 360deg
    );
    border-radius: 50%;
    margin-right: 12px;
`;

export const CircleChart = ({
    data,
    size = 18
}: CircleChartProps) => {
    return <PieChart data={data} size={size}/>
}
