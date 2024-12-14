import { Card, Flex } from "@radix-ui/themes";
import update from "immutability-helper";
import { AnimatePresence } from "motion/react";
import { useCallback, useState } from "react";
import { useDrop } from "react-dnd";
import TodoCard, { Tag } from "../todocard/TodoCard";

export interface TodoCardStructure {
	id: number,
	text: string,
	tags: Tag[],
	isDone: boolean
}

interface TodoColumnProps {
	title: string,
	cards: TodoCardStructure[]
}

// style={{ backgroundColor: "var(--accent-a2)", border: "1px dashed var(--accent-a6)", borderRadius: "var(--radius-3)" }}

export default function TodoColumn(props: TodoColumnProps) {
	const [cards, setCards] = useState(props.cards);

	const findCard = useCallback(
		(id: number) => {
			const card = cards.filter((c: TodoCardStructure) => c.id === id)[0];

			return { card, index: cards.indexOf(card) }
		},
		[cards]
	);

	const moveCard = useCallback(
		(id: number, atIndex: number) => {
			const { card, index } = findCard(id);

			setCards(
				update(cards, {
					$splice: [
						[index, 1],
						[atIndex, 0, card]
					]
				})
			);
		},
		[findCard, cards, setCards]
	)

	const [, drop] = useDrop(() => ({
		accept: "TodoCard"
	}));

	return (
		<Flex ref={drop} direction="column" gap="3">
			<Card>
				<Flex align="center" justify="center">{props.title}</Flex>
			</Card>
			<AnimatePresence>
				{cards.map((card) => {
					return (
						<TodoCard key={card.id} id={card.id} isDone={card.isDone} tags={card.tags} moveCard={moveCard} findCard={findCard}>{card.text}</TodoCard>
					)
				})}
			</AnimatePresence>
		</Flex>
	)
}