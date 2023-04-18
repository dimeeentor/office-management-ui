import { FC } from "react"

type TimeTable = {
    fullName: string
    position: string
    checkIn: [number, number]
    checkOut: [number, number]
    workingHR: [number, number]
    breakTime: [number, number]
    extraHR: number
}

const Member: FC<TimeTable> = ({
    fullName,
    position,
    checkIn,
    checkOut,
    workingHR,
    breakTime,
    extraHR,
}) => {
    const checkInString = `${checkIn[0] < 10 ? "0" : ""}${checkIn[0]}:${
        checkIn[1]
    }`
    const checkOutString = `${checkOut[0] < 10 ? "0" : ""}${checkOut[0]}:${
        checkOut[1]
    }`
    const workingHRString = `${workingHR[0] < 10 ? "0" : ""}${workingHR[0]}hr ${
        workingHR[1] < 10 ? `0${workingHR[1]}min` : `${workingHR[1]}min`
    }`
    const breakTimeString = `${breakTime[0] ? `${breakTime[0]}hr ` : ""}${
        breakTime[1] < 10 ? `0${breakTime[1]}min` : `${breakTime[1]}min`
    }`
    const extraHRString = !extraHR ? "--:--" : `(+)${extraHR}min`
    const isLateString =
        checkIn[0] >= 9 && checkIn[1] >= 36 ? "Late" : "In Time"

    return (
        <div className="grid grid-cols-8 gap-10 pt-5">
            <div className="col-start-1 col-end-3 flex items-center">
                <div className="aspect-square h-10 w-10 rounded-full bg-blue-500 shadow"></div>
                <div className="ml-3">
                    <h2>{fullName}</h2>
                    <p className="text-sm text-blue-800">{position}</p>
                </div>
            </div>
            <p
                className={`${
                    checkIn[0] >= 10 || checkIn[1] >= 36
                        ? "text-red-600"
                        : "text-green-600"
                }`}
            >
                {checkInString}
            </p>
            <p
                className={`${
                    checkOut[0] < 18 ? "text-red-600" : "text-green-600"
                }`}
            >
                {checkOutString}
            </p>
            <p
                className={`${
                    workingHR[0] < 9 ? "text-yellow-600" : "text-blue-800"
                }`}
            >
                {workingHRString}
            </p>
            <p
                className={`${
                    breakTime[0] ? "text-red-600" : "text-green-600"
                }`}
            >
                {breakTimeString}
            </p>
            <p className={"text-blue-400"}>{extraHRString}</p>
            <p
                className={`${
                    checkIn[0] >= 9 && checkIn[1] >= 36
                        ? "text-red-600"
                        : "text-green-600"
                }`}
            >
                {isLateString}
            </p>
        </div>
    )
}

export default Member
