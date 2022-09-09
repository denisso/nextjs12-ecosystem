import React from "react"
export default function Home() {
    const [client, setClient] = React.useState(false);

    React.useEffect(() => {
        setClient(true);
    }, []);

    return (
        <div>
            <div>Server</div>
            {client && <div>Client</div>}
        </div>
    );
}