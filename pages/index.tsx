import { Inter } from "next/font/google"
import Sidebar from "./components/sidebar"
import Header from "./components/header"
import QuickStatisticBlock from "./components/quick-statistic-block"
import DetailStatisticBlock from "./components/detail-statistic-block"
import TimeTable from "./components/time-table"
import Member from "./components/time-table/member"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
    return (
        <main className="m-auto grid max-w-7xl">
            <Sidebar />
            <section className="col-start-2 col-end-3 grid place-content-baseline gap-12 p-5">
                <Header />
                <section className="grid gap-10 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
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
                <section className="scrollbar-hide h-fit overflow-x-scroll rounded-2xl">
                    <div className="flex w-fit gap-5">
                        <DetailStatisticBlock
                            title={"Engineering and Development"}
                            statistic={"Total Employee: 245"}
                            timePeriod={"2 days"}
                            imageSrcName={"engineering"}
                        />
                        <DetailStatisticBlock
                            title={"Marketing and Sales"}
                            statistic={"Total Employee: 245"}
                            timePeriod={"5 days"}
                            imageSrcName={"marketing"}
                        />
                        <DetailStatisticBlock
                            title={"Accounting and Finance"}
                            statistic={"Total Employee: 245"}
                            timePeriod={"day"}
                            imageSrcName={"wallet"}
                        />
                        <DetailStatisticBlock
                            title={"Human Resources"}
                            statistic={"Total Employee: 245"}
                            timePeriod={"6 days"}
                            imageSrcName={"hr"}
                        />
                        <DetailStatisticBlock
                            title={"Engineering and Development"}
                            statistic={"Total Employee: 245"}
                            timePeriod={"2 days"}
                            imageSrcName={"engineering"}
                        />
                        <DetailStatisticBlock
                            title={"Marketing and Sales"}
                            statistic={"Total Employee: 245"}
                            timePeriod={"5 days"}
                            imageSrcName={"marketing"}
                        />
                        <DetailStatisticBlock
                            title={"Accounting and Finance"}
                            statistic={"Total Employee: 245"}
                            timePeriod={"day"}
                            imageSrcName={"wallet"}
                        />
                        <DetailStatisticBlock
                            title={"Human Resources"}
                            statistic={"Total Employee: 245"}
                            timePeriod={"6 days"}
                            imageSrcName={"hr"}
                        />
                    </div>
                </section>
                <TimeTable currentDate="07.07.2023">
                    <Member
                        fullName={"Syed Mahamudul Hasan"}
                        position="Flutter Developer"
                        checkIn={[9, 36]}
                        checkOut={[18, 55]}
                        workingHR={[9, 12]}
                        breakTime={[0, 45]}
                        extraHR={30}
                    />
                    <Member
                        fullName={"Syed Mahamudul Hasan"}
                        position="Flutter Developer"
                        checkIn={[9, 36]}
                        checkOut={[18, 55]}
                        workingHR={[9, 12]}
                        breakTime={[0, 45]}
                        extraHR={30}
                    />
                    <Member
                        fullName={"Syed Mahamudul Hasan"}
                        position="Flutter Developer"
                        checkIn={[8, 26]}
                        checkOut={[19, 55]}
                        workingHR={[10, 12]}
                        breakTime={[0, 45]}
                        extraHR={30}
                    />
                    <Member
                        fullName={"Syed Mahamudul Hasan"}
                        position="Flutter Developer"
                        checkIn={[9, 15]}
                        checkOut={[18, 55]}
                        workingHR={[9, 35]}
                        breakTime={[0, 45]}
                        extraHR={30}
                    />
                    <Member
                        fullName={"Syed Mahamudul Hasan"}
                        position="Flutter Developer"
                        checkIn={[9, 36]}
                        checkOut={[18, 55]}
                        workingHR={[9, 12]}
                        breakTime={[0, 45]}
                        extraHR={30}
                    />
                    <Member
                        fullName={"Syed Mahamudul Hasan"}
                        position="Flutter Developer"
                        checkIn={[9, 36]}
                        checkOut={[18, 55]}
                        workingHR={[9, 12]}
                        breakTime={[0, 45]}
                        extraHR={30}
                    />
                </TimeTable>
            </section>
        </main>
    )
}
