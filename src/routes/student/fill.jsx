import React from 'react'

export default function fill() {
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
            <h1 class="mt-5">Apply</h1>
            <h2 class="mb-5">Apply to the best institute available for you!</h2>
            <div class="box">

                <form class="m-5">
                    <div class="mb-3">
                        <input type="text" class="form-control" placeholder="JEE Mains Rank" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" placeholder="JEE Advanced Rank"
                            id="exampleInputPassword1" />
                    </div>

                    <div class="mb-3">
                        <label for="formFile" class="form-label">Please add valid documents </label>
                        <input class="form-control" type="file" id="formFile" />
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Do you want to upload your documents to DESy
                            server? </label>
                    </div>

                    <button class="btn btn-primary">Add More</button>
                    <a href="/studentRegister" class="btn btn-primary">Submit</a>

                </form>



            </div>
        </div>
    </div>
    <div class="col-1">

    </div>
</body>

  )
}
