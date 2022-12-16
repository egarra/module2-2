import styled from 'styled-components';

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0 0 0 / 78%);
`

export const Modal = styled.div`
    position: absolute;
    width: 600px;
    height: 600px;
    top: 50%;
    left: 50%;
    padding: 40px;
    transform: translate(-50%, -50%) scale(1);
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.2), 0px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
`

export const ImageComp = styled.img`
    display: block;
    max-width: 100%;
`

