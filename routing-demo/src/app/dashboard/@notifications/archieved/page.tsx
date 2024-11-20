import Card from '@/components/card'
import Link from 'next/link'
import React from 'react'

function ArchievedNotifications() {
    return (
        <>
            <Card>
                Archieved Notifications
                <Link href='/dashboard'>Default</Link>
            </Card>
        </>
    )
}

export default ArchievedNotifications 