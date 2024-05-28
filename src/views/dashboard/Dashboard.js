import React, { useState } from 'react';
import {
  CButton,
  CFormInput,
  CInputGroup,
  CRow, CCol,
  CForm,
  CFormFeedback
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilSearch, cilUserPlus } from '@coreui/icons';
import { Link, useNavigate } from 'react-router-dom';


const Dashboard = () => {

  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }

  const navigate = useNavigate();

  const goTo = () => {
    navigate('/users/add');
  }

  return (
    <>
      <CRow>
        <CCol xs={12} className="text-center">
          <span className="display-3">Welcome to <span style={{color: '#6b7785'}}>Salveo</span>, </span><br />
          <span className="display-4"><em>Purvang Vasani!</em></span>
        </CCol>
        <CCol xs={12} className='gy-4'>
          {/* <Link to="/users/add"> */}
            <CButton
              className="float-end"
              color="secondary"
              type="button"
              id="search-record-btn"
              onClick={goTo}>
              <CIcon icon={cilUserPlus} className="me-2" />
              Add Record
            </CButton>
          {/* </Link> */}
        </CCol>
        <CCol xs={12} className='gy-4'>
          <CForm
            className="row g-3 needs-validation"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <CCol md={12} className="position-relative">
              <CInputGroup className="mb-3">
                <CFormInput type="text" id="search-record-vlnd" 
                  placeholder="Search Patient's Name, Aadhaar Number, SSN..." required />
                <CFormFeedback tooltip invalid>
                  Please provide a Patient's Name, Aadhaar Number, SSN ...
                </CFormFeedback>
                <CButton
                  color="secondary"
                  type="submit"
                  id="search-record-btn">
                  <CIcon icon={cilSearch} />
                </CButton>
              </CInputGroup>
            </CCol>
          </CForm>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
