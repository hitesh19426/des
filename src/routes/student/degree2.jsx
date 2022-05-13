import React from 'react'

export default function degree2() {
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
                <div class="row text-center">
                    <h2 class="mt-5">Degree</h2>
                    <h6 class="mt-5">Do you want to see your degree status with your current host?</h6>
                    <h6 class="">Do you want to see your degree status with different host?</h6>
                    <h6 class="mb-5">Please select the required option</h6>
                    <div class="buttons d-flex flex-row justify-content-center">
                        <a href="/degree3" class="btn btn-primary">Current</a>
                        <a href="/degree4" class="btn btn-primary">Host Change</a>
                        <a href="/degree" class="btn btn-primary">Cancel</a>
                    </div>
                </div>
            </div>
            <div class="col-1">

            </div>
        </div>
    </body>

  )
}
