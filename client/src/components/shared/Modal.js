import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
// import { useSelector } from "react-redux";

const ModalPopup = (props) => {
    const history = useHistory();
    const {className} = props;
    const { isModalVisible } = props;
    const [modal, setModal] = useState(isModalVisible.status);

    const toggle = () => {
        setModal(!modal);
        history.push('/user-profile-view')
    };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalBody>
          <h5 className="text-center mt-4 pt-3 pb-4">{isModalVisible.message}</h5>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Ok</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalPopup;