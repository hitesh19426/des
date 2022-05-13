import React from 'react'

export default function degree4() {
  return (
    <body>
        <div class="row">
            <div class="col-2 navbar">
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
                <div class="">
                    <h2 class="text-center mt-5">Degree</h2>
                    <p class="text-center mt-3">Select a host for which you want to check your degree criteria</p>
                    <table class="table table-borderless mt-5">
                        <thead>
                            <tr class="table-row">
                                <th scope="col">Institute</th>
                                <th scope="col">Criteria</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Delhi Technological University, Delhi</td>
                                <td><a href="">Check</a></td>
                            </tr>
                            <tr>
                                <td>Indian Institute of Technology, Delhi</td>
                                <td><a href="/degree5">Check</a></td>
                            </tr>
                            <tr>
                                <td>Maharaja Surajmal Institute of Technology, Delhi</td>
                                <td><a href="">Check</a></td>
                            </tr>
                            <tr>
                                <td>Jaypee Institute of Information Technology, Uttar Pradesh</td>
                                <td><a href="">Check</a></td>
                            </tr>
                            <tr>
                                <td>Netaji Subhash University of Technology, Delhi</td>
                                <td><a href="">Check</a></td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="d-flex flex-column justify-content-center align-items-center">
                        <a href="/degree2" class="mb-5 btn btn-primary">Back</a>
                    </div>
                </div>
            </div>
            <div class="col-1">

            </div>
        </div>
    </body>

  )
}
