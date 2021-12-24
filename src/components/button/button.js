import './button.scss'

export default function Button ({ 
    className = '', 
    size = '', 
    color = '', 
    type = 'button', 
    onClick = () => {},
    children = null 
}) {

    return (
        <button 
            className = {
                `btn
                ${className}
                ${color? `btn_${color}` : ''}
                ${size? `btn_${size}` : ''}`
            }
            type = {type}
            onClick = {onClick}
        >
            {children}
        </button>
    )
}