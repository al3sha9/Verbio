"use client";
import { CreateSiteAction } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { useActionState } from "react";

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
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { siteSchema } from "@/app/utils/zodSchemas";

export default function NewSiteRoute() {
  const [lastResult, action] = useActionState(CreateSiteAction, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: siteSchema,
      });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
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
          <form id={form.id} onSubmit={form.onSubmit} action={action}>
            <CardContent>
              <div className="flex flex-col gap-y-6">
                <div className="grid gap-3">
                  <Label>Site Name</Label>
                  <Input
                    name={fields.name.name}
                    key={fields.name.key}
                    defaultValue={fields.name.key}
                    placeholder="Site Name"
                  />
                  <p className="text-xs text-red-500">{fields.name.errors}</p>
                </div>

                <div className="grid gap-3">
                  <Label>Sub Directory</Label>
                  <Input
                    name={fields.subDirectory.name}
                    key={fields.subDirectory.key}
                    defaultValue={fields.subDirectory.initialValue}
                    placeholder="Sub Directory"
                  />
                  <p className="text-xs text-red-500">
                    {fields.subDirectory.errors}
                  </p>
                </div>

                <div className="grid gap-3">
                  <Label>Description</Label>
                  <Textarea
                    name={fields.description.name}
                    key={fields.description.key}
                    defaultValue={fields.description.initialValue}
                    placeholder="Small description of your site"
                  />
                  <p className="text-xs text-red-500">
                    {fields.description.errors}
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="cursor-pointer my-3">Submit</Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </>
  );
}
