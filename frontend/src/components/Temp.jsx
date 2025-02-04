"use client"

import { LayoutGrid, BotIcon as Robot, Battery, MapPin, BarChart, Settings } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-white p-6">
        <h1 className="text-xl font-bold mb-8">xTerra</h1>
        <nav className="space-y-4">
          <h2 className="text-sm font-semibold text-gray-500 mb-4">Navigation</h2>
          <a href="#" className="flex items-center space-x-3 text-sm font-medium text-blue-600">
            <LayoutGrid className="h-5 w-5" />
            <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-sm text-gray-600 hover:text-blue-600">
            <Robot className="h-5 w-5" />
            <span>Robot Management</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-sm text-gray-600 hover:text-blue-600">
            <BarChart className="h-5 w-5" />
            <span>Analytic</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-sm text-gray-600 hover:text-blue-600">
            <Settings className="h-5 w-5" />
            <span>Setting</span>
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Active Robots Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-medium text-gray-500">Active Robots</h3>
              <Robot className="h-4 w-4 text-gray-500" />
            </div>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-gray-500">4 in maintenance</p>
          </div>

          {/* Battery Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-medium text-gray-500">Battery</h3>
              <Battery className="h-4 w-4 text-gray-500" />
            </div>
            <div className="text-2xl font-bold">85%</div>
            <p className="text-xs text-gray-500">Average battery level</p>
          </div>

          {/* Area Covered Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-medium text-gray-500">Area Covered</h3>
              <MapPin className="h-4 w-4 text-gray-500" />
            </div>
            <div className="text-2xl font-bold">2,500 m²</div>
            <p className="text-xs text-gray-500">Total area covered today</p>
          </div>
        </div>

        {/* Status and Location Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Robot Status Card */}
          <div className="bg-white rounded-lg shadow lg:col-span-2">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">Robot Status</h3>
                <BarChart className="h-4 w-4 text-gray-500" />
              </div>
            </div>
            <div className="p-6">
              <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-lg">
                <p className="text-gray-500">Status chart would go here</p>
              </div>
            </div>
          </div>

          {/* Robot Location Card */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">Robot Location</h3>
                <MapPin className="h-4 w-4 text-gray-500" />
              </div>
            </div>
            <div className="p-6">
              <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-lg">
                <p className="text-gray-500">Map view would go here</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

