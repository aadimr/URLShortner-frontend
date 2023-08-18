function Input({placeholder,className,name,value,onChange,onBlur}) {
  return (
    <div>
      <input placeholder={placeholder} className={className} name={name} value={value} onChange={onChange} onBlur={onBlur}/>
    </div>
  )
}

export default Input;
