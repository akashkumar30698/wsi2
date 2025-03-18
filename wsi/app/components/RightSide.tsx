import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, ZoomIn, ZoomOut } from "lucide-react"


export default function RightSide() {
  return (
    <>
      <div className="col-span-1">
        {/* Top Right - Zoomed Out View */}
        <div className="flex flex-col gap-4 mb-6">
          <div className="col-span-1">
            <div className="text-lg font-semibold text-slate-700 mb-2">Patient Information</div>
            <Card className="p-4 border-slate-200">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="text-xs text-slate-500 mb-1">Patient ID</div>
                  <div className="font-medium">P-20240317-001</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-1">Sample Type</div>
                  <div className="font-medium">Blood</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-1">Collection Date</div>
                  <div className="font-medium">Mar 17, 2024</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-1">Status</div>
                  <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">In Analysis</Badge>
                </div>
              </div>
            </Card>
          </div>
          <div className="col-span-1">
            <div className="text-lg font-semibold text-slate-700 mb-2">WSI Overview</div>
            <Card className="border-slate-200 overflow-hidden">
              <div className="bg-slate-800 h-[180px] sm:h-[220px] flex items-center justify-center relative">
                {/* Image Inside the Div */}
                <img
                  src="/photo.png" // Replace with your actual image path
                  alt="Whole Slide Image"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay Text */}
               

                {/* Zoom Buttons */}
                <div className="absolute bottom-2 right-2 flex gap-1 z-10">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="h-7 w-7 rounded-full bg-white/20 hover:bg-white/30"
                  >
                    <ZoomIn className="h-3.5 w-3.5 text-white" />
                    <span className="sr-only">Zoom in</span>
                  </Button>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="h-7 w-7 rounded-full bg-white/20 hover:bg-white/30"
                  >
                    <ZoomOut className="h-3.5 w-3.5 text-white" />
                    <span className="sr-only">Zoom out</span>
                  </Button>
                </div>
              </div>
            </Card>
          </div>

        </div>

        {/* Bottom Right - Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">

          <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2 w-full sm:w-auto">
            Generate Report
          </Button>
        </div>
      </div>
    </>
  )
}
