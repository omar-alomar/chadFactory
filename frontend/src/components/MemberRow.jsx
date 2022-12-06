import React from 'react'
import { useState, useEffect } from 'react'

const MemberRow = (member) => {
  const [enableEdit, setEnableEdit] = useState(false)
  const [deleted, setDeleted] = useState(false)
  
  const [fname, setFname] = useState(member.member.fname)
  const [lname, setLname] = useState(member.member.lname)
  const [trainerId, setTrainerId] = useState(member.member.trainerId)
  const [nutritionistId, setNutritionstId] = useState(member.member.nutritionistId)
  const [tier, setTier] = useState(member.member.tier)
  const [email, setEmail] = useState(member.member.email)
  const [address, setAddress] = useState(member.member.address)
  const [phone, setPhone] = useState(member.member.phone)

  const updateMember = async () => {
    fetch(`/api/members/${member.member.id}/update/`, {
      method: "PUT",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fname: fname,
        lname: lname,
        trainerId: trainerId,
        nutritionistId: nutritionistId,
        tier: tier,
        email: email,
        address: address,
        phone: phone,
      })
  })}

  const deleteMember = async () => {
    fetch(`/api/users/${member.member.id}/delete/`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    setDeleted(true)
  }

  const submitEdit = () => {
    updateMember()
    setEnableEdit(false)
  }

  if (deleted) {
    return (
      <>
      </>
    )
  }

  if (!enableEdit) {
    return (
      <>
        <tr>  
          <th className="border-2 border-gray-900 p-1"><textarea readOnly="true" className="resize-none w-full h-full">{member.member.id}</textarea></th>
          <th className="border-2 border-gray-900 p-1"><textarea readOnly="true" className="resize-none w-full h-full">{member.member.fname}</textarea></th>
          <th className="border-2 border-gray-900 p-1"><textarea readOnly="true" className="resize-none w-full h-full">{member.member.lname}</textarea></th>
          <th className="border-2 border-gray-900 p-1"><textarea readOnly="true" className="resize-none w-full h-full">{member.member.trainerId}</textarea></th>
          <th className="border-2 border-gray-900 p-1"><textarea readOnly="true" className="resize-none w-full h-full">{member.member.nutritionistId}</textarea></th>
          <th className="border-2 border-gray-900 p-1"><textarea readOnly="true" className="resize-none w-full h-full">{member.member.tier}</textarea></th>
          <th className="border-2 border-gray-900 p-1"><textarea readOnly="true" className="resize-none w-full h-full">{member.member.lname}</textarea></th>
          <th className="border-2 border-gray-900 p-1"><textarea readOnly="true" className="resize-none w-full h-full">{member.member.created}</textarea></th>
          <th className="border-2 border-gray-900 p-1"><textarea readOnly="true" className="resize-none w-full h-full">{member.member.accType}</textarea></th>
          <th className="border-2 bg-yellow-500 border-gray-900 p-1"><div className="cursor-pointer" onClick={() => setEnableEdit(true)}><textarea className="cursor-pointer resize-none w-full h-full bg-yellow-500">Edit</textarea></div></th>
          <th className="border-2 bg-red-500 border-gray-900 p-1"><div className="cursor-pointer" onClick={deleteMember}><textarea className="cursor-pointer resize-none w-full h-full bg-red-500">Delete</textarea></div></th>
        </tr>
      </>
    )}
  if (enableEdit) {
    return (
      <>
        <tr>  
          <th className="border-2 bg-yellow-500 border-gray-900 p-1"><textarea className="resize-none w-full h-full bg-yellow-500">{member.member.id}</textarea></th>
          <th className="border-2 bg-yellow-500 border-gray-900 p-1"><textarea onChange={(e) => {setFname(e.target.value)}} className="resize-none bg-yellow-500 w-full h-full">{member.member.fname}</textarea></th>
          <th className="border-2 bg-yellow-500 border-gray-900 p-1"><textarea onChange={(e) => {setLname(e.target.value)}} className="resize-none bg-yellow-500 w-full h-full">{member.member.lname}</textarea></th>
          <th className="border-2 bg-yellow-500 border-gray-900 p-1"><textarea onChange={(e) => {setTrainerId(e.target.value)}} className="resize-none bg-yellow-500 w-full h-full">{member.member.trainerId}</textarea></th>
          <th className="border-2 bg-yellow-500 border-gray-900 p-1"><textarea onChange={(e) => {setNutritionstId(e.target.value)}} className="resize-none bg-yellow-500 w-full h-full">{member.member.nutritionistId}</textarea></th>
          <th className="border-2 bg-yellow-500 border-gray-900 p-1"><textarea onChange={(e) => {setTier(e.target.value)}} className="resize-none bg-yellow-500 w-full h-full">{member.member.tier}</textarea></th>
          <th className="border-2 bg-yellow-500 border-gray-900 p-1"><textarea onChange={(e) => {setEmail(e.target.value)}} className="resize-none bg-yellow-500 w-full h-full">{member.member.email}</textarea></th>
          <th className="border-2 bg-yellow-500 border-gray-900 p-1"><textarea onChange={(e) => {setAddress(e.target.value)}} className="resize-none bg-yellow-500 w-full h-full">{member.member.address}</textarea></th>
          <th className="border-2 bg-yellow-500 border-gray-900 p-1"><textarea onChange={(e) => {setPhone(e.target.value)}}className="resize-none bg-yellow-500 w-full h-full">{member.member.phone}</textarea></th>
          <th className="border-2 bg-green-500 border-gray-900 p-1"><div className="cursor-pointer" onClick={submitEdit}>Submit</div></th>
          <th className="border-2 bg-red-500 border-gray-900 p-1"><div className="cursor-pointer" onClick={deleteMember}>Delete</div></th>
        </tr>
      </>
    )
  }
}

export default MemberRow