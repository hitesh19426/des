import React from 'react'
import courselistcss from './courselist.css'

export default function courselist() {
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
                  <div class="accordion mt-5" id="accordionExample">

                      <div class="accordion-item">
                          <h2 class="accordion-header" id="headingOne">
                              <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                  Semester 1
                              </button>
                          </h2>
                          <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                              data-bs-parent="#accordionExample">
                              <div class="accordion-body">
                                  <ul>
                                      <li>Intro to Programming - IIIT Delhi</li>
                                      <li>Linear Algerbra - NIT Delhi</li>
                                      <li>Digital Circuits - IIIT Delhi</li>
                                      <li>Prototyping Interactive Systems - DTU Delhi</li>
                                      <li>Communication Skills - IIIT Delhi</li>
                                  </ul>
                              </div>
                          </div>
                      </div>

                      <div class="accordion-item">
                          <h2 class="accordion-header" id="headingTwo">
                              <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                  Semester 2
                              </button>
                          </h2>
                          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                              data-bs-parent="#accordionExample">
                              <div class="accordion-body">
                                  <ul>
                                      <li>Intro to Programming - IIIT Delhi</li>
                                      <li>Linear Algerbra - NIT Delhi</li>
                                      <li>Digital Circuits - IIIT Delhi</li>
                                      <li>Prototyping Interactive Systems - DTU Delhi</li>
                                      <li>Communication Skills - IIIT Delhi</li>
                                  </ul>
                              </div>
                          </div>
                      </div>

                      <div class="accordion-item">
                          <h2 class="accordion-header" id="headingThree">
                              <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                  Semester 3
                              </button>
                          </h2>
                          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                              data-bs-parent="#accordionExample">
                              <div class="accordion-body">
                                  <ul>
                                      <li>Intro to Programming - IIIT Delhi</li>
                                      <li>Linear Algerbra - NIT Delhi</li>
                                      <li>Digital Circuits - IIIT Delhi</li>
                                      <li>Prototyping Interactive Systems - DTU Delhi</li>
                                      <li>Communication Skills - IIIT Delhi</li>
                                  </ul>
                              </div>
                          </div>
                      </div>

                      <div class="accordion-item">
                          <h2 class="accordion-header" id="heading4">
                              <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                  Semester 4
                              </button>
                          </h2>
                          <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="heading4"
                              data-bs-parent="#accordionExample">
                              <div class="accordion-body">
                                  <ul>
                                      <li>Intro to Programming - IIIT Delhi</li>
                                      <li>Linear Algerbra - NIT Delhi</li>
                                      <li>Digital Circuits - IIIT Delhi</li>
                                      <li>Prototyping Interactive Systems - DTU Delhi</li>
                                      <li>Communication Skills - IIIT Delhi</li>
                                  </ul>
                              </div>
                          </div>
                      </div>

                      <div class="accordion-item">
                          <h2 class="accordion-header" id="heading5">
                              <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                  Semester 5
                              </button>
                          </h2>
                          <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="heading5"
                              data-bs-parent="#accordionExample">
                              <div class="accordion-body">
                                  <ul>
                                      <li>Intro to Programming - IIIT Delhi</li>
                                      <li>Linear Algerbra - NIT Delhi</li>
                                      <li>Digital Circuits - IIIT Delhi</li>
                                      <li>Prototyping Interactive Systems - DTU Delhi</li>
                                      <li>Communication Skills - IIIT Delhi</li>
                                  </ul>
                              </div>
                          </div>
                      </div>

                      <div class="accordion-item">
                          <h2 class="accordion-header" id="heading6">
                              <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                  Semester 6
                              </button>
                          </h2>
                          <div id="collapse6" class="accordion-collapse collapse" aria-labelledby="heading6"
                              data-bs-parent="#accordionExample">
                              <div class="accordion-body">
                                  <ul>
                                      <li>Intro to Programming - IIIT Delhi</li>
                                      <li>Linear Algerbra - NIT Delhi</li>
                                      <li>Digital Circuits - IIIT Delhi</li>
                                      <li>Prototyping Interactive Systems - DTU Delhi</li>
                                      <li>Communication Skills - IIIT Delhi</li>
                                  </ul>
                              </div>
                          </div>
                      </div>

                      <div class="accordion-item">
                          <h2 class="accordion-header" id="heading7">
                              <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                                  Semester 7
                              </button>
                          </h2>
                          <div id="collapse7" class="accordion-collapse collapse" aria-labelledby="heading7"
                              data-bs-parent="#accordionExample">
                              <div class="accordion-body">
                                  <ul>
                                      <li>Intro to Programming - IIIT Delhi</li>
                                      <li>Linear Algerbra - NIT Delhi</li>
                                      <li>Digital Circuits - IIIT Delhi</li>
                                      <li>Prototyping Interactive Systems - DTU Delhi</li>
                                      <li>Communication Skills - IIIT Delhi</li>
                                  </ul>
                              </div>
                          </div>
                      </div>

                      <div class="accordion-item">
                          <h2 class="accordion-header" id="heading8">
                              <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                                  Semester 8
                              </button>
                          </h2>
                          <div id="collapse8" class="accordion-collapse collapse" aria-labelledby="heading8"
                              data-bs-parent="#accordionExample">
                              <div class="accordion-body">
                                  <ul>
                                      <li>Intro to Programming - IIIT Delhi</li>
                                      <li>Linear Algerbra - NIT Delhi</li>
                                      <li>Digital Circuits - IIIT Delhi</li>
                                      <li>Prototyping Interactive Systems - DTU Delhi</li>
                                      <li>Communication Skills - IIIT Delhi</li>
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
