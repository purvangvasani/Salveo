import React, { useState } from 'react';
import {
  CButton,
  CFormInput,
  CInputGroup,
  CRow, CCol,
  CForm,
  CFormFeedback
} from '@coreui/react';
import Typewriter from "typewriter-effect";
import CIcon from '@coreui/icons-react';
import { cilSearch } from '@coreui/icons';
import { useNavigate } from 'react-router-dom';


const Home = () => {

  const [validated, setValidated] = useState(false)
  const [searchedItem, setSearchedItem] = useState('')

  const navigate = useNavigate();

  const handleSearchedChange = (event) => {
    setSearchedItem(event.target.value);
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget
    event.preventDefault()
    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      navigate('/search', { state: searchedItem })
    }
    setValidated(true)
  }

  return (
    <>
      <CRow>
        <CCol xs={12} className="text-center">
          <span className="display-3">Welcome to <span style={{ color: '#6b7785' }}>Salveo</span>, </span><br />
          <span className="display-4">
            <em>
              <Typewriter
                options={{
                  strings: ['Hospital Account!', 'Chemist Account!', 'User Account!'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </em>
          </span>
        </CCol>
        <CRow>
          <CCol xs={12} className='gy-4'>
            <CForm
              className="row g-3 needs-validation"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <CCol md={12} className="position-relative">
                <CInputGroup className="mb-3">
                  <CFormInput type="text" id="search-record-vlnd" onChange={handleSearchedChange}
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
      </CRow>
    </>
  )
}

export default Home
