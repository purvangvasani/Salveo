import React, { useEffect, useState } from 'react'
import Timeline from '../../timeline/Timeline'
import { useLocation, useNavigate } from 'react-router-dom';
import { CButton, CCard, CCardBody, CCardHeader, CCardText, CCardTitle, CCol, CRow } from '@coreui/react';
import { cilPencil, cilTrash } from '@coreui/icons';
import CIcon from '@coreui/icons-react';

const View = () => {
    const [userRecord, setUserRecord] = useState([]);
    const idx = useLocation().state;
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const staticData = await import('../../../../data/backend-data.json').then((res) => res.default);
            const record = staticData.users.find((x) => x.aadhaar === idx);

            setUserRecord(record);
        }
        fetchData();
    }, []);

    return (
        <>
            <CCard>
                <CCardHeader>
                    <b>Patient <small>Details</small></b>
                    <span className='float-end'>
                        <CButton color="warning">
                          <CIcon icon={cilPencil} />
                        </CButton>&nbsp;
                        <CButton color="danger">
                          <CIcon icon={cilTrash} />
                        </CButton>
                    </span>
                </CCardHeader>
                <CCardBody>
                    {/* <CCardTitle>Patient Details</CCardTitle> */}
                    <CCardText>
                        <CRow>
                            <CCol xs={4}><b>First Name</b>: {userRecord.firstname}</CCol>
                            <CCol xs={4}><b>Last Name</b>: {userRecord.lastname}</CCol>
                            <CCol xs={4}><b>Aadhaar No</b>: {userRecord.aadhaar}</CCol>
                        </CRow>
                        <br />
                        <CRow>
                            <CCol xs={4}><b>Birthdate</b>: {userRecord.bday}</CCol>
                            <CCol xs={4}><b>Age</b>: {userRecord.age}</CCol>
                            <CCol xs={4}><b>Sex</b>: {userRecord.sex}</CCol>
                        </CRow>
                        <br />
                        <CRow>
                            <CCol xs={4}><b>Email</b>: {userRecord.email}</CCol>
                            <CCol xs={4}><b>Address 1</b>: {userRecord.address1}</CCol>
                            <CCol xs={4}><b>Address 2</b>: {userRecord.address2}</CCol>
                        </CRow>
                        <br />
                        <CRow>
                            <CCol xs={4}><b>City</b>: {userRecord.city}</CCol>
                            <CCol xs={4}><b>State</b>: {userRecord.state}</CCol>
                            <CCol xs={4}><b>Zip</b>: {userRecord.zip}</CCol>
                        </CRow>
                    </CCardText>
                </CCardBody>
            </CCard>
            <br />
            <CCardTitle>Medical Records:</CCardTitle>
            <Timeline medicalRecord={userRecord.medicalRecords} />
        </>
    )
}

export default View
