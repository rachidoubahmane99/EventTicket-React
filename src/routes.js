import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";
import { GuestLayout } from "./layouts/Guest";
import { ManagerLayout } from "./layouts/Manager";
import { adminLayout } from "./layouts/admin";

// Route Views
import BlogOverview from "./views/BlogOverview";
import ManagerProfile from "./views/ManagerProfile";
import UserProfileLite from "./views/UserProfileLite";
//import AddNewPost from "./views/NewEvent";
import Errors from "./views/Errors";
import GuestList from "./views/GuestsList";
import CreateNewEvent from "./views/CreateNewEvent";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tablesold";
import MyEvents from "./views/MyEvents";
import NewEvent from "./views/NewEvent";

import managerDashboard from "./views/managerDashboard";

//import BlogPosts from "./views/BlogPosts";
import Event from "./views/EventGuest"
import TicketDownload from "./views/DownloadTicket"
import PrivateEvent from "./views/PrivateEventGuest"
import axios from "axios";
import { event } from "react-ga";


import TablesAdmin from "./views/admin/liste_admin";
import BlogPosts from "./views/admin/Event_Manager_List";
import Login from "./views/admin/Login";
import Register from "./views/admin/Register";
import AddNewPost from "./views/admin/List_Event";
import addAdmin from "./views/admin/addAdmin";
import BlogOverviewAdmin from "./views/admin/BlogOverviewAdmin";




export default 
[
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/blog-overview" />
  },
  //Guest Routes
  { 
    path: "/Ticket",
    layout: GuestLayout,
    component: Event
  },
  {
    path: "/Myticket",
    layout: GuestLayout,
    component:TicketDownload
  },
  //Manager Routes
  {
    path: "/guset/pv",
    layout: ManagerLayout,
    component: PrivateEvent
  },
  {
    path: "/Manager",
    layout: ManagerLayout,
    component: managerDashboard
   
    
  },
  
  {
    path: "/My-Events",
    layout: ManagerLayout,
    component: MyEvents
  },
  {
    path: "/guestList",
    layout: ManagerLayout,
    component: GuestList
  },
  {
    path: "/new-event",
    layout: ManagerLayout,
    component: CreateNewEvent
  },
  {
    path: "/profile",
    layout: ManagerLayout,
    component: ManagerProfile
  },

  //end of Manager Routes
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },



  //Admin routes 

  {
    path: "/admin/Admins",
    layout: adminLayout,
    component: TablesAdmin
  },
  {
    path: "/admin/EventManagers",
    layout: adminLayout,
    component: BlogPosts
  },
  {
    path: "/admin/Events",
    layout: adminLayout,
    component: AddNewPost
  },
  {
    path: "/admin/login",
    layout: adminLayout,
    component: Login
  },
  ,
  {
    path: "/admin/Register",
    layout: adminLayout,
    component: Register
  },
  {
    path: "/admin/AddAdmin",
    layout: adminLayout,
    component: addAdmin
  },
  {
    path: "/admin",
    exact: true,
    layout: adminLayout,
    component: () => <Redirect to="/admin-dashboard" />
  },
  {
    path: "/admin-dashboard",
    layout: adminLayout,
    component: BlogOverviewAdmin
  }

];
