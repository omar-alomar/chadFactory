import React from 'react'
import { useState } from 'react'

const FetchTierPrice = ({ tier }) => {
    const [fee, setFee] = useState()
    const [desc, setDesc] = useState()

    let getTierPrice = async () => {
        let response = await fetch(`/api/getTier/${tier}`)
        let data = await response.json()
        setFee(data.monthlyFee)
        setDesc(data.desc)
    }

    getTierPrice()
    

    
    return (
        <>
            <div className='text-xl p-2'>Monthly fee: ${fee}</div>
            <div className='p-2 border border-black'>{desc}</div>
            <div className="text-xs p-2">*All tiers include access to the training facility.</div>
        </>
    )
}

export default FetchTierPrice