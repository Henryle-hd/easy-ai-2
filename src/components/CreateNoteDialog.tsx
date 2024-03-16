"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "./ui/dialog";
import { Plus } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

type Props = {};

const CreateNoteDialog = (props: Props) => {
  const [input, setInput] = React.useState("");
  const createNotebook = useMutation({
    mutationFn: async () => {
      const response = await axios.post("/api/CreateNoteBook", {
        name: input
      });
      return response.data;
    }
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input === "") {
      window.alert("Please enter a name for your notebook");
      return;
    }
    createNotebook.mutate(undefined, {
      onSuccess: () => {
        console.log("Notebook created");
      },
      onError: (error) => {
        console.log(error);
      }
    });
  };
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex flex-row sm:flex-col border-dashed border border-easycolor h-full rounded-lg justify-center items-center  hover:shadow-xl transition hover:-translate-y-1  p-4">
          <Plus className="w-6 h-6 text-easycolor " strokeWidth={3} />
          <h2 className="font-semibold text-easycolor sm:mt-2"> New note</h2>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New note📝</DialogTitle>
          <DialogDescription>
            Fill the title of the note and click the Button below
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="title"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="h-4"></div>
          <div className="flex items-center gap-3">
            <Button type="reset" variant={"secondary"}>
              Cancel
            </Button>
            <Button type="submit">Create</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateNoteDialog;
