import React from 'react';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faChartColumn, faChartPie, faClone, faHouse, faMessage, faSliders, faToggleOn } from '@fortawesome/free-solid-svg-icons'

export const SidebarData = [
  {
    title: 'Conversations',
    path: '/conversations',
    icon: <FontAwesomeIcon className="sidebar__item--icon" icon={faMessage} />,
    cName: 'nav-text'
  },
  {
    title: 'Automations',
    path: '/automations',
    icon: <FontAwesomeIcon className="sidebar__item--icon" icon={faSliders} />,
    cName: 'nav-text'
  },
  {
    title: 'Campaigns',
    path: '/campaigns',
    icon: <FontAwesomeIcon className="sidebar__item--icon" icon={faChartColumn} />,
    cName: 'nav-text'
  },
  {
    title: 'Popup',
    path: '/popup',
    icon: <FontAwesomeIcon className="sidebar__item--icon" icon={faClone} />,
    cName: 'nav-text'
  },
  {
    title: 'Live Chat',
    path: '/livechat',
    icon: <FontAwesomeIcon className="sidebar__item--icon" icon={faMessage} />,
    cName: 'nav-text'
  },
  {
    title: 'Segments',
    path: '/segments',
    icon: <FontAwesomeIcon className="sidebar__item--icon" icon={faChartPie} />,
    cName: 'nav-text'
  },
  {
    title: 'Integrations',
    path: '/integrations',
    icon: <FontAwesomeIcon className="sidebar__item--icon" icon={faToggleOn} />,
    cName: 'nav-text'
  },
];