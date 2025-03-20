import { Button } from "@/components/ui/button";
import { EyeIcon, PlusIcon, Settings } from "lucide-react";
import Link from "next/link";

export default function SiteIdRoute() {
  return (
    <>
      <div className="flex w-full justify-end gap-x-4">
        <Button asChild variant="secondary">
          <Link href="#">
            <EyeIcon className="size-4 mr-2" /> View Blog
          </Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="#">
            <PlusIcon className="size-4 mr-2" /> Create Article
          </Link>
        </Button>
        <Button asChild variant="destructive">
          <Link href="#">
            <Settings className="size-4 mr-2" /> Settings
          </Link>
        </Button>
      </div>
    </>
  );
}
