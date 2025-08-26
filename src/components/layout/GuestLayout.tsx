import React, { memo, type ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[];
};

function GuestLayout({ children }: Props) {
  return <main className="guest-layout">{children}</main>;
}

export default memo(GuestLayout);
