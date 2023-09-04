import React,{Fragment} from 'react'
import ContactUs from './ContactUs';

export default function StoreContact() {

  async function ContactHandler(movie){
    const res=await fetch('https://ecom-contactus-3d230-default-rtdb.firebaseio.com/contact.json',{
      method: 'POST',
      body: JSON.stringify(movie),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    console.log(data)
  }
  return (
    <Fragment>
      <ContactUs onAddContact={ContactHandler}/>
    </Fragment>
  )
}
