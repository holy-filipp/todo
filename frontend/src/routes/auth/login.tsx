import { Button, Checkbox, Flex, IconButton, Text, TextField } from '@radix-ui/themes'
import { createFileRoute } from '@tanstack/react-router'
import { Eye, EyeClosed, LogIn } from 'lucide-react'
import { useState } from 'react'
import { LinkText } from '~/components/common/LinkText'

export const Route = createFileRoute('/auth/login')({
	component: Login
})

function Login() {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<Flex align="center" justify="center" height="100vh">
			<Flex gap="4" p="4" direction="column" align="center" style={{ backgroundColor: "var(--gray-a2)", borderRadius: "var(--radius-4)" }}>
				<Text size="6">Login</Text>
				<Flex width="250px" direction="column" gap="2">
					<label>
						<Text as="div" size="2" mb="1" weight="bold">
							Username
						</Text>
						<TextField.Root placeholder="Enter your username" />
					</label>
					<label>
						<Text as="div" size="2" mb="1" weight="bold">
							Password
						</Text>
						<TextField.Root type={!showPassword ? "password" : "text"} placeholder="Enter your password">
							<TextField.Slot side="right">
								<IconButton onClick={() => { setShowPassword(!showPassword) }} size="1" variant="ghost">
									{!showPassword ? <Eye size="16" /> : <EyeClosed size="16" />}
								</IconButton>
							</TextField.Slot>
						</TextField.Root>
					</label>
					<Button>
						<LogIn size="16" />
						Log In
					</Button>
					<Text as="label" size="2">
						<Flex gap="2">
							<Checkbox defaultChecked />
							Stay logged in
						</Flex>
					</Text>
					<Flex justify="between" align="center">
						<LinkText size="2" to="/">Back to main page</LinkText>
						<LinkText size="2" to="/auth/signup">Sign Up</LinkText>
					</Flex>
				</Flex>
			</Flex>
		</Flex >
	)
}