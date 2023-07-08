const Page = ({data}) =>{
    return (
        <div>
            <h1>Index que lo muestra la carpeta madre evets</h1>
            <div>
                {data.map((ev) =>(
                    <a key={ev.id} href={`/events/${ev.id}`}>
                        <img src={ev.image} alt={ev.title} width={300} height={300}/>
                        <h2>{ev.title}</h2>
                    </a>
                ))}
                
            </div>
        </div>
    )
}

export default Page;

export async function getStaticProps() {
    const { events_categories } = await import('../../data/data.json');
    console.log(events_categories);
    return{
        props: {
            data: events_categories,
        },
    }
}