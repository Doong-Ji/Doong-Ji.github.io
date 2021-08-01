import React, { FC, useState } from 'react';
import { Modal, Button } from 'antd';
import { ModalStyle } from './styled';
import { ok } from 'assert';
type modalBoxProps = {
  openBtnName: string;
  modalType: string;
  modalClass: string;
  modalTitle: string;
  maskClosables: boolean;
  children: React.ReactNode;
};
const ModalBox = ({ openBtnName, modalTitle, modalType, children, modalClass, maskClosables }: modalBoxProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function showModal(type: string) {
    type == 'info' ? infoModal() : confirmModal();
  }
  function handleOk(action: string) {
    alert(action);
    setIsModalVisible(false);
  }

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  function infoModal() {
    Modal.info({
      centered: true,
      title: modalTitle,
      content: children,
      onOk: () => {
        handleOk('url');
      },
      okText: '확인',
      closable: false,
      maskClosable: maskClosables,
      className: modalClass,
      icon: false,
    });
  }
  function confirmModal() {
    Modal.confirm({
      centered: true,
      title: modalTitle,
      content: children,
      onOk: () => {
        handleOk('url');
      },
      okText: '확인',
      cancelText: '취소',
      closable: false,
      maskClosable: maskClosables,
      className: modalClass,
      icon: false,
    });
  }
  return (
    <ModalStyle>
      <Button className="open_modal_btn" type="primary" onClick={() => showModal(modalType)}>
        {openBtnName}
      </Button>

      {/*
      // 사용 예시
      ModalBox태그 속성에 모달 스타일 적용
      ex) 
      <ModalBox openBtnName="Modal" maskClosables={false} modalType="confirm">       
        <p>모달 태그 안에 원하시는 내용을 넣어주세요</p>
      </ModalBox> 
      openBtnName : 버튼의 이름
      modalType: confirm=확인,취소 버튼 info=확인버튼
      modalClass: 안넣어도 됨, btn_shadow를 넣으면 버튼안에 쉐도우스타일 
      maskClosables : 안넣어도됨(dafault:false), true로 넣으면 마스트클릭으로 모달 닫기
      modalTitle : 안넣어도됨(default='') 모달 제목
      */}

      {/* {modalType}
      <Modal
        centered
        className={modalClass}
        title={modalTitle}
        visible={isModalVisible}
        onOk={() => {
          handleOk('url');
        }}
        cancelText="취소"
        okText="확인"
        onCancel={handleCancel}
        closable={false}
        maskClosable={false}
      >
        {children}
      </Modal> */}
    </ModalStyle>
  );
};

ModalBox.defaultProps = {
  modalClass: '',
  modalTitle: '',
  maskClosables: false,
};

export default ModalBox;
