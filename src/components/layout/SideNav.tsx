import { Lock } from 'lucide-react'
import React from 'react'

export default function SideNav() {
	return (
		<div className="w-80 bg-muted p-4 space-y-2">
			<div className="flex items-center gap-2">
				<Lock className="h-4 w-4" />
				<span>All Passwords</span>
			</div>
		</div>
	)
}
