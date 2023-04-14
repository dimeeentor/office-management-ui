import { Inter } from "next/font/google"
import Sidebar from "./components/sidebar"
import Header from "./components/header"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
    return (
        <main className="flex">
            <Sidebar />
            <main className="w-full flex-1-custom">
                <Header />
            </main>
        </main>
    )
}
