import React from 'react'

export default function degree3() {
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
                <div class="">
                    <h2 class="text-center mt-5">Degree</h2>
                    <table class="table table-borderless mt-5">
                        <thead>
                            <tr class="table-row">
                                <th scope="col">Field Name</th>
                                <th scope="col">Required</th>
                                <th scope="col">Fulfilled</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Minimum credits for degree</td>
                                <td>160</td>
                                <td>140</td>
                                <td>X</td>
                            </tr>
                            <tr>
                                <td>Minimum credits from host</td>
                                <td>100</td>
                                <td>110</td>
                                <td>_/</td>
                            </tr>
                            <tr>
                                <td>Maximum online credits</td>
                                <td>20</td>
                                <td>16</td>
                                <td>_/</td>
                            </tr>
                            <tr>
                                <td>Mandatory host courses</td>
                                <td>IP, DSA, AP, ADA</td>
                                <td>IP, DSA, AP</td>
                                <td>X</td>
                            </tr>
                            <tr>
                                <td>Others</td>
                                <td>0 active backlogs</td>
                                <td>0 active backlogs</td>
                                <td>_/</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="d-flex flex-column justify-content-center align-items-center">
                        <p class="mt-5">You have not fulfilled the degree criteria for your host institute</p>
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
