
import './components/css/header.css';
import './components/css/sidebar.css';
import './App.css';

import Header from './components/Employee Management/headerEmployee';
import Sidebar from './components/Employee Management/sidebar';

import AddEmployee from './components/Employee Management/AddEmployee';
import AllEmployees from './components/Employee Management/AllEmployees';
import Test from './components/Employee Management/test';
import UpdateEmployee from './components/Employee Management/UpdateEmployee';

import AddPayroll from './components/Employee Management/AddPayroll';
import AllPayrolls from './components/Employee Management/AllPayrolls';
import UpdatePayroll from './components/Employee Management/UpdatePayroll';

import Leave_stat from './components/Employee Management/leave_stat';

import AddLeave from './components/Employee Management/AddLeave';
import UpdateLeave from './components/Employee Management/UpdateLeave';

import ViewEmployee from './components/Employee Management/Dashboard';
import ViewEmployeeLink from './components/Employee Management/employee_page';

import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddAttendance from './components/Employee Management/AddAttendance';
import AllAttendances from './components/Employee Management/AllAttendance';
import UpdateAttendance from './components/Employee Management/UpdateAttendance';
import My from './components/Employee Management/Attendance';
import QR from './components/Employee Management/QR';
import AllLeaves from './components/Employee Management/AllLeave';

export default class App extends Component {

  /* Render two components when the URL path is the same

  <Route path='/medicinerequests/view' element={
              <div>
                <ViewMedicineDeliveryRequests />
                <ViewMedicineDeliveryRequestStatus />
              </div>
  } />
  */

  render() {

    return (

      <BrowserRouter>

        <Header />
        <Sidebar />

        <div className="">
          <Routes>

            <Route path='employee/add' exact Component={AddEmployee}></Route>
            <Route path='employee/get/:id' exact Component={UpdateEmployee}></Route>
            <Route path='/' exact Component={AllEmployees}></Route>

            <Route path="leave/add" exact Component={AddLeave} ></Route>
            <Route path="leave/get/:id" exact Component={UpdateLeave} ></Route>
            <Route path="leave/" exact Component={AllLeaves} ></Route>

            <Route path="payroll/add" exact Component={AddPayroll}></Route>
            <Route path="payroll/get/:id" exact Component={UpdatePayroll} ></Route>
            <Route path="payroll/" exact Component={AllPayrolls} ></Route>

            <Route path="attendance/add" exact Component={AddAttendance} ></Route>
            <Route path="attendance/" exact Component={AllAttendances} ></Route>
            <Route path="attendance/get/:id" exact Component={UpdateAttendance} ></Route>
            <Route path="attendance/add/get/:id" exact Component={AddAttendance} ></Route>
            <Route path="leave/add/get/:id" exact Component={AddLeave} ></Route>
            <Route path="payroll/add/get/:id" exact Component={AddPayroll} ></Route>

            {/* <Route path="employee/view" exact Component={ViewEmployeeLink} ></Route> */}
            <Route path="employee/view/" exact Component={ViewEmployeeLink} ></Route>

            {/* <My/> */}
            <Route path="attendance/qr/" exact Component={My} ></Route>
            <Route path="attendance/code/" exact Component={QR} ></Route>
            <Route path="testM/" exact Component={Test} ></Route>
            {/* <Route path="test/" exact Component={Test_Page} ></Route> */}

            <Route path='employee/view/:id' element={
              <div>
                <ViewEmployee />
                <Leave_stat />
                <AddLeave/>
              </div>
            } ></Route>

          </Routes>
        </div>
      </BrowserRouter>


    )
  }
}
