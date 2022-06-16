import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { ConfigPage } from '.';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigate,
  };
});

describe('The page of configuration', () => {
  it('should be render correctly', () => {
    const { container } = render(
      <RecoilRoot>
        <ConfigPage />
      </RecoilRoot>,
    );

    expect(container).toMatchSnapshot();
  });
});
