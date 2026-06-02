import next from 'next';
import { revalidatePath } from 'next/cache';
import React from 'react'

interface user{
    id: number;
    name: string;
    email: string;
}

const UserPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {next: {revalidate: 10}});
    const users: user[] = await res.json();
  return (
    <div>
        <h1>User Page</h1>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>E-mail</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => <tr key={user.id}>
                    <th>{user.name}</th>
                    <th>{user.email}</th>
                </tr>)}
            </tbody>
            
        </table>
    </div>
  )
}

export default UserPage