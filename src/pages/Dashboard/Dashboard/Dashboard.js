import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import './Dashboard.css'
import {

    /* Switch,
    Route, */
    Link,


    NavLink,
    Route,
    Routes
} from "react-router-dom";
import { Button } from '@mui/material';

import useAuth from '../../../Hooks/useAuth';
import GiveReview from '../GiveReview/GiveReview';
import PayFee from '../PayFee/PayFee';
import Addmember from '../Addmember/Addmember';
import Managemember from '../Managemember/Managemember';

import Donate from '../Donate/Donate';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageApplies from '../ManageApplies/ManageApplies';
import MyApply from '../MyApply/MyApply';
import Show from '../Show/Show';
import PaidMembers from '../PaidMembers/PaidMembers';


const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const { admin, logout } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const [members, setMembers] = React.useState([]);
    React.useEffect(() => {
        fetch('https://warm-meadow-41881.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setMembers(data));
    }, [])
    const { _id } = members;
    const drawer = (
        <div className='door'>
            <Toolbar />
            <Divider />
            <Link style={{ textDecoration: 'none' }} to="/dashboard"> <Button color="inherit">Dashboard</Button></Link> <br />
            <Box sx={{ textAlign: 'left' }}>
                {/* <Link style={{ textDecoration: 'none' }} to="/home"> <Button color="inherit">Products</Button></Link> <br /> */}


                {admin || <Box>
                    <Link style={{ textDecoration: 'none' }} to={`/dashboard/myapply`}> <Button color="inherit">My Apply</Button></Link><br />
                    <NavLink style={{ textDecoration: 'none' }} to="givereview"> <Button color="inherit">Review</Button></NavLink><br />
                    <Link style={{ textDecoration: 'none' }} to={`/dashboard/payfee/${_id}`}>
                        <Button color="inherit">Pay Fee</Button></Link><br />

                    <NavLink style={{ textDecoration: 'none' }} to="donate"> <Button color="inherit">Donate</Button></NavLink><br />
                    <br />
                    <Button onClick={logout} color="inherit">Logout</Button> <br />
                </Box>

                }
            </Box>

            {admin && <Box sx={{ textAlign: 'left' }}>
                <Link style={{ textDecoration: 'none' }} to="makeAdmin"> <Button color="inherit">Make Admin</Button></Link><br />
                <Link style={{ textDecoration: 'none' }} to={`/dashboard/showapplies`}> <Button color="inherit">All Application</Button></Link><br />
                <Link style={{ textDecoration: 'none' }} to={`/dashboard/managemember`}> <Button color="inherit">Manage Member</Button></Link><br />
                {/* <Link style={{ textDecoration: 'none' }} to={`/dashboard/manageproduct`}> <Button color="inherit">Manage Products</Button></Link><br /> */}
                <Link style={{ textDecoration: 'none' }} to={`/dashboard/addmember`}> <Button color="inherit">Add Member</Button></Link> <br />
                <Link style={{ textDecoration: 'none' }} to={`/dashboard/paidmembers`}> <Button color="inherit">Paid Members</Button></Link> <br />
                <Button onClick={logout} sx={{ color: 'white' }}>Logout</Button>
            </Box>}


        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }} className='dash'>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: 'rgba(0, 0, 0, 0.812)',
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography sx={{ textAlign: 'center' }} variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                    <Typography variant="h6" noWrap component="div">
                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/home"><Button color="inherit">Home</Button></NavLink>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"

                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{

                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}s
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Routes>

                    <Route path="givereview" element={<GiveReview />}>

                    </Route>
                    <Route path="payfee/:payId" element={<PayFee />} />
                    <Route path="donate" element={<Donate />} />


                    <Route path="myapply" element={<MyApply />} />
                    <Route path="showapplies" element={<ManageApplies />} />

                    <Route path="addmember" element={<AdminRoute><Addmember /></AdminRoute>} />
                    <Route path="makeAdmin" element={<AdminRoute><MakeAdmin /></AdminRoute>} />

                    <Route path="managemember" element={<AdminRoute><Managemember /></AdminRoute>} />

                    <Route path="paidmembers" element={<PaidMembers />} />
                    <Route path="/" element={<Show />} />

                </Routes>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
