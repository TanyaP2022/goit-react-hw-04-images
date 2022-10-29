import styled from '@emotion/styled';

export const ModalStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    align-items: center;
    z-index: 1200;
    background-color: rgba(189, 195, 199, 0.5);
.modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 90%;
    border-radius: 5px;
    padding: 10px 10px 10px;
    background-color: #fff;

}
.modalImg {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 5px;
}

`