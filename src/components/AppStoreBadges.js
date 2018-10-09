import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
    padding-top: 30px;
`;


const AppStoreBadge = () => {
  return (
    <MainContainer>
      <a href="https://itunes.apple.com/ca/app/cheapreats/id1357420028?ls=1&mt=8">
        <img height={50} src={require('../resources/download_app_store.svg')} alt="app store" />
      </a>&nbsp;&nbsp;
      <a href="https://play.google.com/store/apps/details?id=com.cheapreats.customer">
        <img height={50} src={require('../resources/download_google_play.png')} alt="google play" />
      </a>
    </MainContainer>
  );
};

export default AppStoreBadge;