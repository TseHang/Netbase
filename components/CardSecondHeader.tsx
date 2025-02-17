import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineTwitter } from 'react-icons/ai';
import { ImFacebook, ImYoutube2 } from 'react-icons/im';
import { SiInstagram } from 'react-icons/si';
import styled from 'styled-components';

type Props = {
  page: string;
};

const CardSecondHeader: React.FC<Props> = ({ page }) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <Wrapper isHidden={isHidden}>
      <Link href="/">
        <StyledLink isActive={page === undefined}>ALL</StyledLink>
      </Link>
      <Link href="/?page=twitter" passHref>
        <StyledLink isActive={page === 'twitter'}>
          <AiOutlineTwitter />
        </StyledLink>
      </Link>
      <Link href="/?page=facebook" passHref>
        <StyledLink isActive={page === 'facebook'}>
          <ImFacebook />
        </StyledLink>
      </Link>
      <Link href="/?page=instagram" passHref>
        <StyledLink isActive={page === 'instagram'}>
          <SiInstagram />
        </StyledLink>
      </Link>
      <Link href="/?page=youtube" passHref>
        <StyledLink isActive={page === 'youtube'}>
          <ImYoutube2 size="1.25rem" />
        </StyledLink>
      </Link>
      <HideButton onClick={() => setIsHidden(true)}>HIDE</HideButton>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isHidden: boolean }>`
  position: relative;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.contentBackground};
  font-weight: bold;
  color: white;
  padding: 0 1rem;
  max-height: ${p => (p.isHidden ? '0px' : '28px')};
  overflow: hidden;
  transition: max-height 0.25s linear;
`;

const StyledLink = styled.a<{ isActive: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin: 0 0.5rem;
  padding: 0.25rem;
  height: 100%;
  color: ${p => (p.isActive ? p.theme.colors.contentBackground : 'white')};
  background-color: ${p =>
    p.isActive ? 'white' : p.theme.colors.contentBackground};
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;

const HideButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 1rem;
  border-left: solid 0.5px rgba(255, 255, 255, 0.2);
  color: white;
  height: 100%;
  font-weight: bold;
`;

export default CardSecondHeader;
