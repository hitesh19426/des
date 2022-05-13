import React from 'react'
import consortiumInstitiutecss from './consortiumInstitiute.css'

export default function consortiumInstitiute() {
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
                                National Institute of Technology, Delhi (NIT-D)
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <ul>
                                    <li><a href="">View criteria for host change</a></li>
                                    <li><a href="">View criteria for drop out</a></li>
                                    <li><a href="">View criteria for degree </a></li>
                                    <li><a href="">View courses</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Indian Institute of Technology, Delhi (IIT-D)
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <ul>
                                    <li><a href="">View criteria for host change</a></li>
                                    <li><a href="">View criteria for drop out</a></li>
                                    <li><a href="">View criteria for degree </a></li>
                                    <li><a href="">View courses</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Maharaja Surajmal Institute of Technology, Delhi (MSIT-D)
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <ul>
                                    <li><a href="">View criteria for host change</a></li>
                                    <li><a href="">View criteria for drop out</a></li>
                                    <li><a href="">View criteria for degree </a></li>
                                    <li><a href="">View courses</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header" id="heading4">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                Indraprastha Institute of Information Technology, Delhi (IIIT-D)
                            </button>
                        </h2>
                        <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="heading4"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <ul>
                                    <li><a href="">View criteria for host change</a></li>
                                    <li><a href="">View criteria for drop out</a></li>
                                    <li><a href="">View criteria for degree </a></li>
                                    <li><a href="">View courses</a></li>
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
