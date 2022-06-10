import Tour from './tour'

const Tours = ({tours, removeTour}) =>{
  return (
    <>
      <section>
      <div className="title">
        <h2>Notícias</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour,key)=>{
          return <Tour key={key} {...tour} removeTour={removeTour} />
        })}
      </div>
    </section>
    </>
  )
}

export default Tours