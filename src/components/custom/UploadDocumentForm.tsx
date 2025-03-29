import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function UploadDocumentForm() {
  return (
    <div className="grid gap-4 py-4 px-6">
      <div className="grid gap-2 w-full">
        <label className="text-sm font-medium">Document Name</label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select document name" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="doc1">Document 1</SelectItem>
            <SelectItem value="doc2">Document 2</SelectItem>
            <SelectItem value="doc3">Document 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2 w-full">
        <label className="text-sm font-medium">Document Type</label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select document type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="type1">Type 1</SelectItem>
            <SelectItem value="type2">Type 2</SelectItem>
            <SelectItem value="type3">Type 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <label className="text-sm font-medium">Document Remarks</label>
        <Input placeholder="Enter remarks" />
      </div>
      <div className="grid gap-2">
        <label className="text-sm font-medium">Select File</label>
        <Input type="file" className="cursor-pointer" />
      </div>
      <div className="flex justify-end mt-6">
        <Button type="submit" className="bg-blue-600 w-24">
          Submit
        </Button>
      </div>
    </div>
  );
}
