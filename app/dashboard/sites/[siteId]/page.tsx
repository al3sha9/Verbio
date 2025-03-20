import prisma from "@/app/utils/db";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
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
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  EyeIcon,
  FileIcon,
  MoreHorizontal,
  PlusCircle,
  PlusIcon,
  Settings,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

async function getData(userId: string, siteId: string) {
  const data = await prisma.post.findMany({
    where: {
      userId: userId,
      siteId: siteId,
    },
    select: {
      image: true,
      title: true,
      createdAt: true,
      id: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

export default async function SiteIdRoute({
  params,
}: {
  params: { siteId: string };
}) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/login");
  }

  const data = await getData(user.id, params.siteId);
  return (
    <>
      <div className="flex w-full justify-end gap-x-4">
        <Button asChild variant="secondary">
          <Link href="#">
            <EyeIcon className="size-4 mr-2" /> View Blog
          </Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href={`/dashboard/sites/${params.siteId}/create`}>
            <PlusIcon className="size-4 mr-2" /> Create Article
          </Link>
        </Button>
        <Button asChild variant="destructive">
          <Link href="#">
            <Settings className="size-4 mr-2" /> Settings
          </Link>
        </Button>
      </div>
      {data === undefined || data.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50">
          <div className="flex size-20 items-center justify-center rounded-full bg-primary/10 ">
            <FileIcon className="size-10 text-primary" />
          </div>
          <h2 className="mt-6 text-xl font-semibold">
            You dont have any sites created :(
          </h2>
          <p className="mb-8 mt-2  text-center text-sm leading-6  text-muted-foreground max-w-sm mx-auto">
            Create some sites so you can see them here.
          </p>
          <Button asChild>
            <Link href={`/dashboard/sites/${params.siteId}/create`}>
              <PlusCircle className=" size-4" /> Create Site
            </Link>
          </Button>
        </div>
      ) : (
        <>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Articles</CardTitle>
                <CardDescription>Manage your articles</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Image</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Created At</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <Image
                            src={item.image}
                            width={64}
                            height={64}
                            alt="article cover image"
                            className="rounded-md size-16 object-cover "
                          />
                        </TableCell>
                        <TableCell className="font-medium">
                          {item.title}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="bg-green-500/10 text-green-500"
                          >
                            Published
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {new Intl.DateTimeFormat("en-US", {
                            dateStyle: "medium",
                          }).format(item.createdAt)}
                        </TableCell>
                        <TableCell className="text-end">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button size="icon" variant="ghost">
                                <MoreHorizontal className="size-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </>
  );
}
