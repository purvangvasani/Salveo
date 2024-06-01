import React, { useEffect, useState } from 'react';
import {
  CButton,
  CFormInput,
  CInputGroup,
  CRow, CCol,
  CForm,
  CFormFeedback, CTable,
  CTableBody, CTableDataCell,
  CTableHead, CTableHeaderCell, CTableRow
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilSearch, cilUserPlus } from '@coreui/icons';
import { Link, useNavigate } from 'react-router-dom';


const Home = () => {

  const [validated, setValidated] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [resultList, setResultList] = useState([])
  const [searchedItem, setSearchedItem] = useState('')

  const handleSearchedChange = (event) => {
    setSearchedItem(event.target.value);
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget
    event.preventDefault()
    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      setShowResult(true)
      getData()
      // navigate('/search')
    }
    setValidated(true)
  }

  const navigate = useNavigate();

  const goTo = () => {
    navigate('/users/add');
  }

  const searchRecords = (records, query) => {
    const queryStr = query.toString().toLowerCase();

    return records.filter(record => {
      return Object.values(record).some(value =>
        value.toString().toLowerCase().includes(queryStr)
      );
    });
  }

  const getData = async () => {
    let staticData = await import('../../../data/backend-data.json').then((res) => res.default);
    staticData = searchRecords(staticData.users, searchedItem);
    console.log(staticData)
    setResultList(staticData)
  }

  return (
    <>
      <CRow>
        <CCol xs={12} className="text-center">
          <span className="display-3">Welcome to <span style={{ color: '#6b7785' }}>Salveo</span>, </span><br />
          <span className="display-4"><em>Purvang Vasani!</em></span>
        </CCol>
        {!showResult &&
          <CRow>
            <CCol xs={12} className='gy-4'>
              <CButton
                className="float-end"
                color="secondary"
                type="button"
                id="search-record-btn"
                onClick={goTo}>
                <CIcon icon={cilUserPlus} className="me-2" />
                Add Record
              </CButton>
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
        }
        {showResult && <CCol xs={12} className='gy-4'>
          <CTable hover>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">#</CTableHeaderCell>
                <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                <CTableHeaderCell scope="col">Aadhaar Number</CTableHeaderCell>
                <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                <CTableHeaderCell scope="col">City</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {resultList.length > 0 && resultList.map((data, index) =>
                <CTableRow key={index}>
                  <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                  <CTableDataCell>{data.firstname + " " + data.lastname}</CTableDataCell>
                  <CTableDataCell>{data.aadhaar}</CTableDataCell>
                  <CTableDataCell>{data.email}</CTableDataCell>
                  <CTableDataCell>{data.city}</CTableDataCell>
                </CTableRow>)
              }
              {resultList.length === 0 && 
              <CTableRow>
                <CTableDataCell className='text-center' colSpan={5}>Data not found!</CTableDataCell>
              </CTableRow>
              }
            </CTableBody>
          </CTable>
        </CCol>}
      </CRow>
    </>
  )
}

export default Home
