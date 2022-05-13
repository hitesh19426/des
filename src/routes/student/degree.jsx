import React from 'react'

export default function degree() {
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
                    <h6 class="mt-5">Do you want to see your current degree status?</h6>
                    <div class="buttons d-flex flex-row justify-content-center">
                        <a href="/degree2" class="btn btn-primary">Yes</a>
                        <a href="/dashboardNew" class="btn btn-primary">No</a>
                    </div>
                </div>
            </div>
            <div class="col-1">

            </div>
        </div>
    </body>

  )
}
