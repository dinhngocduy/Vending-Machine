import React, { useEffect , useState } from 'react';
import { IconDeleteDisabled, IconWifiOff } from 'libraries/icons/icon';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 5%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  background-color: #e5dddd;
  z-index: 999;
  padding:12px;
  border-radius:4px;
  -webkit-border-radius:4px;
  -moz-border-radius:4px;
  -ms-border-radius:4px;
  -o-border-radius:4px;
`;

function LossNetworkModalScreen() {
  // state
  const [isDisplayed , setIsDisplayed] = useState<boolean>(false);


  useEffect(() =>{
    window.addEventListener('offline', function(e) {
      setIsDisplayed(true)
    });

    return () =>{
      window.removeEventListener('offline', function(e) {
        setIsDisplayed(true)
      });
    }
  })

  useEffect(() =>{
    window.addEventListener('online', function(e) {
      setIsDisplayed(false)
    });

    return () =>{
      window.removeEventListener('online', function(e) {
        setIsDisplayed(false)
      });
    }
  })

  if(isDisplayed){
    return (
      <Wrapper className="flex-center">
        <IconWifiOff></IconWifiOff>
        <span className="ml-3 mr-2">Không có kết nối internet</span>
        <a href="/">Làm mới trang</a>
        <span onClick={ () => { setIsDisplayed(false) } } className="cursor-pointer ml-2 flex-center">
          <IconDeleteDisabled></IconDeleteDisabled>
        </span>
      </Wrapper>
    );
  }

  return (
    <></>
  );
}

export default LossNetworkModalScreen;



