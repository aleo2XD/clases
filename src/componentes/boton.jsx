export default function Boton({ children, onClick, type = 'button' }) {
    return (
        <button type={type} className="Boton" onClick={onClick}>
            {children}
        </button>
    )
}