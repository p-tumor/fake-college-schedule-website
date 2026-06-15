// @ts-expect-error
const Class = ({name, time}) =>{
    return<>
    <p className='class'>
        {name}
        <br/>
        {time}
    </p>
    </>;
}

export default Class;