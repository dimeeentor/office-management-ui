import { FC } from "react"

const Header: FC = () => {
    return (
        <header className="sticky top-5 z-10 flex h-16 place-content-end items-center rounded-2xl bg-white shadow-sm">
            <input
                className="mr-24 w-60 rounded-full bg-blue-600 px-4 py-2 text-white shadow-sm placeholder:text-white focus:outline-0"
                type="text"
                placeholder="Search here..."
            />
            <div className="flex items-center justify-self-end">
                <span className="text-dark-blue/50 pl-6 pr-2">
                    Honcharenko Dmytro
                </span>
                <div className="bg-blue mr-4 h-10 w-10 rounded-full shadow"></div>
            </div>
        </header>
    )
}

export default Header
