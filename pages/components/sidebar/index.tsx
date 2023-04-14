import Image from "next/image"

export default function Sidebar() {
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
        <aside className="h-screen w-72 bg-dark-blue p-6">
            <header className="flex items-center justify-start text-white">
                <div className="mr-8 grid h-14 w-14 place-content-center rounded-full bg-white">
                    <Image
                        src={"/../public/images/sidebar/logo.png"}
                        height={26}
                        width={26}
                        alt={"logo_icon"}
                    />
                </div>
                <h2>Miicon Protocol</h2>
            </header>
            <main className="mt-2 flex flex-col gap-2">
                {menuItems.map((item, index) => {
                    return (
                        <div className="mt-1 flex cursor-pointer items-center rounded-2xl p-3 text-base font-medium tracking-[0.02rem] text-white duration-300 hover:bg-white hover:text-dark-blue [&>img]:hover:invert">
                            <Image
                                src={`/../public/images/sidebar/${menuItemsIcons[index]}.png`}
                                alt={`${menuItemsIcons[index]}_icon`}
                                height={20}
                                width={20}
                                className="mr-4"
                            />
                            <span>{item}</span>
                        </div>
                    )
                })}
            </main>
        </aside>
    )
}