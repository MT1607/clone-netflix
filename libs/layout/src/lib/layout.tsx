import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface LayoutProps {}

const StyledLayout = styled.div`
  color: pink;
`;

export function Layout(props: LayoutProps) {
  return (
    <StyledLayout>
      <h1>Welcome to Layout!</h1>
    </StyledLayout>
  );
}

export default Layout;
