function Tooltip({ open }) {
  return (
    <div className={`tooltip-card ${open ? '' : 'hidden'}`}>
      <strong>Helpful tip:</strong> Use the contact form to share your project idea,
      internship opportunity, or collaboration request.
    </div>
  )
}

export default Tooltip
