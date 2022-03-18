import styled from "styled-components";

import CustomButton from "../custom-button/custom-button.component";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #000;
  background-color: #fff;
  top: 80px;
  right: 0;
  z-index: 5;
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
`;

export const EmptyMessageContainer = styled.span`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
`;

export const CartDropdownButton = styled(CustomButton)`
margin-top: auto;
`