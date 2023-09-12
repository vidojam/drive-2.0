import React from 'react';
import { useFetchSession } from '@/hooks/useSession';
import { signIn, signOut } from "next-auth/react";
import Button from "@/components/common/Button";

export default function HomeComponent() {
  let { session } = useFetchSession();
  return (
    <div> 
      {session ? (
        <Button
          onClick={() => signOut()}
          btnClass="btn-primary"
          title="Sign Out"
        /> 
      ) : (
        <Button
          onClick={() => signIn()}
          btnClass="btn-primary"
          title="Sign In"
        />
      )}
    </div>
  )
}

