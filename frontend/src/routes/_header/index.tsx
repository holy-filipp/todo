import { Grid } from '@radix-ui/themes';
import { createFileRoute } from '@tanstack/react-router';
import TodoColumn, { TodoCardStructure } from '~/components/todocolumn/TodoColumn';

export const Route = createFileRoute('/_header/')({
	component: HomeComponent,
});

const cards: TodoCardStructure[] = [
	{
		id: 1,
		text: "Card 1",
		tags: [
			{
				color: "plum",
				text: "Tag 1"
			},
			{
				color: "plum",
				text: "Tag 2"
			}
		],
		isDone: false,
	},
	{
		id: 2,
		text: "Card 2",
		tags: [
			{
				color: "plum",
				text: "Tag 1"
			},
			{
				color: "plum",
				text: "Tag 2"
			}
		],
		isDone: false,
	},
	{
		id: 3,
		text: "Card 3",
		tags: [
			{
				color: "plum",
				text: "Tag 1"
			},
			{
				color: "plum",
				text: "Tag 2"
			}
		],
		isDone: true,
	},
	{
		id: 4,
		text: "Card 4",
		tags: [
			{
				color: "plum",
				text: "Tag 1"
			},
			{
				color: "plum",
				text: "Tag 2"
			}
		],
		isDone: false,
	},
	{
		id: 5,
		text: "Card 5",
		tags: [
			{
				color: "plum",
				text: "Tag 1"
			},
			{
				color: "plum",
				text: "Tag 2"
			}
		],
		isDone: true,
	}, {
		id: 6,
		text: "Card 6",
		tags: [
			{
				color: "plum",
				text: "Tag 1"
			},
			{
				color: "plum",
				text: "Tag 2"
			}
		],
		isDone: false,
	}
]

function HomeComponent() {
	return (
		<Grid columns="4" gap="3">
			<TodoColumn cards={cards} title="To Do" />
			<TodoColumn cards={[]} title="Doing" />
			<TodoColumn cards={[]} title="Checking" />
			<TodoColumn cards={[]} title="Done" />
		</Grid>
	);
}