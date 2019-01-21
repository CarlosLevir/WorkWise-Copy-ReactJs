import styled from 'styled-components';

const RightMenu = styled.div`
display: flex;
align-items: center;
height: 56px;

@media (max-width: 900px) {
  display: none;
}
`;

const MenuMobile = styled.div`
display: flex;
@media (min-width: 900px) {
  display: none;
}
`;

const Searcher = styled.div`
width: 280px;
height: 38px;
display: flex;
margin-left: 10px;

@media (max-width: 900px) {
  display: none;
}
`;

export { RightMenu, MenuMobile, Searcher };
