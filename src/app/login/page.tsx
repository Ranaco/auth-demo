import * as React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

const Login = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <span>Suppose this page is login</span>
    </div>
  );
};

export default Login;
