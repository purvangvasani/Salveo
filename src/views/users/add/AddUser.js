import { CButton, CCard, CCardBody, CCardFooter, CCardHeader, CCol, CForm, CFormCheck, CFormInput, CFormLabel, CFormSelect, CRow } from '@coreui/react';
import React from 'react';

const AddUser = () => {

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>User</strong> <small>Form</small>
            </CCardHeader>
            <CCardBody>
              {/* <p className="text-body-secondary small">
                Cards are built with as little markup and styles as possible but still manage to
                deliver a bunch of control and customization. Built with flexbox, they offer easy
                alignment and mix well with other CoreUI components. Cards have no top, left, and
                right margins by default, so use{' '}
                <a href="https://coreui.io/docs/utilities/spacing">spacing utilities</a> as needed.
                They have no fixed width to start, so they&#39;ll fill the full width of its parent.
              </p>
              <p className="text-body-secondary small">
                Below is an example of a basic card with mixed content and a fixed width. Cards have
                no fixed width to start, so they&#39;ll naturally fill the full width of its parent
                element.
              </p>
              DUMMY */}
              <CForm className="row g-3">
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
                Submit
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default AddUser
