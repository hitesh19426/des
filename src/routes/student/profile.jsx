import React from 'react'
import profileimage from './hitesh.jpg'

export default function profile() {
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
                <div class="col-4">
                    <img src={profileimage} alt="" />
                </div>
                <div class="col-8">
                    <h1>Hitesh Garg</h1>
                    <p>
                        Hi, I am Hitesh Garg. I am a third year undergrad at IIITD. I like a lot of things, but I dont
                        end up doing any of them. I am currently trying to fill this description box so I need to write
                        one more line. I hope I am doing a good job in this. I am the best.
                    </p>
                    <table class="table table-borderless">
                        <thead>
                            <tr>
                                <th scope="col">Key</th>
                                <th scope="col">Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>Hitesh Garg</td>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td>Male</td>
                            </tr>
                            <tr>
                                <td>Father</td>
                                <td>B.K. Garg</td>
                            </tr>
                            <tr>
                                <td>Date of Birth</td>
                                <td>11 November 2000</td>
                            </tr>
                            <tr>
                                <td>Branch</td>
                                <td>Computer Science and Bioscience</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>hiteshgarg@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Admission Date</td>
                                <td>15 July 2019</td>
                            </tr>
                            <tr>
                                <td>Roll Number</td>
                                <td>2019382</td>
                            </tr>
                            <tr>
                                <td>Phone Number</td>
                                <td>9876543210</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-1">

        </div>
    </div>

</body>
  )
}
