import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  padding-top: 30px;
`;

const Link = styled.a`
  margin: 0 8px 0 0;
`;

const Image = styled.img`
  height: 50px;
`;

const AppStoreBadge = () => {
  return (
    <MainContainer>
      <Link href="https://itunes.apple.com/ca/app/cheapreats/id1357420028?ls=1&mt=8">
        <Image src={'download_app_store.svg'} alt="app store" />
      </Link>
      <Link href="https://play.google.com/store/apps/details?id=com.cheapreats.customer">
        <Image src={'download_google_play.png'} alt="google play" />
      </Link>
    </MainContainer>
  );
};

export default AppStoreBadge;