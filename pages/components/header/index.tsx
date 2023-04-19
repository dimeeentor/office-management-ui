import { FC } from "react"
import Image from "next/image"

const Header: FC = () => {
    return (
        <header className="flex h-16 items-center justify-around rounded-2xl bg-white shadow-sm lg:justify-end">
            <input
                className="h-10 rounded-full bg-blue-500 px-4 py-2 text-white shadow-sm placeholder:text-white focus:outline-0 md:mr-10"
                type="text"
                placeholder="Search here..."
            />
            <div className="flex h-full items-center justify-self-end">
                <span className="text-dark-blue/50 pl-6 pr-2 text-sm md:text-base">
                    Honcharenko Dmytro
                </span>
                <div className="mr-4 aspect-square h-10 w-10 rounded-full bg-blue-500 shadow"></div>
            </div>
        </header>
    )
}

export default Header
