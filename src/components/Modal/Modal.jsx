import styled from "styled-components";

const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;

  return (
    <Container>
      <ModalContainer>
        <ButtonModalClose onClick={closeModal}>
          {/*<IconX />*/}
        </ButtonModalClose>
        <div>
          <ModalContent>
            <ContentInner>{children}</ContentInner>
          </ModalContent>
        </div>
        <Screen onClick={closeModal} />
      </ModalContainer>
    </Container>
  );
};


const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: scroll;
`;
const Screen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  cursor: zoom-out;
`;

const ModalContent = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  min-height: 100%;
`;

const ContentInner = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  border-radius: 9px;
  background-color: #fff;
`;

const ButtonModalClose = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 12px;
  color: #fff;
  cursor: pointer;
  z-index: 100;
`;


export default Modal