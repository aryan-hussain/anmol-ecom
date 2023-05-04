import styled from 'styled-components';

const CommonButton = styled.button`
background-color: inherit;
border: 2px solid black;
border-radius: 7px;
padding: 8px 16px;
font-size: 16px;
cursor: pointer;

&:hover {
  background-color: #000000;
  color: white;
}
`;

const Button = ({children, onClick}) => {
  return (
    <CommonButton onClick={onClick}>
      {children}
    </CommonButton>
  )
}

export default Button;