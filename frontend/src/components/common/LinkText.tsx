import { Link, LinkProps } from '@radix-ui/themes'
import { createLink, LinkComponent } from '@tanstack/react-router'
import * as React from 'react'

interface BasicLinkProps extends LinkProps {
	children?: React.ReactNode
}

const BasicLinkComponent = React.forwardRef<HTMLAnchorElement, BasicLinkProps>(
	(props, ref) => {
		return (
			<Link {...props} />
		)
	},
)

const CreatedLinkComponent = createLink(BasicLinkComponent)

export const LinkText: LinkComponent<typeof BasicLinkComponent> = (props) => {
	return <CreatedLinkComponent preload={'intent'} {...props} />
}