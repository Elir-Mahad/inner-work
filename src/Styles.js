import styled from "styled-components";

// BasketHeart

export const BasketAndCountBox = styled.div`
  //
`;

export const BasketAndCount = styled.div`
  display: flex;
  background-color: black;
  color: white;
`;

export const BasketIcon = styled.div`
  display: flex;
  border: 1px solid white;
  border-radius: 3px;
  justify-content: center;
  padding: 0.4rem;
`;

export const ItemCount = styled.p`
  font-size: 1rem;
  text-align: center;
  position: relative;
  top: 20px;
  left: 35px;
`;

// Menu

export const MenuBox = styled.div`
  //
`;

export const MenuIconContainer = styled.button`
  display: flex;
  background-color: black;
  color: white;
  border: 1px solid white;
  border-radius: 3px;
  justify-content: center;
  padding: 0.4rem;
`;

export const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: white;
  height: 27rem;
  width: 12rem;
  position: absolute;
  top: 55px;
  left: 1px;
`;

export const ItemAndIcon = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  align-items: center;
`;

export const MenuItem = styled.a`
  text-decoration: none;
  color: black;
  font-size: 1.1rem;
`;

export const MenuItemIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  background-color: white;
`;
