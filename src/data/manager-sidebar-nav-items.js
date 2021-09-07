export default function() {
  return [
    {
      title: "Home",
      to: "/Manager",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "MY Events",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/My-Events",
    },
    {
      title: "New Event",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/new-event",
    },
   
    {
      title: "Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/profile",
    }
  ];
}
