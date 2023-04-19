import Image from "next/image"
import { FC } from "react"

const Sidebar: FC = () => {
    const menuItems = [
        "Dashboard",
        "Department",
        "Accounting, Finance",
        "Employee",
        "Token",
        "Attendance",
        "Notification",
        "Announcment",
        "Billing",
        "Settings",
    ]
    const menuItemsIcons = [
        "dashboard",
        "deparment",
        "accounting",
        "employee",
        "token",
        "attendance",
        "notification",
        "announcment",
        "billing",
        "settings",
    ]

    return (
        <aside className="w-15 sticky top-0 grid h-screen overflow-y-scroll bg-blue-500 md:w-72 md:p-6">
            <main className="mt-2 flex flex-col gap-2">
                <header className="flex items-center justify-start text-white">
                    <div className="hidden h-14 w-14 place-content-center rounded-full bg-white md:grid">
                        <Image
                            src={"/../public/images/sidebar/logo.png"}
                            height={26}
                            width={26}
                            alt={"logo_icon"}
                        />
                    </div>
                    <h2 className="ml-6 hidden md:block">Office Management</h2>
                </header>
                {menuItems.map((item, index) => {
                    return (
                        <div
                            key={item}
                            className="hover:text-dark-blue flex cursor-pointer items-center rounded-3xl p-3 text-base font-medium tracking-[0.02rem] text-white duration-300 hover:bg-white hover:text-slate-700 [&>img]:invert [&>img]:hover:invert-0"
                        >
                            <Image
                                src={`/images/sidebar/${menuItemsIcons[index]}.png?v=1`}
                                alt={`${menuItemsIcons[index]}_icon`}
                                height={20}
                                width={20}
                                className="aspect-auto h-5 w-5"
                            />
                            <span className="hidden pl-4 md:block">{item}</span>
                        </div>
                    )
                })}
            </main>
        </aside>
    )
}

export default Sidebar
