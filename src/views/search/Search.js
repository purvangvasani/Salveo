import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import CIcon from '@coreui/icons-react';
import { cilPencil, cilSettings, cilTrash, cilUserPlus } from '@coreui/icons';
import {
  CButton,
  CCol, CDropdown, CDropdownHeader,
  CDropdownItem, CDropdownMenu, CDropdownToggle,
  CRow, CTable, CTableBody, CTableDataCell,
  CTableHead, CTableHeaderCell, CTableRow
} from '@coreui/react';

const Search = () => {
  const [resultList, setResultList] = useState([])

  const searchedData = useLocation().state;

  const searchRecords = (records, query) => {
    const queryStr = query.toString().toLowerCase();

    const data = records.filter(record => {
      return Object.values(record).some(value =>
        value.toString().toLowerCase().includes(queryStr)
      );
    });
    setResultList(data);
  }

  const navigate = useNavigate();

  const goTo = () => {
    navigate('/users/add');
  }

  useEffect(() => {
    async function fetchData() {
      const staticData = await import('../../../data/backend-data.json').then((res) => res.default);
      searchRecords(staticData.users, searchedData);
    }
    fetchData();
  }, []);

  return (
    <>
      <CRow>
        <CCol xs={8} className='gy-4'>
          Showing results for <b style={{ color: '#6b7785' }}><em>{searchedData}</em></b> !
        </CCol>
        <CCol xs={4} className='gy-4'>
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
          <CTable hover>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">#</CTableHeaderCell>
                <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                <CTableHeaderCell scope="col">Aadhaar Number</CTableHeaderCell>
                <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                <CTableHeaderCell scope="col">City</CTableHeaderCell>
                <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
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
                  <CTableDataCell>
                    <CDropdown>
                      <CDropdownToggle placement="bottom-end" className="py-0 pe-0" caret={false}>
                        <CIcon icon={cilSettings} className="me-2" />
                      </CDropdownToggle>
                      <CDropdownMenu className="pt-0" placement="bottom-end">
                        <CDropdownHeader className="bg-body-secondary fw-semibold mb-2">Actions</CDropdownHeader>
                        <CDropdownItem href="/profile">
                          <CIcon icon={cilPencil} className="me-2" />
                          Edit
                        </CDropdownItem>
                        <CDropdownItem href="/settings">
                          <CIcon icon={cilTrash} className="me-2" />
                          Delete
                        </CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  </CTableDataCell>
                </CTableRow>)
              }
              {resultList.length === 0 &&
                <CTableRow>
                  <CTableDataCell className='text-center' colSpan={6}>Data not found!</CTableDataCell>
                </CTableRow>
              }
            </CTableBody>
          </CTable>
        </CCol>
      </CRow>
    </>
  )
}

export default Search
