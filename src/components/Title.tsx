interface props{
    title:string
}
const Title = ({title}:props) => {
    return(
        <h2 className=" text-4xl text-blue-300 text-center p-2">{title}</h2>
    )
}

export default Title