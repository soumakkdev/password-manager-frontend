import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import DataTable from '../widgets/DataTable'
import { ColumnDef } from '@tanstack/react-table'

interface IPassword {
	name: string
	username: string
	updatedOn: string
}

const data = [
	{
		name: 'Amazon.in',
		username: 'johnywalker24',
		updatedOn: '2024-09-26T14:11:12.333Z',
	},
	{
		name: 'Spotify.com',
		username: 'johnywalker',
		updatedOn: '2024-02-26T14:11:12.333Z',
	},
]

export default function PasswordsList() {
	const columns: ColumnDef<IPassword>[] = [
		{
			accessorKey: 'name',
			header: 'Name',
		},
		{
			accessorKey: 'username',
			header: 'Username',
		},
		{
			accessorKey: 'updatedOn',
			header: 'Last updated on',
		},
	]

	return (
		<div className="flex-1 p-4 space-y-4">
			<div className="flex items-center justify-between">
				<h2 className="text-xl font-semibold">All Passwords</h2>

				<div className="flex items-center gap-3">
					<Input placeholder="Search passwords" />
					<Button>Add New</Button>
				</div>
			</div>

			<DataTable columns={columns} data={data} />
		</div>
	)
}
