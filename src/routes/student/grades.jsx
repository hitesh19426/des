import React from 'react'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import SideDrawer from './side-drawer'
import profile_pic from './hitesh.jpg'


export default function grades() {
  return (
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <List>
            <ListItemButton component="a" href="">
            <ListItemIcon> <InboxIcon /> </ListItemIcon>
            <ListItemText primary='Student' />
            </ListItemButton>
        </List>
    </AppBar>
    <SideDrawer />
    <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }} >
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
                            <table class="table table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">Subject</th>
                                        <th scope="col">College</th>
                                        <th scope="col">Grade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Intro to Programming</td>
                                        <td>MAIT Delhi</td>
                                        <td>10 CGPA</td>
                                    </tr>
                                    <tr>
                                        <td>Linear Algebra</td>
                                        <td>IIIT Delhi</td>
                                        <td>8 CGPA</td>
                                    </tr>
                                    <tr>
                                        <td>Intro to Database</td>
                                        <td>NSIT Delhi</td>
                                        <td>9 CGPA</td>
                                    </tr>
                                    <tr>
                                        <td>Digital Circuits</td>
                                        <td>IIIT Delhi</td>
                                        <td>8 CGPA</td>
                                    </tr>
                                    <tr>
                                        <td>Communication Skills</td>
                                        <td>DTU Delhi</td>
                                        <td>7 CGPA</td>
                                    </tr>
                                </tbody>
                            </table>
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
                            <table class="table table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">Subject</th>
                                        <th scope="col">College</th>
                                        <th scope="col">Grade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Intro to Programming</td>
                                        <td>MAIT Delhi</td>
                                        <td>10 CGPA</td>
                                    </tr>
                                    <tr>
                                        <td>Linear Algebra</td>
                                        <td>IIIT Delhi</td>
                                        <td>8 CGPA</td>
                                    </tr>
                                    <tr>
                                        <td>Intro to Database</td>
                                        <td>NSIT Delhi</td>
                                        <td>9 CGPA</td>
                                    </tr>
                                    <tr>
                                        <td>Digital Circuits</td>
                                        <td>IIIT Delhi</td>
                                        <td>8 CGPA</td>
                                    </tr>
                                    <tr>
                                        <td>Communication Skills</td>
                                        <td>DTU Delhi</td>
                                        <td>7 CGPA</td>
                                    </tr>
                                </tbody>
                            </table>
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
                            <table class="table table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">Subject</th>
                                        <th scope="col">College</th>
                                        <th scope="col">Grade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Intro to Programming</td>
                                        <td>MAIT Delhi</td>
                                        <td>10 CGPA</td>
                                    </tr>
                                    <tr>
                                        <td>Linear Algebra</td>
                                        <td>IIIT Delhi</td>
                                        <td>8 CGPA</td>
                                    </tr>
                                    <tr>
                                        <td>Intro to Database</td>
                                        <td>NSIT Delhi</td>
                                        <td>9 CGPA</td>
                                    </tr>
                                    <tr>
                                        <td>Digital Circuits</td>
                                        <td>IIIT Delhi</td>
                                        <td>8 CGPA</td>
                                    </tr>
                                    <tr>
                                        <td>Communication Skills</td>
                                        <td>DTU Delhi</td>
                                        <td>7 CGPA</td>
                                    </tr>
                                </tbody>
                            </table>
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
                            <table class="table table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">Subject</th>
                                        <th scope="col">College</th>
                                        <th scope="col">Grade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Intro to Programming</td>
                                        <td>MAIT Delhi</td>
                                        <td>10 CGPA</td>
                                    </tr>
                                    <tr>
                                        <td>Linear Algebra</td>
                                        <td>IIIT Delhi</td>
                                        <td>8 CGPA</td>
                                    </tr>
                                    <tr>
                                        <td>Intro to Database</td>
                                        <td>NSIT Delhi</td>
                                        <td>9 CGPA</td>
                                    </tr>
                                    <tr>
                                        <td>Digital Circuits</td>
                                        <td>IIIT Delhi</td>
                                        <td>8 CGPA</td>
                                    </tr>
                                    <tr>
                                        <td>Communication Skills</td>
                                        <td>DTU Delhi</td>
                                        <td>7 CGPA</td>
                                    </tr>
                                </tbody>
                            </table>
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
                            <table class="table table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">Subject</th>
                                        <th scope="col">College</th>
                                        <th scope="col">Grade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Intro to Programming</td>
                                        <td>MAIT Delhi</td>
                                        <td>10 CGPA</td>
                                    </tr>
                                    <tr>
                                        <td>Linear Algebra</td>
                                        <td>IIIT Delhi</td>
                                        <td>8 CGPA</td>
                                    </tr>
                                    <tr>
                                        <td>Intro to Database</td>
                                        <td>NSIT Delhi</td>
                                        <td>9 CGPA</td>
                                    </tr>
                                    <tr>
                                        <td>Digital Circuits</td>
                                        <td>IIIT Delhi</td>
                                        <td>8 CGPA</td>
                                    </tr>
                                    <tr>
                                        <td>Communication Skills</td>
                                        <td>DTU Delhi</td>
                                        <td>7 CGPA</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </Box>
</Box>
  )
}
