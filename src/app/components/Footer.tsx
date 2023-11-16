import Link from "next/link";
import { useRouter } from "next/navigation";

const Footer = () => {
    const router = useRouter;

    return (
			<footer>
                <Link href={'/'}> Laure-Web </Link>
                | Novembre 2023 | V1.1.0 |
				<Link href={'/pages/legal'}> Mentions Légales </Link>
			</footer>
		);
};

export default Footer;