export default function() {
  return [
    {
      title: "Dashboard",
      to: "/admin-dashboard",
      htmlBefore: '<i class="material-icons">highlight</i>',
      htmlAfter: ""
    },
    {
      title: "Event Manager",
      htmlBefore: '<i class="material-icons">work</i>',
      to: "/admin/EventManagers",
    },
    {
      title: "Events",
      htmlBefore: '<i class="material-icons">insert_chart</i>',
      to: "/admin/Events",
    },
    {
      title: "Admins",
      htmlBefore: '<i class="material-icons">accessibility</i>',
      to: "/admin/Admins",
    },
    {
      title: "Add Admin",
      htmlBefore: '<i class="material-icons">accessibility</i>',
      to: "/admin/AddAdmin",
    }
  ];
}
