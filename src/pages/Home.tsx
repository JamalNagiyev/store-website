import background from "../assets/BackgroundPage.jpg"

export default function Home() {
    return (
        <section
            className="h-screen w-full relative bg-center flex max-w-8xl items-center justify-center"
            style={{
                backgroundImage: `url(${background})`,
            }}
        >
            <h1 className="text-white text-4xl font-bold"></h1>
        </section>
    );
}