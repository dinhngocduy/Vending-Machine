import React from 'react';
import LoadingSpinnerScreen from 'libraries/components/loading-spinner/loading-spinner.screen';
import styled from 'styled-components';

const BlurLoading = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 9999;
`

const Wrapper = styled.div`
    width: 240px;
    height: 120px;
    border-radius: 8px;
    background-color: var(--color-main3);
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    -ms-border-radius: 8px;
    -o-border-radius: 8px;
`

const BlurLoadingScreen = () => {

    return (
        <BlurLoading className={"flex-center"}>
            <Wrapper className={"flex-center flex-column"}>
                <LoadingSpinnerScreen className="big mb-1"></LoadingSpinnerScreen>
                <p>Đang tải...</p>
            </Wrapper>
        </BlurLoading>
    );
}

export default BlurLoadingScreen;

