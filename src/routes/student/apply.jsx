import React from 'react'
import applycss from './apply.css'

export default function Apply(){
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
                    <h1>Apply</h1>
                    <h2>Apply to the best institute available for you!</h2>
                    <div class="box">
                        <p>
                            <select class="my-3 form-select" aria-label="Default select example">
                                <option>Qualifications</option>
                                <option value="1">Class 10 CBSE Boards Percentage</option>
                                <option value="2">Class 10 ICSE Boards Percentage</option>
                                <option value="3">Class 12 CBSE Boards Percentage</option>
                                <option value="4">Class 12 ICSE Boards Percentage</option>
                                <option value="5">JEE Mains Rank</option>
                                <option value="5">JEE Advanced Rank</option>
                                <option value="5">NEET Rank</option>
                            </select>

                            <select class="my-3 form-select" aria-label="Default select example">
                                <option>Qualifications</option>
                                <option value="1">Class 10 CBSE Boards Percentage</option>
                                <option value="2">Class 10 ICSE Boards Percentage</option>
                                <option value="3">Class 12 CBSE Boards Percentage</option>
                                <option value="4">Class 12 ICSE Boards Percentage</option>
                                <option value="5">JEE Mains Rank</option>
                                <option value="5">JEE Advanced Rank</option>
                                <option value="5">NEET Rank</option>
                            </select>

                            <select class="my-3 form-select" aria-label="Default select example">
                                <option>Qualifications</option>
                                <option value="1">Class 10 CBSE Boards Percentage</option>
                                <option value="2">Class 10 ICSE Boards Percentage</option>
                                <option value="3">Class 12 CBSE Boards Percentage</option>
                                <option value="4">Class 12 ICSE Boards Percentage</option>
                                <option value="5">JEE Mains Rank</option>
                                <option value="5">JEE Advanced Rank</option>
                                <option value="5">NEET Rank</option>
                            </select>

                            <button class="btn btn-primary">Add More</button>
                            <a href="/fill" class="btn btn-primary">Submit</a>


                        </p>
                    </div>
                </div>
            </div>
            <div class="col-1">

            </div>
        </body>
    )
}