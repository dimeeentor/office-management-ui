import { Inter } from "next/font/google"
import Sidebar from "./components/sidebar"
import Header from "./components/header"
import QuickStatisticBlock from "./components/quick-statistic-block"
import DetailStatisticBlock from "./components/detail-statistic-block"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
    return (
        <main className="grid-cols-sidebar grid">
            <Sidebar />
            <section className="col-start-2 col-end-4 grid auto-rows-max p-5">
                <Header />
                <section className="mt-12 flex gap-5">
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
                </section>
                <section className="w-full overflow-x-scroll rounded-2xl">
                    <div className="mt-12 flex w-fit gap-5">
                        <DetailStatisticBlock
                            title={"Engineering and Development"}
                            statistic={"Total Employee: 245"}
                            timePeriod={"2 days"}
                        />
                        <DetailStatisticBlock
                            title={"Marketing and Sales"}
                            statistic={"Total Employee: 245"}
                            timePeriod={"5 days"}
                        />
                        <DetailStatisticBlock
                            title={"Accounting and Finance"}
                            statistic={"Total Employee: 245"}
                            timePeriod={"day"}
                        />
                        <DetailStatisticBlock
                            title={"Human Resources"}
                            statistic={"Total Employee: 245"}
                            timePeriod={"6 days"}
                        />
                        <DetailStatisticBlock
                            title={"Engineering and Development"}
                            statistic={"Total Employee: 245"}
                            timePeriod={"2 days"}
                        />
                        <DetailStatisticBlock
                            title={"Marketing and Sales"}
                            statistic={"Total Employee: 245"}
                            timePeriod={"5 days"}
                        />
                        <DetailStatisticBlock
                            title={"Accounting and Finance"}
                            statistic={"Total Employee: 245"}
                            timePeriod={"day"}
                        />
                        <DetailStatisticBlock
                            title={"Human Resources"}
                            statistic={"Total Employee: 245"}
                            timePeriod={"6 days"}
                        />
                    </div>
                </section>
            </section>
        </main>
    )
}
