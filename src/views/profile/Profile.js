import React from 'react'
import { 
  CButton, CCard, 
  CCardBody, CCardFooter, 
  CCardHeader, CCol, 
  CForm, CFormInput, 
  CFormLabel, CFormSelect, CRow } from '@coreui/react'

const Profile = () => {
  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Profile</strong> <small>(Purvang Vasani)</small>
            </CCardHeader>
            <CCardBody>
              <CForm className="row g-3">
                <CCol xs={6}>
                  <CFormLabel htmlFor="inputFirstName">First Name</CFormLabel>
                  <CFormInput id="inputFirstName" placeholder="First Name" />
                </CCol>
                <CCol xs={6}>
                  <CFormLabel htmlFor="inputLastName">Last Name</CFormLabel>
                  <CFormInput id="inputLastName" placeholder="Last Name" />
                </CCol>
                <CCol xs={12}>
                  <CFormLabel htmlFor="inputAadhaar">Aadhaar Number</CFormLabel>
                  <CFormInput id="inputAadhaar" placeholder="Eg: 6254 6524 6524" />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="inputEmail4">Email</CFormLabel>
                  <CFormInput type="email" id="inputEmail4" />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="inputPassword4">Password</CFormLabel>
                  <CFormInput type="password" id="inputPassword4" />
                </CCol>
                <CCol xs={12}>
                  <CFormLabel htmlFor="inputAddress">Address</CFormLabel>
                  <CFormInput id="inputAddress" placeholder="1234 Main St" />
                </CCol>
                <CCol xs={12}>
                  <CFormLabel htmlFor="inputAddress2">Address 2</CFormLabel>
                  <CFormInput id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="inputCity">City</CFormLabel>
                  <CFormInput id="inputCity" />
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="inputState">State</CFormLabel>
                  <CFormSelect id="inputState">
                    <option>Choose...</option>
                    <option>...</option>
                  </CFormSelect>
                </CCol>
                <CCol md={2}>
                  <CFormLabel htmlFor="inputZip">Zip</CFormLabel>
                  <CFormInput id="inputZip" />
                </CCol>
              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton className="float-end" color="primary" type="submit">
                Save
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Profile
