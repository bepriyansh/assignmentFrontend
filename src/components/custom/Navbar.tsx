import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onMenuClick: () => void;
}

export function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <header className="bg-white border-b px-4 pt-2 pb-3 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={onMenuClick}
        >
          <Menu className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-semibold">Portfolio</h1>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-red-200 flex items-center justify-center">
            <span className="text-red-500 text-sm">T</span>
          </div>
          <div className="text-sm">
            <div>Tushar</div>
            <div className="text-xs text-gray-500">tushar@eCollect.com</div>
          </div>
        </div>
      </div>
    </header>
  );
}
