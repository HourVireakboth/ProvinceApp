export const Button = ({label,type="button",onClick}) => {
    return (
        <button onClick={onClick} type={type} className="p-2 bg-white text-black">{label}</button>
    )
}