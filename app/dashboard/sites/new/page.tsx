import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function NewSiteRoute() {
  return (
    <>
      <div className="flex flex-col flex-1 justify-center items-center ">
        <Card className="md:w-[450px] max-w-[450px]">
          <CardHeader>
            <CardTitle>Create Site</CardTitle>
            <CardDescription>
              Create your site here. Enter site name and details and viola!
              It&apos;s as simple as that.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-y-6">
              <div className="grid gap-3">
                <Label>Site Name</Label>
                <Input placeholder="Site Name" />
              </div>

              <div className="grid gap-3">
                <Label>Sub Directory</Label>
                <Input placeholder="Sub Directory" />
              </div>

              <div className="grid gap-3">
                <Label>Description</Label>
                <Textarea placeholder="Small description of your site" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="cursor-pointer">Submit</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
