import { FC } from "react"

type TimeTable = {
    currentDate: string
    children: React.ReactNode | React.ReactNode[]
}

const TimeTable: FC<TimeTable> = ({ currentDate, children }) => {
    return (
        <section className="h-auto w-full rounded-2xl bg-white p-6 text-blue-900 shadow">
            <h2 className="pb-5 font-bold">Attendance</h2>
            <div className="grid w-full grid-cols-8 gap-10 border-b-[1px] border-slate-400 pb-2">
                <p className="col-span-2">{currentDate}</p>
                <p>Check In</p>
                <p>Check Out</p>
                <p>Working HR's</p>
                <p>Break Time</p>
                <p>Extra HR's</p>
                <p>Status</p>
            </div>
            {children}
        </section>
    )
}

export default TimeTable
