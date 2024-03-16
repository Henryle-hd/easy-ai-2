import TypeWriterTitle from "@/components/TypeWriterTitle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* <h2 className="font-semibold text-3xl text-center text-slate-700">
            AI powered
          </h2>
          <div className="mb-4"></div> */}
          <h1 className="font-semibold text-7xl text-center">
            AI{" "}
            <span className="text-[#ff5400] text-center font-">
              note taking
            </span>{" "}
            assistant.
          </h1>
          <div className="mt-4"></div>
          <h2 className="font-semibold text-3xl text-center text-slate-700">
            <TypeWriterTitle />
          </h2>
          <div className="mt-8"></div>

          <div className="flex justify-center items-center ">
            <Button asChild className=" ">
              <Link href={"/dashboard"}>
                Get started
                <ArrowRight className="ml-2 w-5 h-5" strokeWidth={3} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
