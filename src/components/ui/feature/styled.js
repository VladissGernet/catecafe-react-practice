import styled from 'styled-components';

const StyledFeature = styled.div`
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$color};

  padding: 5px 10px;
  border-radius: 10px;
`;

export { StyledFeature };
