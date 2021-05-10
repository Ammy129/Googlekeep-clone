import React from "react";
import "./css/Sidebar.css";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  return (
    <section
      className={`sidebar ${showSidebar && "show"}`}
      onMouseEnter={() => setShowSidebar(true)}
      onMouseLeave={() => setShowSidebar(false)}
    >
      <article className="icon-wrapper active">
        <img src="./bulb.svg" alt="bulb-icon" className="sidebar-icon" />
        <label className="sidebar-label">Notes</label>
      </article>
      <article className="icon-wrapper">
        <NotificationsNoneOutlinedIcon className="sidebar-icon" />
        <label className="sidebar-label">Reminders</label>
      </article>
      <article className="icon-wrapper">
        <EditOutlinedIcon className="sidebar-icon" />
        <label className="sidebar-label">Edit Labels</label>
      </article>
      <article className="icon-wrapper">
        <ArchiveOutlinedIcon className="sidebar-icon" />
        <label className="sidebar-label">Archive</label>
      </article>
      <article className="icon-wrapper">
        <DeleteOutlineOutlinedIcon className="sidebar-icon" />
        <label className="sidebar-label">Trash</label>
      </article>
    </section>
  );
};

export default Sidebar;
