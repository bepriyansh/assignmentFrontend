import {
  Search,
  ChevronDown,
  Filter,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { UploadDocumentForm } from "./UploadDocumentForm";

const tabs = [
  { id: "all", label: "All" },
  { id: "pre-sarfaesi", label: "Pre Sarfaesi" },
  { id: "npa", label: "NPA" },
  { id: "13-3-responses", label: "13(3) Responses" },
  { id: "symbolic-possession", label: "Symbolic Possession" },
  { id: "dm-order", label: "DM Order" },
  { id: "physical-possessions", label: "Physical Possessions" },
  { id: "auctions", label: "Auctions" },
];

export function LoansTable({ loans }: { loans: any[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("pre-sarfaesi");
  const itemsPerPage = 10;
  const totalItems = loans.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentItems = loans.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <main className="flex-1 overflow-auto p-4">
      {/* Tabs */}
      <div className="mb-4 overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 min-w-[800px]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-1 text-nowrap border rounded-lg transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-200 text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between mb-4">
        <div className="w-full lg:w-96">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search Loan Number" className="pl-8" />
          </div>
        </div>
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-1">
                Select Columns <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Loan No</DropdownMenuItem>
              <DropdownMenuItem>Loan Type</DropdownMenuItem>
              <DropdownMenuItem>Borrower</DropdownMenuItem>
              <DropdownMenuItem>Borrower Address</DropdownMenuItem>
              <DropdownMenuItem>Co Borrower 1 Name</DropdownMenuItem>
              <DropdownMenuItem>Co Borrower 1 Address</DropdownMenuItem>
              <DropdownMenuItem>Current DPD</DropdownMenuItem>
              <DropdownMenuItem>Sanction Amount</DropdownMenuItem>
              <DropdownMenuItem>Region</DropdownMenuItem>
              <DropdownMenuItem>Status</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="default"
                className="bg-blue-600 flex items-center gap-1"
              >
                <Filter className="h-4 w-4" /> More Filters
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Upload Document</SheetTitle>
              </SheetHeader>
              <UploadDocumentForm />
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Selected Count */}
      <div className="text-sm text-gray-500 mb-2">0 loans selected</div>

      {/* Table */}
      <div className="border rounded-md overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40px]">
                <Checkbox />
              </TableHead>
              <TableHead className="w-[120px]">
                Loan No <ChevronDown className="inline h-3 w-3" />
              </TableHead>
              <TableHead>
                Loan Type <ChevronDown className="inline h-3 w-3" />
              </TableHead>
              <TableHead>
                Borrower <ChevronDown className="inline h-3 w-3" />
              </TableHead>
              <TableHead>
                Borrower Address <ChevronDown className="inline h-3 w-3" />
              </TableHead>
              <TableHead>
                Co Borrower 1 Name <ChevronDown className="inline h-3 w-3" />
              </TableHead>
              <TableHead>
                Co Borrower 1 Address <ChevronDown className="inline h-3 w-3" />
              </TableHead>
              <TableHead className="text-center">
                Current DPD <ChevronDown className="inline h-3 w-3" />
              </TableHead>
              <TableHead>
                Sanction Amount <ChevronDown className="inline h-3 w-3" />
              </TableHead>
              <TableHead>
                Region <ChevronDown className="inline h-3 w-3" />
              </TableHead>
              <TableHead>
                Status <ChevronDown className="inline h-3 w-3" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentItems.map((loan) => (
              <TableRow key={loan.id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell className="text-blue-600 font-medium">
                  {loan.id}
                </TableCell>
                <TableCell>{loan.loanType}</TableCell>
                <TableCell>{loan.borrower}</TableCell>
                <TableCell>{loan.borrowerAddress}</TableCell>
                <TableCell>{loan.coBorrowerName}</TableCell>
                <TableCell>{loan.coBorrowerAddress}</TableCell>
                <TableCell className="text-center">{loan.currentDPD}</TableCell>
                <TableCell>{loan.sanctionAmount}</TableCell>
                <TableCell>{loan.region}</TableCell>
                <TableCell>{loan.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        <div className="flex items-center justify-between px-4 pt-3 border-t">
          <div className="text-sm text-gray-500">
            Showing {startIndex + 1}-{endIndex} of {totalItems}
          </div>
          <div className="flex flex-wrap mb-6 w-max border rounded-lg overflow-hidden bg-[#F9F9FB]">
            <Button
              variant="ghost"
              className="w-8 h-8 p-0 flex justify-center items-center border-r rounded-none"
              size="icon"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              className="w-8 h-8 p-0 flex justify-center items-center rounded-none"
              size="icon"
              onClick={handleNextPage}
              disabled={currentPage >= totalPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-2 text-xs text-gray-500 flex justify-between items-center">
        <div></div>
        <div className="flex items-center gap-1">
          <span>powered by</span>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center text-white text-[8px] font-bold">
              P
            </div>
            <span className="font-semibold text-blue-600 text-xs">
              eCollect
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
