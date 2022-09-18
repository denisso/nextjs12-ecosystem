import Link from "next/link";

const Component = ({ date, name, path }: any) => (
    <>
        <div className="box">
            <h1>{name}</h1>
            <div>Today {date}</div>
            <Link href={path}>
                <a>Goto {name === "Page" ? "Home" : "Page"}</a>
            </Link>
        </div>
        <style jsx>{`
            .box {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        `}</style>
    </>
);

export default Component;
