import Image from "next/image";

export default function Offline() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <video width="600" controls playsInline muted>
                <source src="/ocelot_2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </main>
    );
}
