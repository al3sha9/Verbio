import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function SitesRoute() {
  return (
    <>
      <div className=" flex w-full  justify-end">
        <Button asChild>
          <Link href={"/dashboard/sites/new"}>
            <Plus className="mr-2 size-4" /> Create Site
          </Link>
        </Button>
      </div>
    </>
  );
}
