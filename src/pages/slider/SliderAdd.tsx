import AuthLayout from "@/components/layout/AuthLayout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import React from "react";

export default function SliderAdd() {
  return (
    <AuthLayout module="Slider" page="Add">
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <Card>
          <CardHeader>
            <CardTitle>Add Slide</CardTitle>
            <CardDescription>
              To add a slide please enter following details
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="input-group-wrap grid grid-cols-4 my-3">
              <Label htmlFor="email" className="flex items-center">
                Title{" "}
                <span className="text-gray-500 ms-1"> (Biggest title)</span>
                <span className="text-red-500">*</span>
              </Label>

              <div className="input-wrap mx-2">
                <Input
                  className=" m-1"
                  title="Enter title that will display in big size"
                />
                <span className="text-red-500"></span>
              </div>

              <div className="input-wrap mx-2">
                <Input
                  className=" m-1"
                  title="Enter title that will display in big size"
                />
                <span className="text-red-500"></span>
              </div>
            </div>

            <div className="input-group-wrap grid grid-cols-4 my-3">
              <Label htmlFor="email" className="flex items-center ">
                Description <span className="ms-1"> (Optional)</span>
              </Label>

              <div className="input-wrap mx-2 col-span-2">
                <Input
                  className=" m-1"
                  title="Enter title that will display in big size"
                />
                <span className="text-red-500"></span>
              </div>
            </div>

            <div className="input-group-wrap grid grid-cols-4 my-3">
              <Label htmlFor="email" className="flex items-center ">
                Slide image <span className="text-red-500">*</span>
              </Label>

              <div className="input-wrap mx-2">
                <Input id="picture" type="file" className="m-1" />
                <span className="text-red-500"></span>
              </div>
            </div>

            <div className="mt-10">
              <Button className="me-4" variant={"outline"}>
                Back
              </Button>{" "}
              <Button className="">Save</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AuthLayout>
  );
}
