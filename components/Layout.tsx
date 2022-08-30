import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};
const Layout = ({ children }: Props) => (
    <>
        <div>Layout header</div>
        <div>{children}</div>
    </>
);

export default Layout;
