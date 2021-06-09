interface RecipeProps {
    label: string,
    url: string
}


const Recipe: React.FunctionComponent<RecipeProps> = ({ label, url }) => {
    return (
        <div>
            <p>{label}</p>
            <p>{url}</p>
        </div>
    )
}

export { Recipe }