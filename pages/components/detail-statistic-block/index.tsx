import { FC } from "react"
import Image from "next/image"

type DetailStatisticBlock = {
    title: string
    statistic: string
    timePeriod: string
}

const DetailStatisticBlock: FC<DetailStatisticBlock> = ({
    title,
    statistic,
    timePeriod,
}) => (
    <div className="grid h-64 w-64 rounded-2xl bg-white p-5 shadow">
        <Image
            src={"/../public/images/detail-statistic-block/engineering.png"}
            alt="engineering_icon"
            height={50}
            width={50}
            className="text-center"
        />
        <h2 className="justify-self-start font-bold text-blue-800">{title}</h2>
        <hr className="mt-5 pb-5" />
        <div>
            <p className="pb-2 text-sm font-bold text-green-500">{statistic}</p>
            <p className="text-sm font-light text-gray-400">
                Updated {timePeriod} ago
            </p>
        </div>
    </div>
)

export default DetailStatisticBlock
