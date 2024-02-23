
type cardProps = {
    title : string,
    resume: string,
}

export default function CardAbout({title,resume}:cardProps){
    return(
        <div className='card-about'>
            <div className="note">
                <h2>{title}</h2>
                <p>{resume}</p>
            </div>
        </div>
    )
}