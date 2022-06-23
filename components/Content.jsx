const Content = ({title,body,userId,id}) => {
    return (
        <div className="flex flex-col p-5 shadow-lg mb-2 hover:bg-blue-600 hover:text-white rounded-xl duration-300 hover:scale-[101%]">
            <h1 className="font-bold text-xl">{title}</h1>
            <p className="">{body}</p>
        </div>
    )
}
export default Content;