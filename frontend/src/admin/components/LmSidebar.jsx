import React from 'react'
import Sidebar from '../components/Sidebar'
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Dashboard', icon: HomeIcon, href: '/admin/leaguemanager', current: false },
    { name: 'Vereine', icon: HomeIcon, href: '/admin/clubs', current: false },
    { name: 'Mannschaften', icon: UsersIcon, href: '/admin/teams', current: false },
    { name: 'Spieler', icon: FolderIcon, href: '/', current: false },
    { name: 'Spielflächen', icon: CalendarIcon, href: '/admin/venues', current: false },
    { name: 'Wettbewerbe', icon: InboxIcon, href: '/', current: false },
    { name: 'Saisons', icon: ChartBarIcon, href: '/', current: false },
    { name: 'Spieltage', icon: ChartBarIcon, href: '/', current: false },
    { name: 'Spiele', icon: ChartBarIcon, href: '/', current: false },
]

const LmSidebar = () => {
    return (
        <Sidebar navigation={navigation} />
    )
}

export default LmSidebar