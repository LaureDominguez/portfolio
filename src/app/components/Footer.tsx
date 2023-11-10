import Link from "next/link";
import { useRouter } from "next/navigation";

const Footer = () => {
    const router = useRouter;

    return (
			<footer>
                <Link href={'/'}> Laure-Web </Link>
                | 2023 |
				<Link href={'/pages/legal'}> Mentions Légales </Link>
			</footer>
		);
};

export default Footer;