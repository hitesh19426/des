import React from 'react'
import calendar from './calendar.png'
import welcome from './welcome-back.png'

export default function dashboardNew() {
  return (
    <body>
      <div class="row">
          <div class="col-2">
              <ul>
                  <li><a href=""></a></li>
                  <li><a href="">Student</a></li>
                  <li><a href=""></a></li>
                  <li><a href=""></a></li>

                  <li><a href="/dashboard">Dashboard</a></li>
                  <li><a href="/profile">Profile</a></li>
                  <li><a href="/courselist">Course List</a></li>
                  <li><a href="/grades">Grades</a></li>
                  <li><a href="/consortiumInstitiute">Consortium Institutes</a></li>
                  <li><a href="/register">Course Registration</a></li>
                  <li><a href="/dropout">Dropout</a></li>
                  <li><a href="/degree">Degree</a></li>
                  <li><a href="/hostchange">Host Change</a></li>

                  <li><a href=""></a></li>
                  <li><a href=""></a></li>
                  <li><a href=""></a></li>
                  <li><a href=""></a></li>
                  <li><a href=""></a></li>
                  <li><a href=""></a>Logout</li>
                  <li><a href=""></a></li>
              </ul>
          </div>
          <div class="col-9 main">
              <div class="row">
                  <div class="col-8 mt-4">
                      <img src={welcome} alt="" />
                      <div class="box">
                          <p>
                              Dear Hitesh, <br />
                              You are a student of IIIT Delhi <br />
                              Please <a href="/apply">register</a> for courses using the DESy portal
                          </p>
                      </div>
                  </div>
                  <div class="col-4 mt-4 d-flex justify-content-end sidebar">
                      <img src={calendar} alt="" />
                  </div>
              </div>
          </div>
          <div class="col-1">

          </div>
      </div>
  </body>
  )
}
