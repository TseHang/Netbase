import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

type Props = {
  page: string;
};

const CardSecondHeader: React.FC<Props> = ({ page }) => {
  return (
    <Wrapper>
      <Link href="/" passHref>
        <StyledLink isActive={page === undefined}>ALL</StyledLink>
      </Link>
      <Link href="/?page=twitter" passHref>
        <StyledLink isActive={page === 'twitter'}>T</StyledLink>
      </Link>
      <Link href="/?page=facebook" passHref>
        <StyledLink isActive={page === 'facebook'}>F</StyledLink>
      </Link>
      <Link href="/?page=instagram" passHref>
        <StyledLink isActive={page === 'instagram'}>I</StyledLink>
      </Link>
      <Link href="/?page=youtube" passHref>
        <StyledLink isActive={page === 'youtube'}>Y</StyledLink>
      </Link>
      <HideButton>HIDE</HideButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.contentBackground};
  font-weight: bold;
  color: white;
  padding: 0 1rem;
`;

const StyledLink = styled.a<{ isActive: boolean }>`
  cursor: pointer;
  text-decoration: none;
  margin: 0 0.5rem;
  padding: .25rem;
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
`;

export default CardSecondHeader;
