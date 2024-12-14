import { Theme } from "@radix-ui/themes";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	return (
		<Theme appearance="dark" accentColor="violet">
			<DndProvider backend={HTML5Backend}>
				<Outlet />
			</DndProvider>
		</Theme>
	);
}