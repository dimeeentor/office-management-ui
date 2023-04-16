import { FC } from "react"

type QuickStatisticBlock = {
    title: string
    statistic: number | string
    percentage: number
    timePeriod: string
}

const QuickStatisticBlock: FC<QuickStatisticBlock> = ({
    title,
    statistic,
    percentage,
    timePeriod,
}) => {
    const stringifiedPercentage =
        percentage !== 0
            ? percentage > 0
                ? `+${percentage.toString()}% `
                : `-${percentage.toString()}% `
            : ""

    return (
        <div className="flex h-32 w-full flex-col rounded-2xl bg-white shadow">
            <div className="flex justify-between">
                <div className="relative -top-6 left-6 h-12 w-12 rounded-full bg-blue-900"></div>
                <div className="grow pr-5 pt-3 text-right">
                    <h2 className="text-blue-500">{title}</h2>
                    <p className="text-2xl font-medium text-blue-700">
                        {statistic.toString()}
                    </p>
                </div>
            </div>
            <hr className="mt-2" />
            <p className="max-md::text-sm my-auto pl-5 font-light">
                <span className="font-bold text-green-600">
                    {stringifiedPercentage}
                </span>
                {timePeriod}
            </p>
        </div>
    )
}

export default QuickStatisticBlock
