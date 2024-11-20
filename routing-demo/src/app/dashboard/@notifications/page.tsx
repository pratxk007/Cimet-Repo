import Card from '@/components/card'
import Link from 'next/link'
import React from 'react'

function Notifications() {
    return (
        <>
            <Card>
                Notification
                <Link href='/dashboard/archieved'>Archieved</Link>
            </Card>
        </>
    )
}

export default Notifications 