"use client"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function PlateletsTable() {
  return (
   <>
    <Card className="overflow-hidden border-slate-200">
              <div className="bg-emerald-50 py-2 px-3 border-b border-slate-200">
                <h3 className="font-medium text-emerald-800">Platelets</h3>
              </div>
              <Table className="border-collapse">
                <TableBody>
                  <TableRow className="hover:bg-slate-50">
                    <TableCell className="font-medium w-1/3">Count</TableCell>
                    <TableCell className="text-center">
                      <Badge variant="outline" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
                        222
                      </Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-slate-50">
                    <TableCell className="font-medium">Percentage</TableCell>
                    <TableCell className="text-center">
                      <Badge variant="outline" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
                        222
                      </Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
    </Card>
   </>
  )
}
