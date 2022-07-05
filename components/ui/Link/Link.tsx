import NextLink from "next/link";

const Link = ({ href, children, ...args }: { href: string; children: React.ReactNode }) => {
	return (
		<NextLink href={href}>
			<a>{children}</a>
		</NextLink>
	);
};

export default Link;
