import React from 'react'
import dashcss from './dashboard.css'
import calendar from './calendar.png'
import welcome from './welcome-back.png'

export default function dashboard() {
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
                    <li><a href="">Grades</a></li>
                    <li><a href="">Consortium Institutes</a></li>
                    <li><a href="">Course Registration</a></li>
                    <li><a href="">Dropout</a></li>
                    <li><a href="">Degree</a></li>
                    <li><a href="">Host Change</a></li>

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
                                You have not taken addmission in any institute. <br />
                                Please <a href="/apply">apply</a> to make full use of the Desy portal
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
