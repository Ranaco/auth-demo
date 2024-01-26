"use client";

import * as React from "react";
import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const AppProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <SessionProvider>{children}</SessionProvider>
    </NextUIProvider>
  );
};

export default AppProvider;
