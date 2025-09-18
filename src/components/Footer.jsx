import React from 'react'
export default function Footer(){
  return (
    <footer className="bg-blue-50 mt-10 py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6 text-gray-700">
        <div>
          <h4 className="font-bold text-blue-600">E-Commerce</h4>
          <p className="text-sm mt-2">Free-forever hospitality and travel solutions.</p>
        </div>
        <div>
          <h4 className="font-semibold">Information</h4>
          <ul className="text-sm mt-2 space-y-1"><li>About Us</li><li>Privacy</li><li>Terms</li></ul>
        </div>
        <div>
          <h4 className="font-semibold">My Account</h4>
          <ul className="text-sm mt-2 space-y-1"><li>Login</li><li>Register</li></ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <address className="text-sm not-italic mt-2">E-Comm, 4578 Marmora Road, Glasgow D04 89GR</address>
        </div>
      </div>
    </footer>
  )
}
