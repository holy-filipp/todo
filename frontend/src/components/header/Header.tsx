import { Box, Container, Flex, Text } from "@radix-ui/themes";
import { Link } from "@tanstack/react-router";
import { ListTodo, LogIn, UserPlus } from "lucide-react";
import { LinkButton } from "../common/LinkButton";

export default function Header() {
	return (
		<Box pt="2" pb="2" style={{ background: "var(--gray-a2)" }}>
			<Container>
				<Flex direction="row" align="center" justify="between">
					<Link to="/">
						<Flex direction="row" align="center" gap="1">
							<ListTodo />
							<Text size="4" weight="medium">
								To Do
							</Text>
						</Flex>
					</Link>
					<Flex direction="row" align="center" gap="2">
						<LinkButton to="/auth/login" variant="surface">
							<LogIn size={16} />
							Log In
						</LinkButton>
						<LinkButton to="/auth/signup">
							<UserPlus size={16} />
							Sign Up
						</LinkButton>
					</Flex>
				</Flex>
			</Container>
		</Box>
	)
}