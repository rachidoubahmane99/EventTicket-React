import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";
import { GuestLayout } from "./layouts/Guest";
import { ManagerLayout } from "./layouts/Manager";

// Route Views
import BlogOverview from "./views/BlogOverview";
import ManagerProfile from "./views/ManagerProfile";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/NewEvent";
import Errors from "./views/Errors";
import CreateNewEvent from "./views/CreateNewEvent";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tablesold";
import MyEvents from "./views/MyEvents";
import NewEvent from "./views/NewEvent";
import BlogPosts from "./views/BlogPosts";
import Event from "./views/EventGuest"
import TicketDownload from "./views/DownloadTicket"
import PrivateEvent from "./views/PrivateEventGuest"
import axios from "axios";
import { event } from "react-ga";



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
    component: BlogOverview
   
    
  },
  
  {
    path: "/My-Events",
    layout: ManagerLayout,
    component: MyEvents
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
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
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
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  }
];
