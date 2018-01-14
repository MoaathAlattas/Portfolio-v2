import React from 'react'
import MainLayout from '@layouts/Main.layout'
import Counter from '@components/Counter'

const Page = () =>(
<MainLayout pageTitle="Page">
    <h1>Page</h1>
    <Counter />
</MainLayout>
)

export default Page