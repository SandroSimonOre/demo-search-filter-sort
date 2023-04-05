export function Filter (categories) {

    return (
        <section className="flex flex-col border h-full w-1/5">
        
        <div className="">
            {categories.map((item) => (
              <div key={item.id}>
                <input value={item.id} type="checkbox" onChange={handleCheck} />
                <span>{item.title}</span>
              </div>
            ))}
        </div>
               
      </section>
    )
}