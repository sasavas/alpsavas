import { Icon, IconifyIcon } from "@iconify/react/dist/iconify.js";
import homeIcon from "@iconify-icons/mdi/home-outline";
import fileMultipleIcon from "@iconify-icons/mdi-light/file-multiple";

const NavMenu = () => {
    return (
        <div className="flex flex-row gap-2">
            <NavMenuItem title="Home" icon={homeIcon} href="/" />
            <NavMenuItem title="Blog" icon={fileMultipleIcon} href="/" />
        </div>
    );
};

export default NavMenu;

interface NavMenuItemProps {
    icon: IconifyIcon,
    title: string,
    href: string,
}

const NavMenuItem: React.FC<NavMenuItemProps> = ({icon, title, href}) => {
    return (
        <a href={href} className="w-14 h-14 border-2 border-sky-100 rounded-full p-2 flex flex-col justify-center items-center hover:bg-sky-100 cursor-pointer">
            <Icon icon={icon} className="w-6 h-6"></Icon>
            <span className="text-xs">{title}</span>
        </a>
    );
};