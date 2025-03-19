interface PageHeaderProps {
    children?: React.ReactNode;
    title: string;
    subtitle: string;
}
const PageHeader = ({ children, title, subtitle }: PageHeaderProps) => {
    return (
        <section className="font-mulish bg-options py-[53px] md:py-[53px] lg:py-[103px] rounded-xl text-white flex flex-col items-center gap-y-10" style={{ backgroundImage: "url(./header_2_bg.png)" }}>
            <div className="flex flex-col items-center gap-y-3.5 text-center w-10/12 md:w-8/12">
                <h4 className="font-raleway font-bold text-xl md:text-3xl lg:text-5xl">{title}</h4>
                <p className="text-[10px] md:text-xs lg:text-sm font-semibold">{subtitle}</p>
            </div>
            {children}
        </section>
    )
}

export default PageHeader