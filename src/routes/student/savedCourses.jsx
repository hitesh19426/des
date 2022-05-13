import React from 'react'

export default function savedCourses() {
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
            <div class="row">
                <div class="accordion mt-5" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <a id="submit" class="btn btn-primary">Saved Courses</a>
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse show collapse" aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <ul>
                                    <li>
                                        Digital Circuits <br />
                                        MSIT-D
                                    </li>

                                    <li>
                                        Database Management System <br />
                                        DTU-D
                                    </li>
                                    <li>
                                        Big Data Mining <br />
                                        IIT-D
                                    </li>

                                    <li>
                                        Cryptocurrency and Cybersecurity <br />
                                        NSIT-D
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-1">

        </div>
    </div>

</body>
  )
}
