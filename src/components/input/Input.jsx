function Input({placeholder,className,name,value,onChange,onBlur,type}) {
  return (
    <div>
      <input placeholder={placeholder} className={className} name={name} value={value} onChange={onChange} onBlur={onBlur} type={type}/>
    </div>
  )
}

export default Input;
