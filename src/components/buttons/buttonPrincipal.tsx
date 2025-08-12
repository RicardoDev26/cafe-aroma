interface Props {
    className?: string
    onClick?: () => void
    title: string
}

export default function ButtonPrincipal({ className = "", onClick, title }:Props){
    const baseStyles = "border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary/5 transition-colors"

    return(
        <button
            onClick={onClick}
            className={`${baseStyles} ${className}`}
        >
            {title}
        </button>
    )
}