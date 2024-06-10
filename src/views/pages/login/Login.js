import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormSelect,
  CImage,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilDevices, cilLockLocked, cilUser } from '@coreui/icons'

import { UserContext } from '../../../App';

const userType = [
  { key: "hospital", value: "Hospital" },
  { key: "laboratory", value: "Laboratory" },
  { key: "user", value: "User" }
];

const userPass = [
  { type: 'hospital', userName: 'sterlinghospital@salveo.com', name: 'Sterling Hospital', password: 'Sterling@123' },
  { type: 'laboratory', userName: 'vaibhavlabs@salveo.com', name: 'Vaibhav Labs', password: 'Vaibhavlabs@123' },
  { type: 'user', userName: 'purvangvasani@salveo.com', name: 'Purvang Vasani', password: 'Pvasani@123' }
]

import logo from '../../../assets/salveo/salveo-blue-bg.png';

const Login = () => {
  const [userTypeValue, setUserTypeValue] = useState(userType[0].key);
  const [userName, setUserName] = useState(userPass[0].userName);
  const [password, setPassword] = useState(userPass[0].password);

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (Object.keys(user).length) {
      goTo();
    }
  }, []);
  const navigate = useNavigate();

  const goTo = () => {
    navigate('/home')
  }

  const onUserTypeChange = (event) => {
    setUserTypeValue(event.target.value);
    const data = userPass.find((e) => e.type === event.target.value);
    setUserName(data.userName);
    setPassword(data.password);
  }

  const onFormSubmit = () => {
    event.preventDefault();
    const data = userPass.find((e) => e.type === userTypeValue);
    setUser(data);
    localStorage.setItem('user', JSON.stringify(data));
    navigate('/home')
  }

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4" >
                <CCardBody>
                  <CForm onSubmit={onFormSubmit}>
                    <h1>Login</h1>
                    <p className="text-body-secondary">Sign In to your account</p>
                    <CInputGroup className='mb-3'>
                      <CInputGroupText>
                        <CIcon icon={cilDevices} />
                      </CInputGroupText>
                      <CFormSelect onChange={onUserTypeChange}>
                        {userType && userType.map((type, index) =>
                          <option key={index} value={type.key}>{type.value}</option>
                        )}
                      </CFormSelect>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Username" value={userName} onChange={(e) => setUserName(e.target.value)} />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        value={password} onChange={(e) => setPassword(e.target.value)}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" type='submit' className="px-4">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white py-5" style={{'background-color': '#38B6FF'}}>
                <CCardBody className="text-center">
                  <div>
                    <CImage
                      src={logo}
                      width={300}
                      className="d-inline-block align-top login-logo"
                      alt="Salveo"
                    />
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
