import { Inter } from "next/font/google"
import Sidebar from "./components/sidebar"
import Header from "./components/header"
import QuickStatisticBlock from "./components/quick-statistic-block"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
    return (
        <main className="flex">
            <Sidebar />
            <main className="w-full flex-1-custom p-5">
                <Header />
                <div className="mt-12 flex justify-evenly gap-5">
                    <QuickStatisticBlock
                        title="Active Employee"
                        statistic={1081}
                        percentage={55}
                        timePeriod={"than last week"}
                    />
                    <QuickStatisticBlock
                        title="Total Employee"
                        statistic={2300}
                        percentage={3}
                        timePeriod={"than last week"}
                    />
                    <QuickStatisticBlock
                        title="Total Task"
                        statistic={34}
                        percentage={1}
                        timePeriod={"than yesterday"}
                    />
                    <QuickStatisticBlock
                        title="Attendance"
                        statistic={"+91"}
                        percentage={0}
                        timePeriod={"Just updated"}
                    />
                </div>
            </main>
        </main>
    )
}
