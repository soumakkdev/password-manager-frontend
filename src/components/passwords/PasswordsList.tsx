import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function PasswordsList() {
	return (
		<div className="flex-1 p-4 space-y-2">
			<div className="flex items-center justify-between">
				<h2 className="text-xl font-semibold">All Passwords</h2>

				<div className="flex items-center gap-3">
					<Input placeholder="Search passwords" />
					<Button>Add New</Button>
				</div>
			</div>
		</div>
	)
}
