import CreateNoteDialog from "@/components/CreateNoteDialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { UserButton } from "@clerk/nextjs";
import { ArrowLeft, Rabbit } from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  const thereIsNotes = false;
  return (
    <>
      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto p-10">
          <div className="h-14"></div>
          <div className="flex justify-btween items-center md:flex-row flex-col">
            <div className="flex item-center justify-evenly">
              <Button asChild size={"sm"}>
                <Link href={"/"}>
                  <ArrowLeft className=" mr-1 w-4 h-4" strokeWidth={3} />
                  Back
                </Link>
              </Button>
              <div className="w-4"></div>
              <h1 className="text-3xl font-bold ">My Notes</h1>
              <div className="w-4"></div>
              <UserButton />
            </div>
          </div>
          <div className="h-8"></div>
          <Separator />
          <div className="h-8"></div>
          {/* list all the notes */}
          {/* TODO conditionally rendered */}
          {thereIsNotes && (
            <div className="text-center flex flex-col justify-center items-center">
              <Rabbit size={200} strokeWidth={0.2} className="text-slate-700" />
              <h2 className="font-semibold text-slate-700">
                You have no notes yet.
              </h2>
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-3">
            <CreateNoteDialog />
          </div>
        </div>
      </div>
    </>
  );
}
