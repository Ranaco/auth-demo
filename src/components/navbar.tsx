"use client";
import * as React from "react";
import { Button } from "@nextui-org/react";
import { signIn, signOut } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const Navbar: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  return (
    <div className="w-full fixed top-0 h-[70px] backdrop-blur-lg bg-blue-300/10 items-center flex flex-row justify-between px-4">
      <span className="h-full flex items-center justify-start text-3xl font-bold">
        <a href="/">Auth demo</a>
      </span>
      <div className="flex flex-row gap-5">
        <Link href={"/dashboard"}>
          <Button
            variant="solid"
            color="primary"
            onClick={() => {
              try {
              } catch (err) {
                console.log(err);
              }
            }}
          >
            Dashboard
          </Button>
        </Link>
        <Button
          variant="solid"
          color="primary"
          onClick={() => {
            try {
              signIn("github", {
                callbackUrl: searchParams.get("callbackUrl") || "/",
              });
            } catch (err) {
              console.log(err);
            }
          }}
        >
          Login
        </Button>
        <Button
          variant="solid"
          color="primary"
          onClick={() => {
            try {
              signOut();
            } catch (err) {
              console.log(err);
            }
          }}
        >
          Sign out
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
