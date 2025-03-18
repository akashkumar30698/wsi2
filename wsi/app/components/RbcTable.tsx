import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function RbcTable() {
  return (
   <>
     {/* RBC Table */}
     <Card className="overflow-hidden border-slate-200">
              <div className="bg-blue-50 py-2 px-3 border-b border-slate-200">
                <h3 className="font-medium text-blue-800">Red Blood Cells (RBC)</h3>
              </div>
              <Table className="border-collapse">
                <TableHeader className="bg-slate-50">
                  <TableRow>
                    <TableCell className="font-medium text-slate-700">Type</TableCell>
                    <TableCell className="font-medium text-slate-700 text-center">Count</TableCell>
                    <TableCell className="font-medium text-slate-700 text-center">Percentage</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="hover:bg-slate-50">
                    <TableCell className="font-medium">Normocytic</TableCell>
                    <TableCell className="text-center">150</TableCell>
                    <TableCell className="text-center">
                      <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
                        75%
                      </Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-slate-50">
                    <TableCell>
                      <span className="text-yellow-600 font-medium">Borderline Ovalocytes</span>
                    </TableCell>
                    <TableCell className="text-center">40</TableCell>
                    <TableCell className="text-center">
                      <Badge variant="outline" className="bg-yellow-50 text-yellow-700 hover:bg-yellow-50">
                        20%
                      </Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-slate-50">
                    <TableCell>
                      <span className="text-red-600 font-medium">Burr Cells</span>
                    </TableCell>
                    <TableCell className="text-center">10</TableCell>
                    <TableCell className="text-center">
                      <Badge variant="outline" className="bg-red-50 text-red-700 hover:bg-red-50">
                        5%
                      </Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-slate-50">
                    <TableCell>
                      <span className="text-blue-600 font-medium">Fragmented Cells</span>
                    </TableCell>
                    <TableCell className="text-center">2</TableCell>
                    <TableCell className="text-center">
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                        0.12%
                      </Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-slate-50">
                    <TableCell>
                      <span className="text-orange-600 font-medium">Nucleated</span>
                    </TableCell>
                    <TableCell className="text-center">-</TableCell>
                    <TableCell className="text-center">-</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-slate-50">
                    <TableCell>
                      <span className="text-red-500 font-medium">Rounded RBC</span>
                    </TableCell>
                    <TableCell className="text-center">-</TableCell>
                    <TableCell className="text-center">-</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-slate-50">
                    <TableCell className="font-medium">Teardrop</TableCell>
                    <TableCell className="text-center">-</TableCell>
                    <TableCell className="text-center">-</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
   </>
  )
}
