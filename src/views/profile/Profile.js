import React, { useState } from 'react'
import {
  CButton, CCard,
  CCardBody, CCardFooter,
  CCardHeader, CCol,
  CForm, CFormInput,
  CFormLabel, CFormSelect, CRow
} from '@coreui/react'

const states = [
  { key: 1, value: "Andaman & Nicobar" },
  { key: 2, value: "Andhra Pradesh" },
  { key: 3, value: "Arunchal Pradesh" },
  { key: 4, value: "Assam" },
  { key: 5, value: "Bihar" },
  { key: 6, value: "Chhattisgarh" },
  { key: 7, value: "Chandigarh" },
  { key: 8, value: "Dadra & Nagar Haveli" },
  { key: 9, value: "Daman & Diu" },
  { key: 10, value: "Delhi" },
  { key: 11, value: "Goa" },
  { key: 12, value: "Gujarat" },
  { key: 13, value: "Haryana" },
  { key: 14, value: "Himachal Pradesh" },
  { key: 15, value: "Ladakh" },
  { key: 16, value: "Lakshadweep" },
  { key: 17, value: "Jammu & Kashmir" },
  { key: 18, value: "Jharkhand" },
  { key: 19, value: "Karnataka" },
  { key: 20, value: "Kerala" },
  { key: 21, value: "Madhya Pradesh" },
  { key: 22, value: "Maharashtra" },
  { key: 23, value: "Manipur" },
  { key: 24, value: "Meghalaya" },
  { key: 25, value: "Mizoram" },
  { key: 26, value: "Nagaland" },
  { key: 27, value: "Odisha" },
  { key: 28, value: "Puducherry" },
  { key: 29, value: "Punjab" },
  { key: 30, value: "Rajasthan" },
  { key: 31, value: "Sikkim" },
  { key: 32, value: "Tamil Nadu" },
  { key: 33, value: "Telangana" },
  { key: 34, value: "Tripura" },
  { key: 35, value: "Uttar Pradesh" },
  { key: 36, value: "Uttarakhand" },
  { key: 37, value: "West Bengal" },
]

const profileData = {
  "firstname": "Purvang",
  "lastname": "Vasani",
  "aadhaar": 100110011001,
  "email": "er.purvangvasani@gmail.com",
  "password": "Qwerty@123",
  "address1": "1-Jyotinagar, Kalawad Road",
  "address2": "B/H Crystal Mall",
  "city": "Rajkot",
  "state": "Gujarat",
  "zip": 360005
};

const Profile = () => {
  const [selectedState, setSelectedState] = useState(states[0].value);

  const StateChangeHandler = (event) => {
    setSelectedState(event.target.value)
  }

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
                <CCol xs={4}>
                  <CFormLabel htmlFor="inputFirstName">First Name</CFormLabel>
                  <CFormInput id="inputFirstName" value={profileData.firstname} placeholder="First Name" />
                </CCol>
                <CCol xs={4}>
                  <CFormLabel htmlFor="inputLastName">Last Name</CFormLabel>
                  <CFormInput id="inputLastName" value={profileData.lastname} placeholder="Last Name" />
                </CCol>
                <CCol xs={4}>
                  <CFormLabel htmlFor="inputAadhaar">Aadhaar Number</CFormLabel>
                  <CFormInput id="inputAadhaar" value={profileData.aadhaar} placeholder="Eg: 6254 6524 6524" />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="inputEmail4">Email</CFormLabel>
                  <CFormInput type="email" value={profileData.email} id="inputEmail4" />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="inputPassword4">Password</CFormLabel>
                  <CFormInput type="password" value={profileData.password} id="inputPassword4" />
                </CCol>
                <CCol xs={6}>
                  <CFormLabel htmlFor="inputAddress">Address</CFormLabel>
                  <CFormInput id="inputAddress" value={profileData.address1} placeholder="1234 Main St" />
                </CCol>
                <CCol xs={6}>
                  <CFormLabel htmlFor="inputAddress2">Address 2</CFormLabel>
                  <CFormInput id="inputAddress2" value={profileData.address2} placeholder="Apartment, studio, or floor" />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="inputCity">City</CFormLabel>
                  <CFormInput id="inputCity" value={profileData.city} />
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="inputState">State</CFormLabel>
                  <CFormSelect id="inputState" value={profileData.state} onChange={StateChangeHandler}>
                    {states.map((item) => <option key={item.key} value={item.value}>{item.value}</option>)}
                  </CFormSelect>
                </CCol>
                <CCol md={2}>
                  <CFormLabel htmlFor="inputZip">Zip</CFormLabel>
                  <CFormInput id="inputZip" value={profileData.zip} />
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
