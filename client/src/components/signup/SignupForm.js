import React, {useCallback, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from 'reactstrap';
import InputField from '../shared/InputField';
import ModalPopup from '../shared/Modal';

const SignupForm = ({title, initialData, actionButtonLabel, actionHandler}) => {
    const [formData, setFormData] = useState(initialData);
    const dispatch = useDispatch();
    const { isModalVisible } = useSelector(state => state);
    
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(actionHandler(formData));
      setFormData(initialData);
    }
    
    const handleInputChange = useCallback((event) => {
      event.persist();
      setFormData(formData => ({...formData, [event.target.name]: event.target.value}));
    }, []);
    
    return (
            <Row className="mt-4">
              <Col sm="5 cover-photo"></Col>
              <Col sm="7 right">
                <h1 className="display-5">{title}</h1>
                <form noValidate onSubmit={handleSubmit}>
                  <InputField
                    placeholder="First Name"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleInputChange}
                    // error={errors.name}
                  />
                  <InputField
                    placeholder="Last Name"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleInputChange}
                    // error={errors.name}
                  />
                  <InputField
                    placeholder="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    // error={errors.email}
                  />
                  <InputField
                    placeholder="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    // error={errors.name}
                  />
                  <button type="submit" className="btn btn-info btn-block mt-4">{actionButtonLabel}</button>
                </form>
                {isModalVisible.status ? <ModalPopup isModalVisible={isModalVisible} /> : null}
                </Col>
            </Row>
      );
}

export default SignupForm;