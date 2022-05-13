import React from 'react'

export default function register() {
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
                    <div class="row">
                        <div class="accordion mt-5" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                        <a id="submit" class="btn btn-primary">Fetch Courses</a>

                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <ul>
                                            <li>
                                                Digital Circuits - MSIT-D
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Select course
                                                    </label>
                                                </div>
                                            </li>

                                            <li>
                                                Database Management System - DTU-D
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Select course
                                                    </label>
                                                </div>
                                            </li>

                                            <li>
                                                Big Data Analytics - IIT-D
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Select course
                                                    </label>
                                                </div>
                                            </li>

                                            <li>
                                                Blockchain and Cryptocurrency - NSIT-D
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Select course
                                                    </label>
                                                </div>
                                            </li>

                                            <li>
                                                Big Data Mining - IIT-D
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Select course
                                                    </label>
                                                </div>
                                            </li>

                                            <li>
                                                Cryptocurrency and Cybersecurity - NSIT-D
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Select course
                                                    </label>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="/savedCourse" id="submit" class="btn btn-primary">Save Courses</a>

                    </div>
                </div>
                <div class="col-1">

                </div>
            </div>
        </body>
  )
}
