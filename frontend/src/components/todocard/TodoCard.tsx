import { Badge, BadgeProps, Card, Checkbox, Flex, Text } from "@radix-ui/themes";
import { motion } from "motion/react";
import { useRef } from "react";
import { useDrag, useDrop, XYCoord } from "react-dnd";
import { TodoCardStructure } from "../todocolumn/TodoColumn";

export interface Tag {
	color: BadgeProps["color"],
	text: string,
}

interface TodoCardProps {
	id: number,
	children?: React.ReactNode,
	tags: Tag[],
	isDone: boolean,
	moveCard: (id: number, to: number) => void,
	findCard: (id: number) => { card: TodoCardStructure, index: number }
}

interface Item {
	id: number,
	originalIndex: number
}

export default function TodoCard(props: TodoCardProps) {
	const ref = useRef<HTMLDivElement>(null)

	const originalIndex = props.findCard(props.id).index;

	const [{ isDragging }, drag] = useDrag(() => ({
		type: "TodoCard",
		item: { id: props.id, originalIndex },
		collect: monitor => ({
			isDragging: monitor.isDragging()
		}),
		end: (item, monitor) => {
			const { id, originalIndex } = item;
			const didDrop = monitor.didDrop();

			if (!didDrop) {
				props.moveCard(id, originalIndex);
			}
		}
	}), [props.id, originalIndex, props.moveCard]);

	const [, drop] = useDrop(() => ({
		accept: "TodoCard",
		hover(item: Item, monitor) {
			const { index: overIndex } = props.findCard(props.id)

			if (!ref.current) {
				return
			}
			const dragIndex = item.originalIndex
			const hoverIndex = overIndex

			if (dragIndex === hoverIndex) {
				return
			}

			const hoverBoundingRect = ref.current?.getBoundingClientRect()

			const hoverMiddleY =
				(hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

			const clientOffset = monitor.getClientOffset()

			const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

			if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
				return
			}

			if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
				return
			}

			props.moveCard(item.id, hoverIndex)

			item.originalIndex = hoverIndex
		}
	}), [props.findCard, props.moveCard, props.id]);

	drag(drop(ref));

	return (
		<motion.div
			ref={ref}
			layout
			exit={{ opacity: 0 }}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}>
			<Text as="label" size="2">
				<Card style={{ opacity: isDragging ? 0.5 : 1 }}>
					<Flex direction="column" gap="2">
						<Flex gap="2">
							<Checkbox defaultChecked={props.isDone} />
							{props.children ?? "No content"}
						</Flex>
						<Flex gap="2" wrap="wrap">
							{props.tags.map((tag, i) => {
								return (
									<Badge key={i} color={tag.color} style={{ maxWidth: "100%", overflow: "hidden", textOverflow: "ellipsis", display: "inline-block" }}>{tag.text}</Badge>
								)
							})}
						</Flex>
					</Flex>
				</Card>
			</Text>
		</motion.div>
	)
}