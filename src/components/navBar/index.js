import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CSSTransitionGroup } from 'react-transition-group';
import { AiOutlineMenu } from 'react-icons/ai';
import theme from '~/src/theme'; // Assuming correct import path
import NavModal from './NavModal';
//import useStore from '../../context/mainStore';
import CONFIG from '../../configs';

const { navTitle } = CONFIG;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: ${(props) => props.windowWidth}px; /* Adjust width based on window width */
  height: 50px;
  z-index: 1;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 1px;
  border-left-width: 0px;
  border-right-width: 0px;
  color: ${(props) => props.theme.colors.light};
  border-image-source: ${(props) =>
    `linear-gradient(to left, transparent, ${props.theme.colors.primary}, transparent)`};
`;

const NavTitle = styled.div`
  flex-grow: 1;
  text-align: center;
  padding-left: 65px; /* Add 1 pixel padding to the left */
`;

const MenuButton = styled.button`
  display: flex;
  align-items: center;
  height: 100%;
  width: 60px;
  border: 1px none;
  justify-content: center;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryLight};
  }
`;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <CSSTransitionGroup
      transitionName='example'
      transitionAppearTimeout={500}
      transitionAppear={true}
      transitionEnter={true}
      transitionLeave={true}
    >
      <NavModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} />
      <MainContainer windowWidth={windowWidth} theme={theme}>
        <NavTitle>{navTitle}</NavTitle>
        <MenuButton onClick={() => setIsOpen(true)}>
          <AiOutlineMenu color={theme.colors.primary} size={30} />
        </MenuButton>
      </MainContainer>
    </CSSTransitionGroup>
  );
};

export default NavBar;
