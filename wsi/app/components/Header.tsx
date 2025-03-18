"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import RbcTable from "./RbcTable"
import WbcTable from "./WbcTable"
import PlateletsTable from "./PlateletsTable"
import RightSide from "./RightSide"

export default function Header() {
  const [currentDate] = useState(new Date().toLocaleString())

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto bg-slate-50 min-h-screen">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-800">Digital Pathology Viewer</h1>
        <div className="text-sm text-slate-500 font-medium">{currentDate}</div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 relative border border-slate-200">
        {/* Back Button */}
        <div className="absolute left-6 top-6">
          <Button variant="outline" size="sm" className="rounded-full h-9 w-9 p-0">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Go back</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {/* Left Panel - Blood Cell Tables */}
          <div className="col-span-1 space-y-6">
            <div className="text-lg font-semibold text-slate-700 mb-2">Blood Cell Analysis</div>

             {/* RBC Table */}
              <RbcTable/>

            {/* WBC Table */}
              <WbcTable/>
        
            {/* Platelets Table */}
             <PlateletsTable/>
          </div>

          <div className="col-span-1 flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-[600px]">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded-lg">
                <source src="/background.m4v" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Center and Right Panels */}
          <RightSide/>
         
        </div>
      </div>
    </div>
  )
}

