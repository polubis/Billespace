import { render, screen } from '@testing-library/react';

import { AnaliticTile } from './analiticTile';

describe('<Avatar>', () => {
    it('displays analitic tile title', () => {
        render(<AnaliticTile title='HRBP' data={[[],[]]}/>);
        screen.getByText('HRBP');
    });
});
