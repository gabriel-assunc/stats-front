import { TbHomeStats } from "react-icons/tb";
import {
    headerStyle,
    iconStyle
} from "./Styles/headerStyles";
import Link from "next/link";

const Header = () => {
    return <div className={headerStyle()}>
        <Link href="/">
            <TbHomeStats className={iconStyle()} />
        </Link>
    </div>
}

export default Header