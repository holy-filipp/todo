import { Button, ButtonProps } from '@radix-ui/themes'
import { createLink, LinkComponent } from '@tanstack/react-router'
import * as React from 'react'

interface BasicLinkProps extends ButtonProps {
	children?: React.ReactNode
}

const BasicLinkComponent = React.forwardRef<HTMLAnchorElement, BasicLinkProps>(
	(props, ref) => {
		return (
			<Button {...props} />
		)
	},
)

const CreatedLinkComponent = createLink(BasicLinkComponent)

export const LinkButton: LinkComponent<typeof BasicLinkComponent> = (props) => {
	return <CreatedLinkComponent preload={'intent'} {...props} />
}