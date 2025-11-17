import React from 'react'

function Footer() {
  return (
        <footer className="bg-white border-t py-4 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Task Manager • Developed by Danushka Senevirathne
      </footer>
  )
}

export default Footer