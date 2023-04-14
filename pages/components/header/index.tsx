export default function Header() {
    return (
        <header className="mx-4 mt-4 flex h-16 place-content-end items-center rounded-xl bg-white shadow-sm">
            <input
                className="mr-24 w-60 rounded-full bg-blue px-4 py-2 text-dark-blue shadow-sm focus:outline-0"
                type="text"
                placeholder="Search here..."
            />
            <div className="flex items-center justify-self-end">
                <span className="pl-6 pr-2 text-dark-blue/50">
                    Honcharenko Dmytro
                </span>
                <div className="mr-4 h-10 w-10 rounded-full bg-blue shadow"></div>
            </div>
        </header>
    )
}
