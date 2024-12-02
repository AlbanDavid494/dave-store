import React, { useEffect } from 'react'
import { store } from '../../../lib/store'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../../lib/firebase'
import UserInfo from '../../Component/UserInfo/UserInfo'
import Registration from '../../Component/Registration/Registration'
import Loading from '../../Component/Loading/Loading'

const Profile = () => {
const { currentUser, getUserInfo, isLoading } = store()

useEffect(()=>{
  const unSub = onAuthStateChanged(auth, (user) => {
    getUserInfo(user?.uid)
  })
  return () => {
    unSub()
  }
}, [getUserInfo])


  return (
    <div className='container lg:p-12'>
     
      {currentUser ?
       <UserInfo currentUser={currentUser} /> : <Registration />}

      {isLoading && <Loading />}
    </div>
  )
}

export default Profile
