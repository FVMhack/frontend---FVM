import React from 'react'
import Sidebar from '../components/SidebarMenu'
import DataTable from '../components/DataTable'


const Home = () => {
  return (
    <div className="h-screen flex">
  <div className="w-64 bg-black bg-opacity-75">
    <Sidebar />
  </div>
  <div className="flex-1 overflow-auto">
    <DataTable />
  </div>
</div>
  )
}

export default Home