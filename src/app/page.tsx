'use client'

import { Button } from "@/components/ui/button";
import { SignInButton, SignOutButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {
const createfile = useMutation(api.files.createfile)
const getfiles = useQuery(api.files.getfiles)
  return (  
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignedOut>
        <SignInButton mode="modal">
          <Button>Sign In</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <SignOutButton>
          <Button>Sign Out</Button>
        </SignOutButton>
      </SignedIn>

      {getfiles?.map((file)=>{
        return <div key={file._id}>
          {file.name}
        </div>
      })}

      <Button onClick={()=>{
        createfile({
          name:"Hello world"
        })
      }}>Sned Req</Button>

    </main>
  );
}
