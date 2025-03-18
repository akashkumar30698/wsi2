import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableRow,TableHeader } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function WbcTable() {
  return (
   <>
    <Card className="overflow-hidden border-slate-200">
              <div className="bg-purple-50 py-2 px-3 border-b border-slate-200">
                <h3 className="font-medium text-purple-800">White Blood Cells (WBC)</h3>
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
                    <TableCell className="font-medium">Neutrophil</TableCell>
                    <TableCell className="text-center">222</TableCell>
                    <TableCell className="text-center">
                      <Badge variant="outline" className="bg-purple-50 text-purple-700 hover:bg-purple-50">
                        67%
                      </Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-slate-50">
                    <TableCell>
                      <span className="text-orange-600 font-medium">Eosinophil</span>
                    </TableCell>
                    <TableCell className="text-center">60</TableCell>
                    <TableCell className="text-center">
                      <Badge variant="outline" className="bg-orange-50 text-orange-700 hover:bg-orange-50">
                        20%
                      </Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-slate-50">
                    <TableCell>
                      <span className="text-orange-600 font-medium">Lymphocyte</span>
                    </TableCell>
                    <TableCell className="text-center">87</TableCell>
                    <TableCell className="text-center">
                      <Badge variant="outline" className="bg-orange-50 text-orange-700 hover:bg-orange-50">
                        34%
                      </Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-slate-50">
                    <TableCell className="font-medium">Monocyte</TableCell>
                    <TableCell className="text-center">2</TableCell>
                    <TableCell className="text-center">
                      <Badge variant="outline" className="bg-slate-100 text-slate-700 hover:bg-slate-100">
                        0.12%
                      </Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
   </>
  )
}
