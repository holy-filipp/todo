import { Container } from "@radix-ui/themes";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import Header from "~/components/header/Header";

export const Route = createRootRoute({
	component: HeaderLayout,
});

function HeaderLayout() {
	return (
		<>
			<Header />
			<Container mt="3">
				<Outlet />
			</Container>
		</>
	);
}