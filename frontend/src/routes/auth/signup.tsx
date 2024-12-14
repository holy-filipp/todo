import { Button, Checkbox, Flex, Text, TextField } from '@radix-ui/themes'
import { createFileRoute } from '@tanstack/react-router'
import { UserPlus } from 'lucide-react'
import { LinkText } from '~/components/common/LinkText'

export const Route = createFileRoute('/auth/signup')({
	component: Signup
})

function Signup() {
	return (
		<Flex align="center" justify="center" height="100vh">
			<Flex gap="4" p="4" direction="column" align="center" style={{ backgroundColor: "var(--gray-a2)", borderRadius: "var(--radius-4)" }}>
				<Text size="6">Signup</Text>
				<Flex width="250px" direction="column" gap="2">
					<label>
						<Text as="div" size="2" mb="1" weight="bold">
							Username
						</Text>
						<TextField.Root placeholder="Enter your username" />
					</label>
					<label>
						<Text as="div" size="2" mb="1" weight="bold">
							Full name
						</Text>
						<TextField.Root placeholder="Enter your name and surname" />
					</label>
					<label>
						<Text as="div" size="2" mb="1" weight="bold">
							Password
						</Text>
						<TextField.Root placeholder="Enter your password" />
					</label>
					<label>
						<Text as="div" size="2" mb="1" weight="bold">
							Confirm
						</Text>
						<TextField.Root placeholder="Enter your password again" />
					</label>
					<Button>
						<UserPlus size="16" />
						Sign Up
					</Button>
					<Text as="label" size="2">
						<Flex gap="2">
							<Checkbox defaultChecked />
							Stay logged in
						</Flex>
					</Text>
					<Flex justify="between" align="center">
						<LinkText size="2" to="/">Back to main page</LinkText>
						<LinkText size="2" to="/auth/login">Log In</LinkText>
					</Flex>
				</Flex>
			</Flex>
		</Flex >
	)
}